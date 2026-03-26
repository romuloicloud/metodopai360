---
name: Revisão de Segurança (RLS e API Keys)
description: Protocolo obrigatório de auditoria e correção de falhas de Row Level Security e vazamento de chaves (API Keys) ao fechar os trabalhos de uma Squad.
---

# Fechamento de Segurança da Squad

Sempre que a Squad estiver concluindo o ciclo, entregando o projeto ou entrando em "hibernação", esta Skill deve ser acionada para garantir que nenhum dado fique exposto em produção.

**Regra Universal:** Este protocolo se aplica a **TODOS** os projetos. A inteligência artificial deve identificar dinamicamente qual é o projeto (Squad) atual e aplicar a varredura e as correções de RLS *especificamente* nas tabelas do banco de dados correspondente àquele projeto.

## 1. Auditoria de Row Level Security (RLS)
O Supabase deve estar 100% blindado contra acessos não autorizados.

**Passo a passo:**
1. Execute a ferramenta `mcp_supabase-mcp-server_list_projects` para localizar o ID do projeto atual da Squad.
2. Utilize a tool `mcp_supabase-mcp-server_get_advisors` com o tipo `security` no projeto.
3. Se houver alertas críticos do tipo `rls_disabled_in_public` (Table publicly accessible), você DEVE:
   - Identificar qual tabela está exposta.
   - Analisar sua regra de negócio (se é dado de usuário, de configuração ou domínio público).
   - Aplicar a migração via `mcp_supabase-mcp-server_apply_migration` definindo as devidas políticas:
     - Tabelas Genéricas: `FOR SELECT TO public USING (true)`
     - Tabelas de Usuários: `USING (auth.uid() = user_id)`
4. Rode a verificação de vulnerabilidades (advisors) novamente até obter ZERO alertas `rls_disabled_in_public`.

## 2. Auditoria e Proteção de API Keys
Nenhuma chave secreta (`service_role`, `secret_key`) pode estar visível no frontend.

**Passo a passo:**
1. Leia o arquivo `.gitignore` usando a tool `view_file` e certifique-se de que os arquivos `.env`, `.env.local`, `.env.*` estejam ignorados (exceto `.env.example`).
2. Utilize a tool `grep_search` na pasta do frontend (`src`, `app` ou equivalentes) procurando pelas palavras `service_role_key` ou chaves que iniciem com o JWT padrão (ex: `ey...`). Nenhuma destas chaves deve aparecer em código limpo.
3. Verifique se apenas as variáveis de ambiente prefixadas adequadamente (ex: `NEXT_PUBLIC_` ou `VITE_`) estão sendo subidas no frontend e que elas correspondam APENAS às "Anon keys" ou client keys inofensivas.
4. Caso encontre qualquer chave secreta "hardcoded" (embutida) no código, as remova imediatamente e mova para as variáveis de ambiente.

## Condição de Êxito
A "Revisão de Segurança" só é considerada completa quando: 
- O relatório de segurança do Supabase voltar limpo sem RLS desabilitados.
- Nenhuma chave restrita/privada estiver visível no repositório público ou de forma estática no client.
