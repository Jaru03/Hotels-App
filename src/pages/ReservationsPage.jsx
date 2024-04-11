import React, { useEffect } from 'react'
import useCrud from '../hooks/useCrud'
import Reservation from '../components/ReservationsPage/Reservation'
import './style/ReservationsPage.css'

const ReservationsPage = () => {

  const url = `https://hotels-api.academlo.tech/bookings?hotelId=1`
  const [reserve, getReserve] = useCrud(url)

  useEffect(() => {
    getReserve()
  }, [])

  return (
    <section className='reservationPage'>
      <h2 className='reservationPage__tittle'>Reservations</h2>
      <div className='reservationPage__container'>
        {
          reserve?.map(reserveInfo => (
            <Reservation key={reserveInfo?.id} reserve={reserveInfo}/>
          ))
        }
      </div>
    </section>
  )
}

export default ReservationsPage