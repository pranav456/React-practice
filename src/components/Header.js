import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import offlineStatus from "../assets/no-connection.png";
import online from "../assets/yes.png"
const Header = () => {
  const [btnVariable,setBtnVariable] = useState("Login")
  const onlineStatus = useOnlineStatus()
  return(
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{<img className="status-image" src={onlineStatus?online:"offline"}/>}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          {/* <button className="btn" onClick={() => {
            btnVariable === "Login" ? setBtnVariable("Logout") : setBtnVariable("Login")
          }}>{btnVariable}</button> */}
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </div>
    </div>
  )
}

  export default Header;