import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
    // console.log(items[0].itemCards[0])
    const dispatch = useDispatch();

    const handleAddItem = (data) => {
        //Dispatch an action
        dispatch(addItem(data))

    }
    return (
        <div>
            {
                items.map((item,index) => (
                    <div key={index}>
                        <ul>
                            {
                                item.itemCards.map((data) => (
                                    <div key={data.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                                        <div className="w-9/12">
                                            <div className="py-2">
                                                <span>{data.card.info.name}</span>
                                                <span> - ₹{data.card.info.price / 100}</span>
                                            </div>
                                            <p className="text-xs">{data.card.info.description}</p>
                                        </div>
                                        <div className="w-3/12 p-4">
                                            <div className="absolute">
                                                <button className="p-2 mx-[59px] bg-black text-white shadow-lg rounded" onClick={() => handleAddItem(data)}>
                                                    Add +
                                                </button>
                                            </div>
                                            <img src={CDN_URL + data.card.info.imageId} className="w-full"/>
                                        </div>

                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;