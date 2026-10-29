import { pool } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

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
        `select password, id, email, name from users 
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
        // 출입증 발급 token 토큰
        // 누구나 열어 볼 수 있음 -> password라던가 개인정보는 가급적으로 x
        // 주로 추가하는 건 id, email, role
        // expiresIn : 유효 시간 -> 지나면 다시 로그인
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",    
        });
        // 키랑 값이 똑같으면 값이 생략 가능
        return {
          token, 
          user: { id: user.id, email: user.email, name: user.name },
        }; 
    } else {
      return undefined;
    }
};