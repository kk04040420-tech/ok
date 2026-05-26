import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL!;

// Transaction 풀 모드에서는 prepare 옵션을 반드시 false로 설정
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client);
