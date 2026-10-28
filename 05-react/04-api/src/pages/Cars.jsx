import "../styles/vehicle-management.css";
import styles from "./Cars.module.css";
import { useState, useEffect } from "react"; // 리액트 도구 훅 (Hook)
import CarsModal from "../components/CarsModal";
import CarsCard from "../components/CarsCard";
import { getCars, deleteCar } from "../api/cars.js"; // 함수 자체를 가져올때 {} 중괄호 사용
import { toast } from "@/components/ui/toast";

const Cars = () => {
  // 수정 중인 차의 정보 -> 객체인 경우는 보통 기본값을 null로 지정
  const [editingCar, setEditingCar] = useState(null);

  // 날짜 변환을 위한 함수 'YYYY-MM-DD'
  const toDate = (value) => {
    if (!value) return ""; // 날짜가 null인 경우

    const day = new Date(value);
    const month = String(day.getMonth() + 1).padStart(2, "0");
    const date = String(day.getDate()).padStart(2, "0");
    return `${day.getFullYear()}-${month}-${date}`;
  };

  // 모달 오픈
  const [open, setOpen] = useState(false);

  // 서버에서 차 목록을 받아올 예정 -> 처음에 가져와야 하니까 빈 배열
  const [cars, setCars] = useState([]);

  // useEffect 뿐만 아니라 CarsModal에서도 사용하기위해 밖으로 뺌
  const fetchCars = async () => {
    const result = await getCars();
    setCars(result);
  };

  // 삭제할 때 id가 필요
  const handleDelete = async (id) => {
    // try ~ catch : try에서 시도한 코드에서 에러가 나면 catch 구문으로 넘어감
    try {
      await deleteCar(id);
      fetchCars(); // 목록 다시 불러오기
    } catch (error) {
      toast.add({
        type: "error",
        title: "차량 정보 삭제 실패",
        description:
          "해당 차량 정보는 정비기록이 있기 때문에 삭제할 수 없습니다.",
      });
    }
  };

  // useEffect는 async await을 바로 못 붙임 -> 함수를 만들고 호출
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <main>
        <section className="title-section">
          <div>
            <h1>차량 관리</h1>
            <p>등록된 고객 차량 9대</p>
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

            {/* 모달에 필요한 것들 props로 전달한다 */}
            {/* key : 값이 바뀌면 모달을 새로 만든다 -> defaulValue가 새 차 값으로 채워진다 */}
            <CarsModal
              key={editingCar ? editingCar.id : "new"}
              open={open}
              setOpen={setOpen}
              getCars={fetchCars}
              car={editingCar}
            />
          </div>
        </section>

        <section className="vehicle-search">
          <input
            id="carSearch"
            type="text"
            placeholder="차량명 / 번호로 검색"
          />
        </section>

        <section className={styles["card-section"]}>
          {/* map : 배열의 값 하나마다 카드 하나로 바꾼다 */}
          {/* key : 목록에서 각 카드를 구분하는 이름표 (id -> PK) */}
          {/* 서버는 production_year, 카드는 year 인 것 처럼 이름이 다르면 여기서 맞추면 됌 */}
          {cars.map((car) => (
            <CarsCard
              key={car.id}
              plate={car.plate}
              fuel={car.fuel}
              name={car.name}
              year={car.production_year}
              serviceCount={car.service_count}
              lastDate={toDate(car.latest_service_date)}
              lastItem={car.latest_service_item}
              onDelete={() => handleDelete(car.id)} // 삭제
              onEdit={() => {
                setOpen(true); // 모달오픈
                setEditingCar(car); // 어느 차를 수정할지 담기
              }} // 수정
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Cars;
