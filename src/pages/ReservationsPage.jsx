import React, { useEffect } from 'react'
import useCrud from '../hooks/useCrud'
import Reservation from '../components/ReservationsPage/Reservation'
import './style/ReservationsPage.css'

const ReservationsPage = () => {

  const url = `https://hotels-api.academlo.tech/bookings?hotelId=1`
  const [bookings, getBookings] = useCrud(url)

  useEffect(() => {
    getBookings()
  }, [])
  
  console.log(bookings)

  return (
    <section className='reservationPage'>
      <h2 className='reservationPage__tittle'>Reservations</h2>
      <div className='reservationPage__container'>
        {
          bookings?.map(booking => (
            <Reservation key={booking?.id} reserve={booking}/>
          ))
        }
      </div>
    </section>
  )
}

export default ReservationsPage