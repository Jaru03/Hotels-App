import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Marker, Overlay } from "pigeon-maps"
import OtherHotels from "../components/HotelsIdPage/OtherHotels"
import FormReserve from "../components/HotelsIdPage/FormReserve"
import './style/HotelsIdPage.css'

const HotelsIdPage = () => {

  const {id} = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])

  return (
    <div className="hotelsId">
      <h2 className="hotelsId__name">{hotel?.name}</h2>
      <h3 className="hotelsId__rating">RATING - {hotel?.rating}</h3>
      <div className="hotelsId__container--header">

        <div className="hotelsId__slider">
          <img className="hotelsId__img" src={hotel?.images[0].url} alt="" />
        </div>
        <div className="hotelsId__map">
        {
          hotel &&
          
          <Map className='map' metaWheelZoom={true} width={350} height={300} defaultCenter={[+hotel?.lat, +hotel?.lon]} zoom={10} maxZoom={13} twoFingerDrag={true} minZoom={10} >
          <Overlay anchor={[+hotel?.lat, +hotel?.lon]}>
            <img src='../hotelIcon.png'  width={50} height={50} alt="" />
          </Overlay>
        </Map>
        }
        </div>
      </div>
      <section className="hotelsId__info">
        <h3 className="hotelsId__tittle">{hotel?.city.name}, {hotel?.city.country}</h3>
        <p className="hotelsId__direcction">
          <i className='hotelsId__icon bx bx-map'></i>
          <span>{hotel?.address}</span>
        </p>
        <p className="hotelsId__description">{hotel?.description}</p>
      </section>

      {
        localStorage.getItem('token')
        ? <FormReserve hotelId={hotel?.id}/>
        : <h3 className="loginText">If you want to make a reservation, please <Link to='/login'>Login</Link> </h3>
      }
      <OtherHotels hotel={hotel}/>
    </div>
  )
}

export default HotelsIdPage