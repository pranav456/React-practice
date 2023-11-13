import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnVariable,setBtnVariable] = useState("Login")
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
          <li><Link to="/">Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button className="btn" onClick={() => {
            btnVariable === "Login" ? setBtnVariable("Logout") : setBtnVariable("Login")
          }}>{btnVariable}</button>
        </ul>
      </div>
    </div>
  )
}

  export default Header;