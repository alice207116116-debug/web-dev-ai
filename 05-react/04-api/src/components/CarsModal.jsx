import { X } from "lucide-react";
import { addCar } from "../api/cars";

const CarsModal = ({ open, setOpen }) => {
  const handleSubmit = async(e) => {
    e.preventDefault(); // 기존 바로 폼 제출하는 이벤트 막기
    const newCar = {
      plate: e.target.carNumber.value,
      name: e.target.carName.value,
      car_type: e.target.carType.value, 
      production_year: Number(e.target.carYear.value),
      fuel: e.target.fuelType.value,
      mileage: Number(e.target.mileage.value),
    };
    await addCar(newCar);
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