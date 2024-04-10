import React from 'react'
import './style/Reservation.css'

const Reservation = ({reserve}) => {
  return (
    <article className='reservationCard'>
      <header className='reservationCard__header'>
        <img className='reservationCard__img' src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className='reservationCard__hotelInfo'>
        <h3 className='reservationCard__tittle'>{reserve.hotel.name}</h3>
        <div className='reservationCard__name'>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div className='reservationCard__link'>Rate and comment this visit...</div>
      </section>
      <section className='reservationCard__about'>
        <ul className='reservationCard__list'>
          <li className='reservationCard__item'><span>Reservation Days</span><span>calcular dias de reservation</span></li>
          <li className='reservationCard__item'><span>subtotal Price</span><span>dias de reservation * precio</span></li>
        </ul>
      </section>
      <footer className='reservationCard__footer'>
        <button className='reservationCard__button'>
          <i className='reservationCard__icon bx bx-trash'></i>
        </button>
      </footer>
    </article>
  )
}

export default Reservation