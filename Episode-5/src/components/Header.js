import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";
const Header = () => {
  const [logInLogOutVariable, setLogInLogOutVariable] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="log-in-button"
              onClick={() => {
                logInLogOutVariable == "login"
                  ? setLogInLogOutVariable("logout")
                  : setLogInLogOutVariable("login");
              }}
            >
              {logInLogOutVariable}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
