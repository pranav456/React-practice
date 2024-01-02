import { useState } from "react";
import downArrow from "../assets/down-arrow.png"
import ItemList from "./ItemList";
const RestaurantCategory = (data) => {
    console.log(data)
    const [showItems,setShowItems] = useState(false)
    const handleClick = () => {
        setShowItems(!showItems)

    }
    return (
        <div className="bg-pink-100 shadow-lg p-4 w-6/12 mx-auto my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.data.title} ({data.data.categories.length})</span>
                <span><img className="w-5 h-5" src={downArrow} alt="" /></span>
                
            </div>
           {showItems && <ItemList items={data.data.categories} />} 
        </div>
    )
}
export default RestaurantCategory;