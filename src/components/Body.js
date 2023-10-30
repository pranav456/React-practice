import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  console.log(listOfRestaurants);

  useEffect(() => {
    console.log("Pranav");
    fetchData();
  }, []);

  //Whenever a state variable changes, react triggers a reconciliation cycle(re-renders the component)

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9162349&lng=77.5408042&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      //Optional Chaining
      setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <ShimmerUI/>
  // }

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchInputValue}
            onChange={(e) => {
              setSearchInputValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterBySearch = listOfRestaurants.filter((item) =>
                item.info.name
                  .toLowerCase()
                  .includes(searchInputValue.toLowerCase())
              );
              setFilteredRestaurant(filterBySearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn">
          <button
            onClick={() => {
              const topRatedRestaurants = listOfRestaurants.filter(
                (item) => item.info.avgRating > 4
              );
              setListOfRestaurants(topRatedRestaurants);
            }}
          >
            Filter Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
