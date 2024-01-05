import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9112695&lng=77.5427926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

      // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    } catch (error) {
      console.log(error);
    }
  };

  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <ShimmerUI/>
  // }

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus)
  const RestaurantWithPromotedTag = withPromotedLabel(RestaurantCard)

  if (onlineStatus === false) {
    return (

      <h1>Look like you're offline. Please check your internet connection</h1>

    )
  }

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) :
    (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchInputValue}
              onChange={(e) => {
                setSearchInputValue(e.target.value);
              }}
            />
            <button className="px-4 py-1 bg-pink-300 m-4 rounded-lg"
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
          <div className="search m-4 p-4 items-center">
            <button
              className="px-4 py-1 bg-pink-300 m-4 rounded-lg"
              onClick={() => {
                const topRatedRestaurants = filteredRestaurant.filter(
                  (item) => item.info.avgRating > 4
                );
                setFilteredRestaurant(topRatedRestaurants);
              }}
            >
              Filter Restaurant By rating
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {filteredRestaurant.map((item) => (
            <Link key={item.info.id} to={'/restaurants/' + item.info.id} >{item.info.avgRating > 4.3 ? <RestaurantWithPromotedTag resData={item} /> : <RestaurantCard resData={item} />}</Link>
          ))}
        </div>
      </div>
    );
};

export default Body; 