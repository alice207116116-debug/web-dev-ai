import { X } from "lucide-react";
import { addCar } from "../api/cars";

// props로 전달한 값이나 함수 등을 받을 수 있다
const CarsModal = ({ open, setOpen, getCars }) => {
  const handleSubmit = async(e) => {
    e.preventDefault(); // 기존 바로 폼 제출하는 이벤트 막기
    // 추가시 받는 body
    const newCar = {
      plate: e.target.carNumber.value,
      name: e.target.carName.value,
      car_type: e.target.carType.value, 
      production_year: Number(e.target.carYear.value),
      fuel: e.target.fuelType.value,
      mileage: Number(e.target.mileage.value),
    };
    await addCar(newCar); // 서버 갔다가 올테고
    // 모달 안의 입력한 데이터 그대로, 모달이 켜져 있고, 추가된 데이터가 목록에 추가 x
    e.target.reset(); // 입력 칸 비우기
    setOpen(false); // 모달 달기
    getCars(); // 목록 다시 불러오기
  };
    return (
      <div
        onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false)
            }
        }}
        >
        </div>
    )
};
export default CarsModal;