import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeReservation(index))
    dispatch(addCustomer({ id: uuid(), name, food: [] }))
  };

  return (
    <div className="reservation-card-container" onClick={handleClick}>
      {name}
    </div>
  );
};

export default ReservationCard;
