import React from "react";

interface ReservationCardTypes {
  name: string;
}

const ReservationCard = ({ name }: ReservationCardTypes) => (
  <div className="reservation-card-container">{name}</div>
);

export default ReservationCard;
