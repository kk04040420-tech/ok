# JSearch Job API 연동 스펙

## 개요

- **API 제공자**: RapidAPI — JSearch (jsearch.p.rapidapi.com)
- **목적**: 채용 공고 검색 데이터 연동
- **인증 방식**: RapidAPI Key (헤더)

---

## 엔드포인트

### 채용 공고 검색

```
GET https://jsearch.p.rapidapi.com/search-v2
```

#### 요청 헤더

| 헤더 키 | 값 | 필수 |
|---|---|---|
| `Content-Type` | `application/json` | ✅ |
| `x-rapidapi-host` | `jsearch.p.rapidapi.com` | ✅ |
| `x-rapidapi-key` | `{RAPIDAPI_KEY}` | ✅ |

> **주의**: API 키는 `.env.local`에 `RAPIDAPI_KEY`로 저장하고 코드에 하드코딩하지 마세요.

#### 쿼리 파라미터

| 파라미터 | 타입 | 필수 | 설명 | 예시 |
|---|---|---|---|---|
| `query` | string | ✅ | 검색어 (직무명, 기술 등) | `designer`, `frontend developer` |
| `num_pages` | number | ✅ | 반환할 페이지 수 | `1` |
| `country` | string | ✅ | 국가 코드 (ISO 3166-1 alpha-2) | `us`, `kr` |
| `date_posted` | string | ✅ | 게시일 필터 | `all`, `today`, `3days`, `week`, `month` |

#### 요청 예시

```bash
curl --request GET \
  --url 'https://jsearch.p.rapidapi.com/search-v2?query=designer&num_pages=1&country=us&date_posted=all' \
  --header 'Content-Type: application/json' \
  --header 'x-rapidapi-host: jsearch.p.rapidapi.com' \
  --header 'x-rapidapi-key: {RAPIDAPI_KEY}'
```

---

## 응답 스펙

### 200 OK

```json
{
  "status": "OK",
  "request_id": "uuid-string",
  "parameters": {
    "query": "designer",
    "date_posted": "all",
    "country": "us",
    "language": "en"
  },
  "data": {
    "jobs": [
      {
        "job_id": "string",
        "employer_name": "string",
        "employer_logo": "string | null",
        "employer_website": "string | null",
        "employer_company_type": "string | null",
        "job_publisher": "string",
        "job_employment_type": "FULLTIME | PARTTIME | CONTRACTOR | INTERN",
        "job_title": "string",
        "job_apply_link": "string",
        "job_apply_is_direct": "boolean",
        "job_apply_quality_score": "number",
        "job_description": "string",
        "job_is_remote": "boolean",
        "job_posted_at_datetime_utc": "string (ISO 8601)",
        "job_city": "string | null",
        "job_state": "string | null",
        "job_country": "string",
        "job_latitude": "number | null",
        "job_longitude": "number | null",
        "job_benefits": "string[] | null",
        "job_google_link": "string",
        "job_offer_expiration_datetime_utc": "string | null",
        "job_required_experience": {
          "no_experience_required": "boolean",
          "required_experience_in_months": "number | null",
          "experience_mentioned": "boolean",
          "experience_preferred": "boolean"
        },
        "job_required_skills": "string[] | null",
        "job_required_education": {
          "postgraduate_degree": "boolean",
          "professional_certification": "boolean",
          "high_school": "boolean",
          "associates_degree": "boolean",
          "bachelors_degree": "boolean",
          "degree_mentioned": "boolean",
          "degree_preferred": "boolean",
          "professional_certification_mentioned": "boolean"
        },
        "job_experience_in_place_of_education": "boolean",
        "job_min_salary": "number | null",
        "job_max_salary": "number | null",
        "job_salary_currency": "string | null",
        "job_salary_period": "HOUR | DAY | WEEK | MONTH | YEAR | null",
        "job_highlights": {
          "Qualifications": "string[] | null",
          "Responsibilities": "string[] | null",
          "Benefits": "string[] | null"
        },
        "job_job_title": "string | null",
        "job_posting_language": "string",
        "job_onet_soc": "string",
        "job_onet_job_zone": "string"
      }
    ],
    "cursor": "string | null"
  }
}
```

### 응답 필드 설명 (주요 필드)

| 필드 | 타입 | 설명 |
|---|---|---|
| `status` | string | 요청 성공 여부 (`"OK"`) |
| `request_id` | string | 요청 고유 식별자 |
| `parameters` | object | 요청 시 사용된 파라미터 |
| `data.jobs` | array | 채용 공고 목록 |
| `data.cursor` | string\|null | 다음 페이지 커서 (페이지네이션) |

#### job 오브젝트 주요 필드

| 필드 | 타입 | 설명 |
|---|---|---|
| `job_id` | string | 공고 고유 ID |
| `employer_name` | string | 회사명 |
| `employer_logo` | string\|null | 회사 로고 URL |
| `job_title` | string | 포지션명 |
| `job_employment_type` | string | 고용 형태 |
| `job_is_remote` | boolean | 원격 근무 여부 |
| `job_apply_link` | string | 지원 링크 |
| `job_description` | string | 채용 공고 본문 |
| `job_posted_at_datetime_utc` | string | 게시일 (UTC) |
| `job_city` / `job_state` | string\|null | 근무지 |
| `job_min_salary` / `job_max_salary` | number\|null | 급여 범위 |
| `job_required_skills` | string[]\|null | 요구 기술 스택 |
| `job_highlights` | object | 자격요건 / 책임 / 혜택 요약 |

---

## 에러 응답

| HTTP 상태 코드 | 원인 |
|---|---|
| `400 Bad Request` | 필수 파라미터 누락 또는 잘못된 값 |
| `401 Unauthorized` | API 키 없음 또는 유효하지 않음 |
| `403 Forbidden` | 플랜 초과 또는 접근 권한 없음 |
| `429 Too Many Requests` | 요청 한도 초과 (Rate Limit) |
| `500 Internal Server Error` | RapidAPI 서버 오류 |

---

## 구현 가이드

### 환경 변수

`.env.local`에 아래 값을 추가하세요:

```env
RAPIDAPI_KEY=your_api_key_here
```

### Next.js Route Handler 예시

```ts
// src/app/api/jobs/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "developer";
  const country = searchParams.get("country") ?? "us";
  const datePosted = searchParams.get("date_posted") ?? "all";

  const res = await fetch(
    `https://jsearch.p.rapidapi.com/search-v2?query=${encodeURIComponent(query)}&num_pages=1&country=${country}&date_posted=${datePosted}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
      },
      next: { revalidate: 3600 }, // 1시간 캐시
    }
  );

  if (!res.ok) {
    return Response.json({ error: "Failed to fetch jobs" }, { status: res.status });
  }

  const data = await res.json();
  return Response.json(data);
}
```

### TypeScript 타입 정의 위치

타입은 `src/types/index.ts`에 추가 예정:

```ts
export interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string | null;
  job_title: string;
  job_employment_type: "FULLTIME" | "PARTTIME" | "CONTRACTOR" | "INTERN";
  job_is_remote: boolean;
  job_apply_link: string;
  job_description: string;
  job_posted_at_datetime_utc: string;
  job_city: string | null;
  job_state: string | null;
  job_country: string;
  job_min_salary: number | null;
  job_max_salary: number | null;
  job_salary_currency: string | null;
  job_salary_period: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null;
  job_required_skills: string[] | null;
  job_highlights: {
    Qualifications?: string[];
    Responsibilities?: string[];
    Benefits?: string[];
  };
}

export interface JobSearchResponse {
  status: string;
  request_id: string;
  parameters: {
    query: string;
    date_posted: string;
    country: string;
    language: string;
  };
  data: {
    jobs: Job[];
    cursor: string | null;
  };
}
```

---

## Rate Limit

RapidAPI 플랜에 따라 다르며, 응답 헤더에서 확인할 수 있습니다:

| 헤더 | 설명 |
|---|---|
| `x-ratelimit-requests-limit` | 월 최대 요청 수 |
| `x-ratelimit-requests-remaining` | 남은 요청 수 |
