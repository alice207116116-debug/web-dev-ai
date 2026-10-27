import pg from "pg"; 
import "dotenv/config"; 

// export : 다른 파일에서 import로 가져다 쓸 수 있게 내보내기
export const pool = new pg.Pool({
    connectionString: process.env.DB_URL,
     "postgresql://postgres.wykmvjiyysyyypzexftv:jN7uSGtunBjFN8fy@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres",
    ssl: { rejectUnauthorized: false }
});