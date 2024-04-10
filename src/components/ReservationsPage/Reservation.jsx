import React from 'react'

const Reservation = ({reserve}) => {
  return (
    <article>
      <header>
        <img src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div>Rate and comment this visit...</div>
      </section>
      <section>
        <ul>
          <li><span>Reservation Days</span><span>calcular dias de reservation</span></li>
          <li><span>subtotal Price</span><span>dias de reservation * precio</span></li>
        </ul>
      </section>
      <footer>
        <button>
          <i className='bx bx-trash'></i>
        </button>
      </footer>
    </article>
  )
}

export default Reservation