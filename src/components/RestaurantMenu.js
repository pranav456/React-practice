import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

   

    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams()

    useEffect(() => {
        fetchMenu()

    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)

    }

    if (resInfo === null) return <ShimmerUI />


    const { name, cuisines, cloudinaryImageId, costForTwo, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div>
            <h1>{name}</h1>
            
                <h2>{cuisines.join(',')} - {costForTwoMessage}</h2>
            

            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))
                }
            </ul>
            {/* <h3>{itemCards[0].card.info.name}</h3>
            <h3>{itemCards[1].card.info.name}</h3>

            <h3>{itemCards[2].card.info.name}</h3>

            <h3>{itemCards[3].card.info.name}</h3>

            <h3>{itemCards[4].card.info.name}</h3> */}

        </div>
    )
}
export default RestaurantMenu;