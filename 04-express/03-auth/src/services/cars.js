// 비즈니스 로직(존재 확인, 권한 체크, 여러 모델들 조합)
// +) DB 관련 로직 -> prisma 추가되면서 분리할게요!
// 요청(req)과 응답(res)을 모른다
import { pool } from "../db.js";

export const findCars = async () => {
    // 방법 2. 쿼리 하나로 해결
};

export const findCarById = async (id) => {
    const { rows } = await pool.query(`select * from cars where id = $1`, [id]);
    // 어차피 결과 1개만 필요하니까
    return rows [0];
};