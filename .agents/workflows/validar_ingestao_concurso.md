# Workflow: Validar Ingestão de Concurso
## Executor: Antigravity | Disparador: antes de qualquer commit de concurso

### Objetivo
Garantir que o arquivo de ingestão está completo antes de rodar no banco.
Antigravity DEVE executar este checklist e reportar o resultado antes de finalizar.

---

## PASSO 1 — Verificação de Estrutura (automática)

Execute o script de validação:
```bash
node .agents/scripts/validar_concurso.js concursos/NOME_DO_ARQUIVO.js
```

O script retorna:
- ✅ APROVADO — pode rodar a ingestão
- ❌ REPROVADO — lista os problemas encontrados

---

## PASSO 2 — Checklist Manual (obrigatório)

Antes de marcar a tarefa como concluída, confirme:

| # | Verificação | Status |
|---|---|---|
| 1 | Número de disciplinas no arquivo = número listado no cabeçalho do arquivo | [ ] |
| 2 | Cada disciplina tem ≥ 2 módulos | [ ] |
| 3 | Cada módulo tem ≥ 1 pílula e ≥ 2 exercícios | [ ] |
| 4 | Nenhum campo contém `[REQ]` (placeholder não substituído) | [ ] |
| 5 | `status_edital` é `'aberto'` se inscrições estão abertas | [ ] |
| 6 | `correta` é um índice válido (0 a 4) e está correto | [ ] |
| 7 | `node concursos/ARQUIVO.js --dry-run` passa sem erro de sintaxe | [ ] |

---

## PASSO 3 — Comparação com Concurso Similar

Se existir concurso da mesma família (ex: militar, policial), compare:
```bash
grep -c "nome:" concursos/ARQUIVO_NOVO.js
grep -c "nome:" concursos/ARQUIVO_SIMILAR.js
```
Os valores devem ser proporcionais. Diferença > 30% é sinal de conteúdo incompleto.

---

## REGRAS DE ESCOPO DO ANTIGRAVITY

### ✅ PODE FAZER SOZINHO
- Gerar conteúdo de pílulas e exercícios seguindo o template
- Atualizar `status_edital` e `data_prova` baseado no edital
- Criar arquivos novos a partir do `_TEMPLATE_concurso.js`
- Rodar validação e reportar resultado

### ⚠️ DEVE REPORTAR ANTES DE FAZER
- Alterar o engine_ingestao.js
- Modificar campos de concursos já ingeridos (pode duplicar dados)
- Adicionar novas colunas ou tabelas no Supabase

### 🚫 NUNCA FAZER
- Rodar ingestão sem checklist aprovado
- Marcar tarefa concluída com disciplinas faltando
- Alterar gabarito (`correta`) sem fonte do edital
- Operações destrutivas no banco (DELETE, DROP)
