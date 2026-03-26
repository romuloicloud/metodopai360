---
name: "Extrator de Provas e Ingestão 360"
description: "Protocolo automatizado para varrer URLs de concursos (Pedro II, FAETEC), extrair PDFs/HTMLs, aplicar a persona Acadêmica para criar as Regras de Ouro e injetar diretamente no Supabase."
---

# SKILL: EXTRATOR DE PROVAS E INGESTÃO AUTOMATIZADA

Esta skill define o modus operandi obrigatório quando a Diretoria solicitar a população da "Arena de Fogo" (Banco de Dados Supabase) com as provas reais e históricas de órgãos como Colégio Pedro II, FAETEC, PMERJ, etc.

## 🎯 OBJETIVO
Garantir que os candidatos não consumam simulados genéricos, mas sim o acervo integral das provas anteriores reais, já formatadas sob o rigoroso **Protocolo Pedagógico O Pai 360°** (Explicações agressivas, Regras de Ouro e Gatilhos Rápidos).

## 🛠️ FERRAMENTAS REQUERIDAS
- `read_url_content` ou `read_browser_page`: Para acessar os links fornecidos (ex: FAETEC, DHUI CP2).
- `run_command` (Python/Node): Scripts `.py` ou `.js` com `pdf-parse` (ou similar) se os cadernos de questão estiverem em formato PDF protegido, ou `cheerio` para extração via HTML.
- Persona `Agente Acadêmico`: Para formulação da explicação punitiva e assertiva antes do insert.
- `mcp_supabase-mcp-server_execute_sql`: Para a injeção em massa (Bulk Insert) das questões finalizadas.

## ⚙️ WORKFLOW DE EXECUÇÃO

**PASSO 1: MAPEAMENTO DA URL**
1. Acesse o domínio fornecido (Ex: `https://portal.coseac.uff.br/faetec-2026-1-inscricoes/` ou `https://dhui.cp2.g12.br/oferta/590`).
2. Identifique onde estão ancorados os links de **"Provas Anteriores"** e/ou **"Gabaritos Oficiais"**.
3. Se o banco for em PDF, acione um subagente em Python para processar e estruturar o RAW text.

**PASSO 2: FILTRO ACADÊMICO E ESTRUTURAÇÃO JSON**
As questões não podem subir cruas. O Agente Acadêmico *CORTEX* deve ler a questão e o gabarito oficial e forjar o Array JSON respeitando a tabela de dados:
- `materia`: (Ex: Língua Portuguesa)
- `banca`: (Ex: FAETEC Vunesp / Pedro II)
- `pergunta`: O enunciado limpo.
- `alternativas`: Um array de 4 ou 5 itens *limpos*, SEM o prefixo "A) " ou "A." impresso neles. Deixe apenas o corpo da resposta.
- `correta`: O índice (index-based 0, 1, 2, 3) equivalente ao Gabarito Oficial.
- `explicacao`: A estrutura 360° -> 1. Regra de Ouro. 2. Por que está certa. 3. A Pegadinha Focada.
- `dica_rapida`: O mnemônico de guerra curto e agressivo.

**PASSO 3: HIGIENE DA IMAGEM E UPLOAD LOCAL/STORE**
Se a prova contiver gráficos ou diagramas (comum nas provas de Matemática ou Interpretação Visual da FAETEC):
1. Isole o SVG ou PNG da prova.
2. Salve no diretório `app/` no servidor.
3. Insira o nome do arquivo na string `image_url` do repositório SQL correspondente.

**PASSO 4: BULK INSERT NO SUPABASE**
Com o bloco de questões finalizado e validado pelo Agente Acadêmico, gere a string de `INSERT INTO treinamento` cobrindo 10 a 20 questões por batelada.
Rode a injeção no Supabase Cloud.

---
> 🛑 **TRAVA RIGOROSA DE ESTILO:** Sob NENHUMA hipótese o módulo injetará a questão com explicações curtas ("Letra A está correta porque a lei diz X"). O tom do "O Pai" deve ser rigoroso. A questão deve PUNIR o aluno que errou ensinando a "malícia" que o fez errar. 
