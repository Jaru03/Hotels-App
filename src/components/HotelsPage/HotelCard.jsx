import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/HotelCard.css'

const HotelCard = ({hotel}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }

  return (
    <article className='hotelCard'>
        

        <header className='hotelCard__header'>
            <img className='hotelCard__img' src={hotel.images[0].url} alt="" />
        </header>
        <section className='hotelCard__main'>
            <h3 className='hotelCard__tittle'>{hotel.name}</h3>
            <div className="hotelCard__information">
                <p className='hotelCard__rating'>{hotel.rating}</p>
                <span className='hotelCard__city'>{hotel.city.name}, {hotel.city.country}</span>
                <div className='hotelCard__price'>{hotel.price}</div>
            </div>
        </section>
        <footer className='hotelCard__footer'>
            <button className='hotelCard__button' onClick={handleClick}>See more...</button>
        </footer>
        
    </article>
  )
}

export default HotelCard