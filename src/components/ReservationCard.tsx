import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div
      className="reservation-card-container"
      onClick={() => dispatch(removeReservation(index))}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
