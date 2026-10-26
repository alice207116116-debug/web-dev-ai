import { X } from "lucide-react";

const CarsModal = ({ open }) => {
    return (
      <div
        onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false)
            }
        }}>
        </div>
    )
};
export default CarsModal;