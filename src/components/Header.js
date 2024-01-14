import { LOGO_URL } from "../utils/constants";
import userContext from "../utils/userContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import offlineStatus from "../assets/no-connection.png";
import online from "../assets/yes.png"
const Header = () => {
  const [btnVariable,setBtnVariable] = useState("Login")
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(userContext);
  console.log(loggedInUser);
  return(
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-6">
          <p className="px-4">Online Status:{<img className="w-5 inline-block" src={onlineStatus?online:"offline"}/>}</p>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to='/about'>About Us</Link></li>
          <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
          <li className="px-4">Cart</li>
          {/* <button className="btn" onClick={() => {
            btnVariable === "Login" ? setBtnVariable("Logout") : setBtnVariable("Login")
          }}>{btnVariable}</button> */}
          <li className="px-4"><Link to='/login'>Login</Link></li>
          <li className="px-4 font-bold ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

  export default Header;