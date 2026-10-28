import { pool } from "../db.js";

// insertUser 
export const interUser = async ({ email, password, name, phone }) => {
    // 패스워드 암호화
    
    // users라는 테이블에 데이터 추가
    // insert into users(email, password, name, phone)
    // values('test@goole.com', '1234', '테스트', '010-1111-1111')
    await pool.query(`insert into users(email, password, name, phone) 
        values($1, $2, $3, $4)`, 
        [email, password, name, phone]
    );
};

export const login = async ({ email, password }) => {
    // 사용자가 입력한 값이 DB에 저장한 값이 맞는지 조회 -> select
    const { rows } = await pool.query(
        `select * from users 
        where email = $1 and password = $2`, 
        [email, password],
  );
  return rows[0];
};