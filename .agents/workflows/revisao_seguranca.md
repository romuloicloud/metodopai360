---
description: Protocolo de Revisão de Segurança (RLS e API Keys) antes do fechamento de uma Squad
---

# Executar a Revisão de Segurança

Sempre que acionado por `/revisao_seguranca`, inicie imediatamente as auditorias descritas na Skill `revisao_seguranca`.

1. Realize a verificação do **Row Level Security** via `mcp_supabase-mcp-server_get_advisors`.
2. Habilite o RLS e implemente políticas restritivas onde necessário, validando a correção preenchendo as dependências sem RLS da query enviada.
3. Faça a verificação de código fonte varrendo no projeto chaves (API Keys) embutidas que devam estar em `.env`.
4. Valide que `.env` está de forma segura no `.gitignore`.
5. Apresente um laudo completo (em um artifact) de todos os pontos ajustados sob os pilares e declare a plataforma segura.
