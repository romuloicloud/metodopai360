---
description: Executa a Máquina 360 de Ingestão Genética (Teoria TTS + Fixação + Extração de Provas Reais)
---

# 🤖 WORKFLOW: GERATRIZ DE CONTEÚDO 360°

**Quando Usar:** Sempre que a Diretoria abrir um "Novo Edital" (Ex: FAETEC, Polícia Federal, DETRAN) e precisar abastecer o banco de dados em larga escala sem intervenção manual prolongada.

### Passo 1: Input de Alvo (Engajamento do Fundador)
O Agente solicitará ao Fundador:
1. Qual o Nome/Órgão e a Banca Organizadora.
2. A URL ou PDF do Edital Base.
3. A URL ou Diretório onde constam as Provas Anteriores daquele Edital para raspagem.

### Passo 2: Geração do Genoma (UUID do Supabase)
Execute um script remoto para inserir o Edital na tabela `concursos_gps`. Salve o `UUID` gerado em memória, pois ele é a Chave Mestra que amarrará a Rota de Estudos às questões.

### Passo 3: Fornalha da Teoria Híbrida (TTS + Exercícios)
Lendo o conteúdo programático do edital fornecido:
1. Fatie cada matéria principal em Tópicos Chave.
2. Com auxílio da LLM, gere as Pílulas de Teoria formatadas em texto ágil (tom tático militar, sem redundância), prontas para serem narradas pelo motor TTS no ônibus/trem.
3. Gere o Exercício de Fixação Imediato.
4. Suba o pacote massivo na tabela `teoria`.

### Passo 4: O Rastreador de Provas Oficiais (Prática 360)
Acione a ferramenta `read_url_content` sobre a fonte de provas antigas fornecida no Passo 1.
1. Formate o texto cru numa estrutura de Questão + Alternativas.
2. Apague qualquer vestígio letivo como "A)", "B)".
3. Invente a Explicação Agressiva (mostrando a pegadinha) e a Dica Rápida em formato mnemônico.
4. Execute o Bulk Insert SQL injetando essas centenas de questões originais na tabela `treinamento`, obrigatoriamente vinculadas à Chave Mestra.

### Passo 5: Avaliação Front-End
Peça ao Fundador para acessar a plataforma, clicar no novo órgão gerado via Front-End Dinâmico e validar a transição perfeita de Teoria para Prática.
