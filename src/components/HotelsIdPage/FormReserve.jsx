import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './style/FormReserve.css'

const FormReserve = ({hotelId}) => {

  const {handleSubmit, reset, register} = useForm()
  const url = `https://hotels-api.academlo.tech/bookings`
  const [,,createBooking] = useCrud(url)

  const submit = data => {
    data.hotelId = +hotelId
    createBooking(data)
  }

  return (
    <section className="reserve">
      <h3 className="reserve__tittle">Do yo want to reserve this hotel?</h3>
      <form className="reserve__form" onSubmit={handleSubmit(submit)}>
        <label className="reserve__label">
          <span className="reserve__span">Check-in</span>
          <input className="reserve__input" {...register('checkIn')} type="date"/>
        </label>
        <label className="reserve__label">
          <span className="reserve__span">Check-out</span>
          <input className="reserve__input" {...register('checkOut')} type="date"/>
        </label>
        <button className="reserve__button">Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
