import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props
    console.log(resData)
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
  
        <h3>{resData.info.name}</h3>
        <h4>Cuisines: {resData.info.cuisines.join(" , ")}</h4>
        <h4>Rating: {resData.info.avgRating}</h4>
      </div>
    );
  };

  export default RestaurantCard;