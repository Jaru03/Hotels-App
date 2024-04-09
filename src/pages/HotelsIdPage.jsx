import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker, Overlay } from "pigeon-maps"
import OtherHotels from "../components/HotelsIdPage/OtherHotels"
import FormReserve from "../components/HotelsIdPage/FormReserve"

const HotelsIdPage = () => {

  const {id} = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])

  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <div className="slider">
        <img src={hotel?.images[0].url} alt="" />
      </div>
      {
        hotel &&

        <Map height={300} defaultCenter={[+hotel?.lat, +hotel?.lon]} zoom={15} maxZoom={16} minZoom={10} >
        <Overlay anchor={[+hotel?.lat, +hotel?.lon]}>
          <img src='../hotelIcon.png'  width={50} height={50} alt="" />
        </Overlay>
      </Map>}
      <section>
        <h3>{hotel?.city.name}, {hotel?.city.country}</h3>
        <p>
          <i className='bx bx-map'></i>
          <span>{hotel?.address}</span>
        </p>
        <p>{hotel?.description}</p>
      </section>
      <FormReserve/>
      <OtherHotels hotel={hotel}/>
    </div>
  )
}

export default HotelsIdPage