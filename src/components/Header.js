import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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