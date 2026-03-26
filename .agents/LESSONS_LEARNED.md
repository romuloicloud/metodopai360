# 🧠 Cérebro da Squad: Lições Aprendidas (Feedback Loop)

Este arquivo é um registro vivo (Living Document). Ele serve para anotar os desafios superados, erros arquiteturais e as melhores práticas descobertas pelo Arquiteto (Humano) e pelas IAs (Antigravity e Claude Code).

---

## 2026-03 - Inicialização do "Shared Brain"
- **Contexto:** Configuração do ambiente integrado de desenvolvimento assistido por IA.
- **Descoberta:** O uso de diretórios como `/academico`, `/marketing` e `/vendas` para armazenar `JSONs` comportamentais é a espinha dorsal de como as automações tomam decisões.
- **Lição Aprendida:** Qualquer criação de nova "esteira" ou cargo na agência digital deve seguir este modelo de arquivo JSON modular, em vez de misturar prompts extensos dentro dos scripts (como `script.js` ou `backend_diagnostico.js`).
- **Regra Futura:** Ao refatorar funções do `/app`, mantenha a lógica de integração isolada da definição de prompt.
