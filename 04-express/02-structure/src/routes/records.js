import { Router } from "express";
import * as record from "../controllers/records.js";

const router = Router();

router.get("/", async (req, res) => {
  const plate = req.query.plate; // undefied(null)이거나 아니거나 -> 조건문
  const { rows } = await pool.query(
    `select plate, name, service_date, item, memo, cost
     from maintenance_records m 
     join cars c on c.id = m.car_id
     where plate = coalesce($1, plate)`,
    [plate])
});

export default router;