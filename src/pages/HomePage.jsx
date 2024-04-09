import { useSelector } from "react-redux";
import HotelCard from "../components/HotelsPage/HotelCard";
import "./style/HomePage.css";
import { useRef, useState } from "react";
import CategoryFilters from "../components/HotelsPage/CategoryFilters";
import PriceFilter from "../components/HotelsPage/PriceFilter";

const HomePage = () => {
  const [inputName, setInputName] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const inputValue = useRef();

  const hotels = useSelector((store) => store.hotels);

  const handleChange = () => {
    setInputName(inputValue.current.value);
  };

  const cbfilter = (hotelInfo) => {
    // FilterByName
    const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim());
    // FilterByPrice
    const price = +hotelInfo.price
    const filterPrice = price >= fromTo.from && price <= fromTo.to;
    return filterName && filterPrice;
  };

  return (
    <div className="homePage">
      <aside className="aside">
        <div className="aside__container">
          <section className="aside__section">
            <input
              className="aside__input"
              onChange={handleChange}
              placeholder="que buscas?"
              value={inputName}
              ref={inputValue}
              type="text"
            />
            <button className="aside__button">Search</button>
          </section>
          <h3 className="aside__title">Filters</h3>
          <PriceFilter setFromTo={setFromTo}/>
          <CategoryFilters/>
        </div>
      </aside>

      <div className="homePage__containerCards">
        {hotels?.filter(cbfilter).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
