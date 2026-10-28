import { pool } from "../db.js";

// insertUser 
export const interUser = async ({ email, password, name, phone }) => {
    // users라는 테이블에 데이터 추가
    // insert into users(email, password, name, phone)
    // values('test@goole.com', '1234', '테스트', '010-1111-1111')
    await pool.query(`insert into users(email, password, name, phone) 
        values($1, $2, $3, $4)`, 
        [email, password, name, phone]
    );
};



