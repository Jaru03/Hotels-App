import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HotelsPage/HotelCard"
import './style/OtherHotels.css'

const OtherHotels = ({hotel}) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
    const [hotelsInCity, getHotelsInCity] = useFetch(url)

    useEffect(() => {

        if (hotel) {
            getHotelsInCity()
        } else {
            
        }
    }, [hotel])

  return (
    <section className="otherHotels">
        <h3 className="otherHotels__tittle">Other hotels in <span>{hotel?.city.name}</span></h3>
        <div className="otherHotels__container">
            {
                hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo => (
                    <HotelCard
                        key={hotelInfo.id}
                        hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OtherHotels