// routes : 어떤 주소와 메서드로 요청이 오면 어느 controller 함수가 받을지 연결만 한다
import { Router } from "express";
import * as car from "../controllers/cars.js";

const router = Router();

// GET /api/cars
router.get("/", async (req, res) => {
  res.send("express 시작!!");
});

router.get("/", async (req, res) => {
   
    const { rows: cars } = await pool.query(`select * from cars`);
    const { rows: counts } = 
      await pool.query(`select car_id, count(*) as service_count
                        from maintenance_records
                        group by car_id`);

    const rows = cars.map((car) => {
      const found = counts.find((c) => c.car_id === car.id);
      return {
        ...car, 
        service_count: found ? found.service_count : 0,
      };
    });

    console.log(rows);
    res.status(200).json(rows);
});

export default router;