import React from 'react'
import './style/Reservation.css'

const Reservation = ({reserve, setReserSelect, deleteReserve, setShowFormReview}) => {

  const checkIn = new Date(reserve.checkIn)
  const checkOut = new Date(reserve.checkOut)
  const reservationDays = (checkOut - checkIn)/(1000 * 60 * 60 * 24)

  
  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationDays,
      subtotal: reserve.hotel.price * reservationDays
    }
    
    setReserSelect(obj)
    setShowFormReview(true)
  }
  
  const handleDelete = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`
    deleteReserve(url, reserve.id)
  }
  return (
    <article className='reservationCard'>
      <header className='reservationCard__header'>
        <img className='reservationCard__img' src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className='reservationCard__hotelInfo'>
        <h3 className='reservationCard__tittle'>{reserve.hotel.name}</h3>
        <div className='reservationCard__name'>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div onClick={handleReview} className='reservationCard__link'>Rate and comment this visit...</div>
      </section>
      <section className='reservationCard__about'>
        <ul className='reservationCard__list'>
          <li className='reservationCard__item'><span className='reservationCard__span'>Reservation Days</span><span className='reservationCard__value'>{reservationDays}</span></li>
          <li className='reservationCard__item'><span className='reservationCard__span'>subtotal Price</span><span className='reservationCard__value'>{reservationDays * reserve.hotel.price} USD</span></li>
        </ul>
      </section>
      <footer className='reservationCard__footer'>
        <button onClick={handleDelete} className='reservationCard__button'>
          <i className='reservationCard__icon bx bx-trash'></i>
        </button>
      </footer>
    </article>
  )
}

export default Reservation