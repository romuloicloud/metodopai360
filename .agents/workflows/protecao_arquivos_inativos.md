---
description: Protocolo de Isolamento de Arquivos e Prevenção de Contaminação
---

# 🛡️ Diretriz de Isolamento de Arquivos (Anti-Contaminação)

Para evitar que diferentes editais (PMERJ, Pedro II, Petrobras) se misturem e causem bugs em arquivos alheios, a Inteligência Artificial deve seguir esta lei marcial:

1. **Visão de Túnel Ativada (Foco Restrito):**
   - Ao trabalhar em uma funcionalidade (ex: Carregamento do Edital TSE), **é terminantemente proibido** abrir, ler ou editar arquivos `.html`, `.js` ou `.json` que pertençam a outros concursos e não sejam o alvo rigoroso da requisição atual.

2. **Verificação de Dependência Estrita:**
   - Nunca modifique um arquivo global (como `style.css` ou `core.js`) sem antes utilizar ferramentas de busca (`grep_search`) para mapear se essa alteração vai "cair em cascata" e quebrar as outras interfaces do ecossistema. Na dúvida, crie uma classe ou função específica apenas para a feature isolada.

3. **Quarentena de Arquivos Mortos:**
   - Não transite informações de arquivos antigos para novos sem conferência. Se um bloco de código foi desativado, ele não deve influenciar as decisões arquiteturais futuras (impedir alucinações onde o agente recria bugs mortos).
