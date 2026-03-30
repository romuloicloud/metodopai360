# Skill: Ingestão de Concurso no Supabase

## Gatilho
Use este workflow sempre que precisar adicionar um novo concurso (edital) ao banco de dados do Squad da Vitória.

## Arquitetura

```
engine_ingestao.js          ← Motor genérico (não editar por concurso)
concursos/
  <orgao>_<nivel>_<ano>.js  ← Arquivo de dados por concurso
.env.local                  ← SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
```

## Hierarquia de 5 Níveis

```
N1: concursos_gps (catálogo GPS) + concursos (FK para disciplinas)
N2: disciplinas   (Português, Matemática, etc.)
N3: modulos       (tópicos por disciplina)
N4: pilulas_forja (teoria em tom tático militar)
N5: exercicios_forja (questões de múltipla escolha)
```

## Como criar um novo concurso

### 1. Criar o arquivo de dados
```bash
cp concursos/pedro_ii_6ano_ef_2026.js concursos/<novo_concurso>.js
```

### 2. Editar o CONFIG do novo arquivo
Campos obrigatórios:
- `orgao_match`: string exata para busca de duplicata em `concursos_gps`
- `concurso_nome`: nome curto para tabela `concursos`
- `concurso_banca`: nome da banca organizadora
- `concurso_gps`: payload completo para `concursos_gps`
- `disciplinas[]`: array com módulos, pílulas e exercícios

### 3. Executar
```bash
node concursos/<novo_concurso>.js
```

O script é **idempotente**: pode ser rodado múltiplas vezes sem criar duplicatas.

## Mapeamento de dificuldade
| String | Inteiro no banco |
|--------|-----------------|
| fácil  | 1               |
| médio  | 2               |
| difícil| 3               |

## Concursos já ingeridos

| Concurso | Arquivo | Data |
|---|---|---|
| FAETEC EF Integral 2026.1 | `ingestao_faetec_2026_ef_integral.js` | 2026-03-30 |
| Pedro II 6º Ano EF 2026 | `concursos/pedro_ii_6ano_ef_2026.js` | 2026-03-30 |

## Próximos a ingerar (Pedro II)
- [ ] Pedro II — 1ª Série EM Regular 2026 (Edital 42/2025)
- [ ] Pedro II — EM Integrado 2026 (Edital 61/2025) — múltiplos cursos técnicos

## Observações
- `SUPABASE_SERVICE_ROLE_KEY` é obrigatória (anon key não tem permissão de escrita com RLS ativo)
- Nunca commitar `.env.local` no git
- Tabela `concursos` tem colunas: `id`, `nome`, `banca`, `created_at`
- Tabela `concursos_gps` tem colunas ricas para o catálogo do app
