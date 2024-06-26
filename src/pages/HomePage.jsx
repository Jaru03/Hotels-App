import { useSelector } from "react-redux";
import HotelCard from "../components/HotelsPage/HotelCard";
import "./style/HomePage.css";
import { useRef, useState } from "react";
import CategoryFilters from "../components/HotelsPage/CategoryFilters";
import PriceFilter from "../components/HotelsPage/PriceFilter";

const HomePage = () => {
  const [inputName, setInputName] = useState("");
  const [asidePosition, setAsidePosition] = useState(false)
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const inputValue = useRef();

  const hotels = useSelector((store) => store.hotels);

  const handleChange = () => {
    setInputName(inputValue.current.value);
  };

  const handleShowFilter = () => {
    setAsidePosition(true)
  }
  const handleHiddenFilter = () => {
    setAsidePosition(false)
  }
  
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
      <aside className={`aside`}>
        <div onClick={handleShowFilter} className="aside__openTag"><i className=' aside__icon bx bx-menu'></i></div>
        <div className={`aside__container aside-${asidePosition}`}>
        <div onClick={handleHiddenFilter} className="aside__closeTag">X</div>
          <section className="aside__section">
            <input
              className="aside__input"
              onChange={handleChange}
              placeholder="look for a hotel"
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
