import { type NextRequest } from "next/server";
import type { JobSearchResponse, JobSearchParams } from "@/types";

const JSEARCH_BASE_URL = "https://jsearch.p.rapidapi.com/search-v2";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const params: JobSearchParams = {
    query: searchParams.get("query") ?? "developer",
    country: searchParams.get("country") ?? "us",
    date_posted:
      (searchParams.get("date_posted") as JobSearchParams["date_posted"]) ??
      "all",
    num_pages: Number(searchParams.get("num_pages") ?? "1"),
  };

  if (!process.env.RAPIDAPI_KEY) {
    return Response.json(
      { error: "RAPIDAPI_KEY가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  const url = new URL(JSEARCH_BASE_URL);
  url.searchParams.set("query", params.query);
  url.searchParams.set("country", params.country!);
  url.searchParams.set("date_posted", params.date_posted!);
  url.searchParams.set("num_pages", String(params.num_pages));

  const res = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return Response.json(
      { error: "채용 공고를 불러오는 데 실패했습니다.", status: res.status },
      { status: res.status }
    );
  }

  const data: JobSearchResponse = await res.json();
  return Response.json(data);
}
