import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './style/FormReviews.css'

const FormReviews = ({ reserSelect, setReserSelect, setShowFormReview }) => {

  const {register, handleSubmit, reset} = useForm()
  const [,,createReview] = useCrud()
  
  const submit = data => {
    const url = `https://hotels-api.academlo.tech/reviews`
    data.hotelId = reserSelect?.hotel.id
    data.rating = +data.rating
    createReview(url, data)
    setReserSelect()
    reset({
      rating: '',
      comment: ''
    })
  }

  const closeForm = () => {
    setShowFormReview(false)
  }
 
   return (
    <article className="formReview" >
      <div className="formReview__container">

      <h3 className="formReview__tittle">Reserve</h3>
      <section className="formReview__header">
      <div className="formReview__close" onClick={closeForm}>x</div>
        <header className="formReview__header--container">
          <img className="formReview__img" src={reserSelect?.hotel.images[0].url} alt="" />
        </header>
        <h4 className="formReview__name">{reserSelect?.hotel.name}</h4>
        <p className="formReview__country">
          {reserSelect?.hotel.city.name}, {reserSelect?.hotel.city.country}
        </p>
        <ul className="formReview__list">
          <li className="formReview__li">
            <span className="formReview__span">Reservation Days</span>
            <span className="formReview__span">{reserSelect?.reservationDays}</span>
          </li>
          <li className="formReview__li">
            <span className="formReview__span">subtotal Price</span>
            <span className="formReview__span">$ {reserSelect?.subtotal}</span>
          </li>
        </ul>
      </section>
      <form className="formReview__form" onSubmit={handleSubmit(submit)}>
        <label className="formReview__label">
          <span className="formReview__span">Rating</span>
          <select className="formReview__select" {...register('rating')}>
            <option className="formReview__option" value="5">⭐⭐⭐⭐⭐</option>
            <option className="formReview__option" value="4">⭐⭐⭐⭐</option>
            <option className="formReview__option" value="3">⭐⭐⭐</option>
            <option className="formReview__option" value="2">⭐⭐</option>
            <option className="formReview__option" value="1">⭐</option>
          </select>
        </label>
        <label className="formReview__label">
          <span className="formReview__span">Coments</span>
          <textarea className="formReview__textarea" {...register('comment')} />
        </label>
        <button className="formReview__button">Submit</button>
      </form>
      </div>
    </article>
  );
};

export default FormReviews;
