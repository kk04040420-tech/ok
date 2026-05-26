# 포트폴리오 DB ERD

## Mermaid ERD

```mermaid
erDiagram
    experiences {
        uuid    id          PK
        text    company     "회사명"
        text    role        "직함"
        date    start_date  "입사일"
        date    end_date    "퇴사일 (null = 현재 재직)"
        text    description "업무 설명"
        int     sort_order  "표시 순서"
        timestamptz created_at
    }

    experience_tech_stack {
        uuid id          PK
        uuid experience_id FK
        text tech        "기술명"
    }

    educations {
        uuid    id          PK
        text    school      "학교명"
        text    major       "전공"
        text    degree      "학위 (학사/석사 등)"
        date    start_date  "입학일"
        date    end_date    "졸업일 (null = 재학중)"
        text    description "설명 (nullable)"
        int     sort_order  "표시 순서"
        timestamptz created_at
    }

    projects {
        uuid    id          PK
        text    title       "프로젝트명"
        text    description "설명"
        text    github_url  "nullable"
        text    live_url    "nullable"
        text    image_url   "nullable"
        int     sort_order  "표시 순서"
        timestamptz created_at
    }

    project_tech_stack {
        uuid id         PK
        uuid project_id FK
        text tech       "기술명"
    }

    skills {
        uuid id         PK
        text name       "기술명"
        text category   "frontend | backend | infra | etc"
        int  sort_order "표시 순서"
    }

    experiences      ||--o{ experience_tech_stack : "has"
    projects         ||--o{ project_tech_stack    : "has"
```

## 테이블 설명

| 테이블 | 설명 |
|--------|------|
| `experiences` | 경력 정보. `end_date` 가 NULL이면 현재 재직 중 |
| `experience_tech_stack` | 경력별 사용 기술 (1:N) |
| `educations` | 학력 정보. `end_date` 가 NULL이면 재학 중 |
| `projects` | 프로젝트 목록 |
| `project_tech_stack` | 프로젝트별 기술 스택 (1:N) |
| `skills` | 기술 스택 목록 (카테고리 구분) |

## 주요 설계 결정

- **기간 표현**: 문자열(`"2023.03 — 현재"`) 대신 `DATE` 타입 분리 → UI에서 포맷 처리
- **tech_stack**: 배열이 아닌 별도 테이블로 분리 → 필터링/정렬 용이
- **sort_order**: 각 테이블에 포함해 표시 순서를 DB에서 제어
