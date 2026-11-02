import axios from "axios";
// Express 서버 없이 React에서 Supabase DB에 바로 요청
import { supabase } from "../utils/supabase.js";

// 차량 목록 조회
export const getCars = async () => {
  const { data } = await supabase
    .from("cars")
    .select("*, maintenance_records(count), latest:maintenance_records(item)")
    .order("id")
    .order("service_date", { referencedTable: "latest", ascending: false })
    .limit(1, { referencedTable: "latest" });
  return data.map(({ maintenance_records, latest, ...car }) => ({
    ...car,
    service_count: maintenance_records[0]?.count ?? 0,
    latest_service_item: latest[0]?.item ?? null,
  }));
};

// 차량 추가 POST http://localhost:4000/api/cars
// 객체를 그대로 넘기면 axios가 JSON으로 바꿔 보냄
export const addCar = async (data) => {
  await axios.post("http://localhost:4000/api/cars", data);
};

// 차량 삭제 DELETE http://localhost:4000/api/cars/:id
// 어느 차인지(id)는 주소에
export const deleteCar = async (id) => {
  await axios.delete(`http://localhost:4000/api/cars/${id}`);
};

// 차량 수정 PUT http://localhost:4000/api/cars/:id
// 어느 차인지(id)는 주소에, 바꿀 내용(data)은 본문에
export const updateCar = async (id, data) => {
  await axios.put(`http://localhost:4000/api/cars/${id}`, data);
};
