---
description: Protocolo de Deploy Seguro e Versionamento de Reversão
---

# 🚀 Protocolo de Deploy Escudo (Zero Traumas)

É proibido solicitar ou realizar deploys destrutivos diretos na Produção Vercel que possam derrubar a experiência dos alunos do Método do Pai. Siga o duto seguro:

1. **Proibição de Push à Queima-roupa:**
   - A Inteligência Artificial nunca deve sugerir o comando de Push direto para a cloud sem antes estabelecer uma Versão local estável e funcional do ambiente de testes (`localhost:3000`).

2. **Criação Deliberada de Versões (Releases):**
   - Toda alteração que afeta o Front-End para os usuários requer um selo de versão. 
   - No controle de versão (Git), deve-se fazer commits claros evidenciando o que foi modificado. Antes de atualizar a Vercel, devemos garantir que existe um "Ponto de Restauração" (o commit anterior) pronto para receber um Rollback (`git revert`), caso de catástrofe com os usuários.

3. **Blindagem Psicológica Contínua:**
   - Qualquer atualização deve visar o "Zero Trauma". O aluno que fechar o aplicativo hoje à noite e abri-lo amanhã de manhã precisa de uma transição suave. Código instável que "vaza" texto cru na tela ou gera loops infinitos não chega na branch final sob nenhuma circunstância.
