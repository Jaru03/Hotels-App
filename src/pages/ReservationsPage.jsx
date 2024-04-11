import React, { useEffect, useState } from "react";
import useCrud from "../hooks/useCrud";
import Reservation from "../components/ReservationsPage/Reservation";
import "./style/ReservationsPage.css";
import FormReviews from "../components/ReservationsPage/FormReviews";

const ReservationsPage = () => {
  const [reserSelect, setReserSelect] = useState();
  const [reserve, getReserve, , deleteReserve] = useCrud();
  const [showFormReview, setShowFormReview] = useState(false)

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/bookings`;
    getReserve(url);
  }, []);

  return (
    <section className="reservationPage">
      {
        showFormReview ? <FormReviews reserSelect={reserSelect} setReserSelect={setReserSelect} setShowFormReview={setShowFormReview} /> : null
      }
      
      <h2 className="reservationPage__tittle">Reservations</h2>
      <div className="reservationPage__container">
        {reserve?.map((reserveInfo) => (
          <Reservation
            key={reserveInfo?.id}
            setReserSelect={setReserSelect}
            reserve={reserveInfo}
            deleteReserve={deleteReserve}
            setShowFormReview={setShowFormReview}
          />
        ))}
      </div>
    </section>
  );
};

export default ReservationsPage;
