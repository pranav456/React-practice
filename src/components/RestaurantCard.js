import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  console.log(props)
    const {resData} = props
    console.log(resData)
    return (
      <div className="p-4 m-4 w-[300px] h-[500px] rounded-lg bg-gray-200 hover:bg-gray-500">
        <img
          className="rounded-lg w-[300px]"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
  
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>Cuisines: {resData.info.cuisines.join(" , ")}</h4>
        <h4>Rating: {resData.info.avgRating}</h4>
      </div>
    );
  };


  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return(
        <div>
          <label className="absolute bg-black text-white p-1.5 mx-8 my-4 rounded-lg font-extralight">Highly Rated</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;