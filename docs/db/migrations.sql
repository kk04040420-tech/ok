-- ============================================================
-- 포트폴리오 사이트 DB 마이그레이션
-- Supabase SQL Editor에서 실행하세요
-- ============================================================

-- 경력
CREATE TABLE IF NOT EXISTS experiences (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  company     TEXT        NOT NULL,
  role        TEXT        NOT NULL,
  start_date  DATE        NOT NULL,
  end_date    DATE,                          -- NULL = 현재 재직 중
  description TEXT        NOT NULL,
  sort_order  INTEGER     NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 경력 기술 스택
CREATE TABLE IF NOT EXISTS experience_tech_stack (
  id            UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
  experience_id UUID  NOT NULL REFERENCES experiences(id) ON DELETE CASCADE,
  tech          TEXT  NOT NULL
);

-- 학력
CREATE TABLE IF NOT EXISTS educations (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  school      TEXT        NOT NULL,
  major       TEXT        NOT NULL,
  degree      TEXT        NOT NULL,
  start_date  DATE        NOT NULL,
  end_date    DATE,                          -- NULL = 재학 중
  description TEXT,
  sort_order  INTEGER     NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 프로젝트
CREATE TABLE IF NOT EXISTS projects (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT        NOT NULL,
  description TEXT        NOT NULL,
  github_url  TEXT,
  live_url    TEXT,
  image_url   TEXT,
  sort_order  INTEGER     NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 프로젝트 기술 스택
CREATE TABLE IF NOT EXISTS project_tech_stack (
  id         UUID  PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID  NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  tech       TEXT  NOT NULL
);

-- 기술 스택
CREATE TABLE IF NOT EXISTS skills (
  id         UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT    NOT NULL,
  category   TEXT    NOT NULL CHECK (category IN ('frontend', 'backend', 'infra', 'etc')),
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- ============================================================
-- 샘플 데이터
-- ============================================================

-- 경력 샘플
INSERT INTO experiences (company, role, start_date, end_date, description, sort_order) VALUES
  ('OO 회사',     'Frontend Developer', '2023-03-01', NULL,         'Next.js 기반의 웹 서비스를 개발 및 유지보수하였습니다.', 0),
  ('OO 스타트업', 'Frontend Intern',    '2022-07-01', '2022-12-31', 'React를 활용한 대시보드 개발에 참여하였습니다.',         1);

INSERT INTO experience_tech_stack (experience_id, tech)
SELECT id, unnest(ARRAY['Next.js','TypeScript','Tailwind CSS']) FROM experiences WHERE company = 'OO 회사';

INSERT INTO experience_tech_stack (experience_id, tech)
SELECT id, unnest(ARRAY['React','JavaScript','Styled Components']) FROM experiences WHERE company = 'OO 스타트업';

-- 학력 샘플
INSERT INTO educations (school, major, degree, start_date, end_date, description, sort_order) VALUES
  ('OO대학교', '컴퓨터공학과', '학사', '2019-03-01', '2023-02-28', '전공 수업과 프로젝트를 통해 소프트웨어 개발 기초를 쌓았습니다.', 0);
