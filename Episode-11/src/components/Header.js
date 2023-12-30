import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatusPage from "../utils/useOnlineStatusPage";
const Header = () => {
  const [logInLogOutVariable, setLogInLogOutVariable] = useState("Login");
  const onlineStatus = useOnlineStatusPage();
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={APP_LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status:
            {onlineStatus ? (
              <span style={{ color: "green" }}>●</span>
            ) : (
              <span style={{ color: "red" }}>●</span>
            )}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
