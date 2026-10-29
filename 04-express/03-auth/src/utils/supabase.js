// 비밀번호 해시, 토큰 만들기 supabase 인증이 대신 하도록
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_KEY,
    { auth: {persistSession: false, autoRefreshToken: false } },
);