import type { JobSearchResponse, JobSearchParams } from "@/types";

export async function fetchJobs(
  params: JobSearchParams = { query: "developer" }
): Promise<JobSearchResponse["data"]["jobs"]> {
  const { query, country = "us", date_posted = "all", num_pages = 1 } = params;

  const url = new URL("https://jsearch.p.rapidapi.com/search-v2");
  url.searchParams.set("query", query);
  url.searchParams.set("country", country);
  url.searchParams.set("date_posted", date_posted);
  url.searchParams.set("num_pages", String(num_pages));

  const res = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const data: JobSearchResponse = await res.json();
  return data.data?.jobs ?? [];
}
