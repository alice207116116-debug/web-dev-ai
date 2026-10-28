import { pool } from "../db.js";
import bcrypt from "bcryptjs";

// insertUser 
export const interUser = async ({ email, password, name, phone }) => {
    // 패스워드 암호화 -> 10은 암호화(해시)할 때 내부적으로 연산을 반복하는 횟수
    const passwordHash = await bcrypt.hash(password, 10);

    // users 테이블에 데이터 추가
    // insert into users(email, password, name, phone)
    // values('test@goole.com', '1234', '테스트', '010-1111-1111')
    await pool.query(`insert into users(email, password, name, phone) 
        values($1, $2, $3, $4)`, 
        [email, passwordHash, name, phone],
    );
};

export const login = async ({ email, password }) => {
    // 사용자가 입력한 값이 DB에 저장한 값이 맞는지 조회 -> select
    // 비밀번호는 암호화를 했기 때문에 암호화된 걸 확인 -> bcrypt.compare
    // DB 조회는 이메일 가지고만 함
    const { rows } = await pool.query(
        `select password from users 
        where email = $1`,
        [email],
    );
    const user = rows[0]; // 이메일이 없다면 undefined
    if(!user) {
        return null;
    };

    // 입력한 비밀번호를 DB에 저장된 해시 비밀번호와 비교
    console.log(password, user.password);
    const ok = await bcrypt.compare(password, user.password);
    if (ok) {
        return user;
    } else {
      return undefined;
    }
};