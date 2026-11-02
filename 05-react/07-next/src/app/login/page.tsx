"use client";
import "@/styles/vehicle-management.css";
import styles from "@/components/Cars.module.css";
import { useState } from "react"; 
import CarsModal from "@/components/CarsModal";
import CarsCard from "@/components/CarsCard";
import { toast } from "@/components/ui/toast";
import type { Car } from "@/types";

const Cars = () => {
  // useState(null)만 쓰면 TS는 "항상 null"로 안다 -> 제네릭 표시!
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const toDate = (value:string) => {
    if (!value) return "";
    const day = new Date(value);
    const month = String(day.getMonth() + 1).padStart(2, "0");
    const date = String(day.getDate()).padStart(2, "0");
    return `${day.getFullYear()}-${month}-${date}`;
  };
  const [open, setOpen] = useState(false);
  const handleDelete = async (id: number) => {
    try {
      await deleteCar(id);
      fetchCars();
    } catch (error) {
      toast.add({
        type: "error",
        title: "차량 정보 삭제 실패",
        description:
          "해당 차량 정보는 정비기록이 있기 때문에 삭제할 수 없습니다.",
      });
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <main>
        <section className="title-section">
          <div>
            <h1>차량 관리</h1>
            <p>등록된 고객 차량 0대</p>
          </div>
          <div>
            <button
              type="button"
              className="btn-vehicle-add"
              onClick={() => {
                setOpen(true);
                setEditingCar(null); // 등록일 때는 수정 정보 null
              }}
            >
              차량 등록
            </button>

            <CarsModal
              key={editingCar ? editingCar.id : "new"}
              open={open}
              setOpen={setOpen}
              getCars={fetchCars}
              car={editingCar}
          />
          </div>
        </section>
        <section className={styles["card-section"]}>
      </main>
    </>
  );
};


export default Cars;