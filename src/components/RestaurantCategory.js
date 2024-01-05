import { useState } from "react";
import downArrow from "../assets/down-arrow.png"
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
    const [toggle,setToggle] = useState(false)
    console.log(props.showItems)
    const handleClick = () => {
        props.setShowIndex()
        setToggle(!toggle)

    }
    return (
        <div className="bg-pink-100 shadow-lg p-4 w-6/12 mx-auto my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{props.data.title} ({props.data.categories.length})</span>
                <span><img className="w-5 h-5" src={downArrow} alt="" /></span>
                
            </div>
           {props.showItems && toggle && <ItemList items={props.data.categories} />} 
        </div>
    )
}
export default RestaurantCategory;