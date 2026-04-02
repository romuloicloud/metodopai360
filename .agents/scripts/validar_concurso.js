#!/usr/bin/env node
/**
 * Validador automático de arquivos de ingestão de concurso
 * Uso: node .agents/scripts/validar_concurso.js concursos/ARQUIVO.js
 */

const fs   = require('fs');
const path = require('path');

const arquivo = process.argv[2];
if (!arquivo) {
  console.error('Uso: node validar_concurso.js concursos/ARQUIVO.js');
  process.exit(1);
}

const conteudo = fs.readFileSync(path.resolve(arquivo), 'utf-8');
const erros    = [];
const avisos   = [];

// ── 1. Placeholders não substituídos ────────────────────────────
const placeholders = (conteudo.match(/\[REQ\]/g) || []).length;
if (placeholders > 0) {
  erros.push(`${placeholders} campo(s) [REQ] não foram preenchidos`);
}

// ── 2. Contar disciplinas no cabeçalho vs no código ──────────────
const cabecalhoDisciplinas = (conteudo.match(/^\s*\*?\s*\d+\.\s+\w/gm) || []).length;
const disciplinasNome      = (conteudo.match(/nome:\s*'[^']+'/g) || []);

// Filtra apenas nomes de disciplinas (não módulos/pílulas/exercícios)
// Heurística: estão no array disciplinas[], não aninhados
const blocosDisciplina = conteudo.split('nome:').length - 1;

// ── 3. Módulos por disciplina ───────────────────────────────────
const modulosBlocos = (conteudo.match(/modulos:\s*\[/g) || []).length;
const disciplinasBloco = (conteudo.match(/\{\s*\n\s*nome:/g) || []).length;

if (modulosBlocos > 0 && disciplinasBloco > 0) {
  // Conta módulos totais / disciplinas totais
  const totalModulos = (conteudo.match(/nome:\s*'[^']+',\s*\n\s*descricao:/g) || []).length;
  const modPorDisc   = disciplinasBloco > 0 ? totalModulos / disciplinasBloco : 0;
  if (totalModulos > 0 && modPorDisc < 1.5) {
    avisos.push(`Média de módulos por disciplina: ${modPorDisc.toFixed(1)} (recomendado ≥ 2)`);
  }
}

// ── 4. Exercícios por módulo ────────────────────────────────────
const totalExercicios = (conteudo.match(/titulo:.*\n.*nivel_dificuldade/g) || []).length;
const totalModulosEf  = (conteudo.match(/descricao:\s*'/g) || []).length;
if (totalModulosEf > 0 && totalExercicios / totalModulosEf < 1.8) {
  avisos.push(`Média de exercícios por módulo: ${(totalExercicios/totalModulosEf).toFixed(1)} (recomendado ≥ 2)`);
}

// ── 5. status_edital válido ─────────────────────────────────────
const statusMatch = conteudo.match(/status_edital:\s*'([^']+)'/);
if (!statusMatch) {
  erros.push('status_edital não encontrado');
} else {
  const valores = ['previsto','aberto','encerrado'];
  if (!valores.includes(statusMatch[1])) {
    erros.push(`status_edital inválido: '${statusMatch[1]}' — use: ${valores.join(' | ')}`);
  }
}

// ── 6. orgao_match presente ─────────────────────────────────────
if (!conteudo.includes('orgao_match:')) {
  erros.push('orgao_match não encontrado');
}

// ── 7. Sintaxe JS básica (aspas balanceadas) ────────────────────
const aspasSimples = (conteudo.match(/'/g) || []).length;
if (aspasSimples % 2 !== 0) {
  erros.push('Possível erro de sintaxe: número ímpar de aspas simples');
}

// ── Relatório ────────────────────────────────────────────────────
console.log(`\n🔍 VALIDAÇÃO: ${arquivo}`);
console.log('='.repeat(50));
console.log(`  Módulos encontrados  : ${totalModulosEf}`);
console.log(`  Exercícios totais    : ${totalExercicios}`);
console.log(`  Placeholders [REQ]   : ${placeholders}`);
console.log(`  status_edital        : ${statusMatch ? statusMatch[1] : 'AUSENTE'}`);
console.log('');

if (avisos.length > 0) {
  console.log('⚠️  AVISOS:');
  avisos.forEach(a => console.log(`   → ${a}`));
  console.log('');
}

if (erros.length > 0) {
  console.log('❌ REPROVADO — corrija antes de ingerir:');
  erros.forEach(e => console.log(`   ✗ ${e}`));
  process.exit(1);
} else {
  console.log('✅ APROVADO — pode rodar a ingestão');
  process.exit(0);
}
