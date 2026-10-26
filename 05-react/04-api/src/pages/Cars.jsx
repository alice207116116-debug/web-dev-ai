import "../styles/vehicle-management.css";
import styles from "./Cars.module.css";
import { useState, useEffect } from "react";
import CarsModal from "../components/CarsModal.jsx";
import CarsCard from "../components/CarsCard.jsx";
import { getCars } from "../api/cars.js";

const Cars = () => {
  // 날짜 변환을 위한 함수 'YYYY-MM-DD'
  const toDate = () => {
    const day = new Date(value);
    const month = String(day.getMonth() + 1).padStart(2, "0");
    const date = String(day.getDate).padStart(2, "0");
    return `${day.getFullYear()}-${month}-${date}`;
  };
  const [open, setOpen] = useState(false);
  // 서버에서 차 목록 받아올 예정 --> 처음에 가져와야 하니까 빈 배열
  const [cars, setCars] = useState([]);

  // useEffect는 async를 바로 못 붙임 -> 함수를 만들고 호출
  useEffect(() => {
    const fetchCars = async () => {
      const result = await getCars();
      setCars(result);
    };
    fetchCars();
  }, []);
  return (
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
          onClick={() => setOpen(true)}
          >
            차량 등록
          </button>
          {/* 모달에서 open 값이 필요하기 때문에 props로 넘김 */}
          <CarsModal open={open} setOpen={setOpen} />
          <div onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
          className={`vehicle-modal-overlay ${open ? "open" : ""}`}> 
            <form className="vehicle-modal">
              <div className="vehicle-modal-header">
                <h2>차량 등록</h2>
                <button type="button" onClick={() => setOpen(false)}>
                  <X size={16} strokeWidth={1.25} />
                </button>
              </div>
              <div className="vehicle-modal-body">
                  <label htmlFor="carNumber">
                    차량번호<span>*</span>
                  </label>
                  <input
                    id="carNumber"
                    name="carNumber"
                    type="text"
                    placeholder="예: 12가 3456"
                  />
                </div>
                <div>
                  <label htmlFor="carName">
                    차량명<span>*</span>
                  </label>
                  <input
                    id="carName"
                    name="carName"
                    type="text"
                    placeholder="예: 그랜저IG"
                  />
                </div>
                <div>
                  <label htmlFor="carType">차종</label>
                  <select name="carType" id="carType">
                    <option value="승용">승용</option>
                    <option value="SUV">SUV</option>
                    <option value="승합">승합</option>
                    <option value="화물">화물</option>
                  </select>
              </div>
              <div className="vehicle-modal-footer">
                <button type="reset" onClick={() => setOpen(false)}>
                  취소
                </button>
                <button type="submit">저장</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="vehicle-search">
        <input id="carSearch" type="text" placeholder="차량명 / 번호로 검색" />
      </section>
      <section className={styles["card-section"]}>
        {/* map : 배열의 값 하나마다 카드 하나로 바꾼다 */}
        {cars.map((car) => {})};
          <div className="card-header">
            <span className="plate">29나 6103</span>
            <span className="fuel-type">디젤</span>
            <span className="plate">88자 1204</span>
            <span className="fuel-type">전기</span>
          </div>
          <div className="card-body">
            <p className="car-name">EV6</p>
            <p>
              <span className="car-year">2024년식</span>
              <span className="service-count">정비 1건</span>
            </p>
          </div>
          <div className="card-footer">
            마지막 정비 <span className="last-service-date">2026-09-10</span>
            <span className="last-service-item">타이어 공기압 점검</span>
          </div>
        <div className="card vehicle-card">
          <div className="card-header">
            <span className="plate">05차 7731</span>
            <span className="fuel-type">가솔린</span>
          </div>
          <div className="card-body">
            <p className="car-name">K5</p>
            <p>
              <span className="car-year">2018년식</span>
              <span className="service-count">정비 9건</span>
            </p>
          </div>
          <div className="card-footer">
            마지막 정비 <span className="last-service-date">2026-08-20</span>
            <span className="last-service-item">브레이크 오일 교환</span>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Cars;
