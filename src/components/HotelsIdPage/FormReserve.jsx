import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './style/FormReserve.css'
import { useState } from "react";

const FormReserve = ({hotelId}) => {

  const {handleSubmit, reset, register} = useForm()
  const [,,createBooking] = useCrud()
  const [modalStatus, setModalStatus] = useState(false)
  
  const submit = data => {
    const url = `https://hotels-api.academlo.tech/bookings`
    data.hotelId = +hotelId
    createBooking(url, data)
    setModalStatus(true)
    setTimeout(() => {setModalStatus(false)}, 3000)
  }

  return (
    <section className="reserve">

      <h3 className="reserve__tittle">Do yo want to reserve this hotel?</h3>
      <form className="reserve__form" onSubmit={handleSubmit(submit)}>
      {
        modalStatus ? <div className="reservation__modal">
                        <h3 className="reservation__modal--text">Your reservation has been made successfully</h3>
                      </div> : modalStatus
      }
        <label className="reserve__label">
          <span className="reserve__span">Check-in</span>
          <input className="reserve__input" required {...register('checkIn')}  type="date"/>
        </label>
        <label className="reserve__label">
          <span className="reserve__span">Check-out</span>
          <input className="reserve__input" required {...register('checkOut')} type="date"/>
        </label>

        <button className="reserve__button">Submit</button>
      </form> 
    </section>
  );
};

export default FormReserve;
