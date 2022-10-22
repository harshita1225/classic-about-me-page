import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="w3-top w3-hide-small">
        <div
          class="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off"
          id="myNavbar"
        >
          <Link to="/about" className="w3-bar-item w3-button">
            ABOUT ME
          </Link>

          <Link to="/hobbies" className="w3-bar-item w3-button">
            HOBBIES
          </Link>
          <Link to="/contact" className="w3-bar-item w3-button">
            CONTACT
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
export default Header;
