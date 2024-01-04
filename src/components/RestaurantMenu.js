import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {


    const [showIndex,setShowIndex] = useState(null)
    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)



    if (resInfo === null) return <ShimmerUI />


    const { name, cuisines, cloudinaryImageId, costForTwo, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    console.log(categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>

            <h2 className="font-bold text-lg">{cuisines.join(',')} - {costForTwoMessage}</h2>
            {categories.map((category,index)=>(<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
            showItems={index === showIndex?true:false}
            setShowIndex = {() => setShowIndex(index)}
            />))}


            {/* <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>))
                }
            </ul> */}
            {/* <h3>{itemCards[0].card.info.name}</h3>
            <h3>{itemCards[1].card.info.name}</h3>

            <h3>{itemCards[2].card.info.name}</h3>

            <h3>{itemCards[3].card.info.name}</h3>

            <h3>{itemCards[4].card.info.name}</h3> */}

        </div>
    )
}
export default RestaurantMenu;