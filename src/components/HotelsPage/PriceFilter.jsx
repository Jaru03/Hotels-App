import { useForm } from "react-hook-form";
import './style/PriceFilter.css'

const PriceFilter = ({setFromTo}) => {
  
    const {reset, handleSubmit, register} = useForm()

    const submit = data => {
        const from = data.from
        const to = data.to
        setFromTo({
            from: from === '' ? 0 : +from,
            to: to === '' ? Infinity : +to
        })
    }

  return (
    <section className="filter" onSubmit={handleSubmit(submit)}>
      <h3 className="filter__tittle">Price</h3>
      <form className="filter__form">
        <label className="filter__label">
          <span className="filter__span">From</span>
          <input className="filter__input" {...register('from')}  type="number" />
        </label>
        <label className="filter__label">
          <span className="filter__span">To</span>
          <input className="filter__input" {...register('to')} type="number" />
        </label>
        <button className="filter__button">Apply</button>
      </form>
    </section>
  );
};

export default PriceFilter;
