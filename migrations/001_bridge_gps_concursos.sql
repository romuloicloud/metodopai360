-- MIGRAÇÃO 001: Ponte entre concursos_gps e concursos
-- Executada em: 2026-03-30
-- Status: CONCLUÍDA

-- 1. Adicionada coluna de referência em concursos_gps
ALTER TABLE concursos_gps
ADD COLUMN IF NOT EXISTS concurso_ref_id uuid REFERENCES concursos(id) ON DELETE SET NULL;

-- 2. Pontes populadas
UPDATE concursos_gps
SET concurso_ref_id = (SELECT id FROM concursos WHERE nome = 'PMERJ' LIMIT 1)
WHERE orgao = 'PMERJ';

UPDATE concursos_gps
SET concurso_ref_id = (SELECT id FROM concursos WHERE nome = 'FAETEC EF Integral 2026.1' LIMIT 1)
WHERE orgao = 'FAETEC - EF Integral 2026.1';

UPDATE concursos_gps
SET concurso_ref_id = (SELECT id FROM concursos WHERE nome = 'Pedro II - 6º Ano EF 2026' LIMIT 1)
WHERE orgao = 'Pedro II - 6º Ano EF 2026';

-- 3. Questões legadas migradas para GPS ID real da PMERJ
UPDATE treinamento
SET concurso_id = '37a79dcc-3c56-4615-ac27-d04ec5a86d07'
WHERE concurso_id = '11111111-1111-1111-1111-111111111111';

-- 4. Registro fantasma removido
DELETE FROM concursos_gps WHERE id = '11111111-1111-1111-1111-111111111111';

-- RESULTADO FINAL:
-- 37a79dcc | PMERJ           → d300809a (concursos)
-- b3963977 | FAETEC EF 2026  → d8898cbf (concursos)
-- 9d1c4dae | Pedro II 6º Ano → 9a08f048 (concursos)
