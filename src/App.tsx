import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCardTypes from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value)

  const dispatch = useDispatch();
  const [reservationNameInput, setReservationNameInput] = useState("")

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCardTypes name={name} key={index} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              placeholder="Client name"
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => (
            <CustomerCard
              key={index}
              id={customer.id}
              food={customer.food}
              name={customer.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
