import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState<string>("");

  const handleAddClientFood = (): void => {
    if (!customerFoodInput) return;

    dispatch(addFoodToCustomer({ id, food: customerFoodInput }));

    setCustomerFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food, index) => (
            <p key={index}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            placeholder="Food"
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={handleAddClientFood}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;