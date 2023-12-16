import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props
    console.log(resData)
    return (
      <div className="p-4 m-4 w-[200px] h-[400px] rounded-lg bg-gray-200 hover:bg-gray-500">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
  
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>Cuisines: {resData.info.cuisines.join(" , ")}</h4>
        <h4>Rating: {resData.info.avgRating}</h4>
      </div>
    );
  };

  export default RestaurantCard;