import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/slices/hotels.slices'
import { useDispatch } from 'react-redux'
import './style/CategoryFilters.css'



const CategoryFilters = () => {

    const url = `https://hotels-api.academlo.tech/cities`
    const [cities, getCities] = useFetch(url)
    
    const dispatch = useDispatch()

    useEffect(() => {
      getCities()
    }, [])
    
    console.log(cities)

    const handleFilterCity = (id) => {
        let url

        if(id){
            url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`
        }else {
            url = `https://hotels-api.academlo.tech/hotels`
        }

        dispatch(getHotelsThunk(url))
    }
  return (
    <section className='filter'>
        <h3 className='filter__tittle'>City</h3>
        <ul className='filter__list'>
            <li className='filter__item' onClick={() => handleFilterCity()}>All cities</li>
            {
                cities?.map(city => (
                    <li className='filter__item' onClick={() => handleFilterCity(city.id)} key={city.id}>{city.name}</li>
                ))
            }
        </ul>
    </section>
  )
}

export default CategoryFilters