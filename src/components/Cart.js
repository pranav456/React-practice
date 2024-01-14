import { UseSelector, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { CDN_URL } from "../utils/constants"


const Cart = () => {
const cartItems = useSelector((store) => store.cart.items)

    return(
        <div className="text-center p-4 m-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                {
                    cartItems.map((item)=>{
                        return(
                        <div>
                            <ul>
                                <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                            <div className="w-9/12">
                                            <div className="py-2">
                                                <span>{item.card.info.name}</span>
                                                <span> - ₹{item.card.info.price / 100}</span>
                                            </div>
                                            <p className="text-xs">{item.card.info.description}</p>
                                        </div>
                                        <div className="w-3/12 p-4">
                                            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                                        </div>
                                        </div>
                            </ul>
                        </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart

