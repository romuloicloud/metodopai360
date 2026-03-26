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

**PASSO 1: MAPEAMENTO DA URL E CADASTRO DO EDITAL**
1. Acesse o domínio fornecido (Ex: Pedro II, FAETEC, PF).
2. Se o concurso for novo, o primeiro passo é registrá-lo na tabela `concursos_gps` para gerar o UUID base. Esse UUID é a Chave Mestra.
3. Identifique o Conteúdo Programático (Edital) e as Provas Anteriores.

**PASSO 2: FUNDIÇÃO DA TRILHA INTERCALADA (TEORIA + FIXAÇÃO)**
O Frontend atual não tolera PDFs estáticos. Ele exige a dinâmica *Teoria -> Exercício de Fixação*.
Para cada tópico do edital extraído:
1. O Agente deve redigir uma **Pílula de Teoria** (texto enxuto, direto e formatado para ser falado em áudio pelo TTS do navegador).
2. O Agente deve redigir um **Exercício de Fixação Inédito** validando exatamente a pílula anterior.
3. Inserir esse par (Teoria + Exercício) na tabela `teoria` utilizando a Chave Mestra do Edital.

**PASSO 3: HIGIENE DA IMAGEM E UPLOAD LOCAL/STORE**
Se a prova contiver gráficos ou diagramas (Exatas/Lógica):
1. Isole o SVG ou PNG da prova.
2. Insira a URL real da imagem na coluna `image_url` das tabelas para renderização frontal.

**PASSO 4: BULK INSERT NO SUPABASE (PRÁTICA 360)**
Com as provas reais antigas extraídas:
1. Aplique o filtro de Persona (Explicações agressivas, 360, Dica Rápida em Mnemônico). As alternativas não podem ter as letras (A), (B).
2. Faça a injeção em massa na tabela `treinamento` sempre linkando ao UUID do Edital Mestre.

---
> 🛑 **TRAVA RIGOROSA DE ESTILO:** Sob NENHUMA hipótese o módulo injetará a questão com explicações curtas ("Letra A está correta porque a lei diz X"). O tom do "O Pai" deve ser militar e agressivo. A teoria deve ser escrita para parecer uma locução humana tática (pronta para voz mecânica). A questão prática deve PUNIR o aluno que errou ensinando a "malícia". 
