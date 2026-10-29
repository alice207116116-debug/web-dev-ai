import { pool } from "../db.js";
//import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";
//import "dotenv/config";
import { supabase } from "../utils/supabase.js";

// insertUser 
export const interUser = async ({ email, password, name, phone }) => {
    // 이메일, 비밀번호는 Supabase한테
    // 비밀번호는 6글자 이상
    const {data, error} = await supabase.auth.signUp({ email, password });

    // 나머지 값은 내가 만든 users 테이블에
    await pool.query(
        `insert into users(id, name, phone)
        values($1, $2, $3)`,
        [data.id, name, phone],
    );

    // 패스워드 암호화 -> 10은 암호화(해시)할 때 내부적으로 연산을 반복하는 횟수
    //const passwordHash = await bcrypt.hash(password, 10);
    // users 테이블에 데이터 추가
    // insert into users(email, password, name, phone)
    // values('test@goole.com', '1234', '테스트', '010-1111-1111')
    //await pool.query(`insert into users(email, password, name, phone) 
    //    values($1, $2, $3, $4)`, 
    //   [email, passwordHash, name, phone],
    //);
};

export const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ 
        email,
        password,
    });

    if (error) {
        return null; // 없는 이메일, 틀린 비밀번호
    }

    // 내가 만든 users 테이블에서 가져옴
    const {rows} = await pool.query(
        `select name from users where id = $1`,
         [data.user.id],
    );

    const user = rows[0];

    return {
        token: data.session.access_token,
        user: { id: data.user.id, email: data.user.email, name: user.name },
    };
};