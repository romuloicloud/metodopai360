# OpenSquad - Squad da Vitória (Shared Context)

## 📌 Visão Geral do Projeto
O `squad_da_vitoria` é um ecossistema projetado para operações integradas e automatizadas usando Múltiplos Agentes Especialistas de IA. O sistema engloba automações de backend, fluxos de geração de conteúdo e um hub de acesso frontend.

## 🏗️ Stack Tecnológica & Arquitetura
- **Frontend Principal:** Vanilla JS, HTML5, CSS3 (Arquivos estáticos e lógicos na pasta `/app` como `index.html`, `script.js`).
- **Integrações Backend:** Scripts Node.js (`backend_diagnostico.js`, `backend_onboarding.js`) e Python (`download_logos.py`).
- **Banco de Dados / BaaS:** Supabase (via `@supabase/supabase-js`).
- **Cérebros dos Agentes (Personas em JSON):**
  - `/academico`: Regras para o Arquitecto Pedagógico e Analista PCI.
  - `/marketing`: Estruturas de Copy e Publishers Autônomos.
  - `/vendas`: Comportamento do Closer de vendas.
- **Protocolos da Sandbox:** O diretório `.agents/workflows` abriga os processos críticos como deploys seguros e proteção de arquivos.

## 🤖 Regras Rigorosas para Agentes (Claude Code / Antigravity)
1. **Respeito ao Arquiteto:** O Desenvolvedor atua como o **Arquiteto** principal. Você, como agente de IA, tem a função de codificar de forma limpa, segura e direta ao ponto, sempre respeitando a arquitetura existente.
2. **Ponto de Partida:** Ao atuar em novos fluxos, analise as personas `.json` nas respectivas pastas antes de criar novas regras de interação.
3. **Database Rules:** Utilizar estritamente o SDK do Supabase. Nenhuma operação destrutiva (DROP, DELETE em massa) deve ser feita sem confirmação explícita.
4. **DevOps e Deploy:** O uso dos fluxos de `.agents/workflows` (como `/versionamento_deploy_seguro`) é mandatório antes de levar código para produção.
5. **Autocorreção e Memória:** Cometeu um bug ou projetou um padrão que funcionou excepcionalmente bem? Documente IMEDIATAMENTE no arquivo `.agents/LESSONS_LEARNED.md`.
6. **Idioma Oficial:** Todas as respostas aos prompts e comentários no código gerados por você DEVERÃO ser estritamente em **Português do Brasil (PT-BR)**.
7. **Limites de Escopo (Travas de Persona):**
   - **Acadêmico (`academico/`):** Atuação voltada a conteúdo didático, correção e leitura de editais. PROIBIDO interagir com fluxos financeiros e persuasão comercial.
   - **Vendas (`vendas/`):** Atuação restrita à conversão, checkout e funil de abandono no WhatsApp. PROIBIDO gerar gabaritos, alterar questões ou opinar em áreas acadêmicas.
   - **Marketing (`marketing/`):** Focado exclusivamente na captação de tráfego (Externa). Sem acesso à área de usuário logado.

## 🛠️ Comandos Base
- Para instalar/atualizar dependências da stack Node: `cd app && npm install`
