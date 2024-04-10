import React, { useEffect } from 'react'
import useCrud from '../hooks/useCrud'
import Reservation from '../components/ReservationsPage/Reservation'

const ReservationsPage = () => {

  const url = `https://hotels-api.academlo.tech/bookings?hotelId=1`
  const [bookings, getBookings] = useCrud(url)

  useEffect(() => {
    getBookings()
  }, [])
  
  console.log(bookings)

  return (
    <section>
      <h2>Reservations</h2>
      <div>
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