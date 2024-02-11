import React from 'react';
import logo from "./img/spaLogo2.png";
import logo_text from "./img/LuxeAnimalSpa.svg";
import search from "./img/search.png";
import shopping_bag from "./img/shopping_bag.png";
import user from "./img/user.png";

const Header = () => {
  return (
    <header>
          <div style={{ color: "#4C4C4B" }}>
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <img src={logo_text} alt="" />
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" style={{ color: "#4c4c4b" }}>
                  Home
                </a>
              </li>
              <li>
                <a href>Products</a>
              </li>
              <li>
                <a href>Spa Services</a>
              </li>
              <li>
                <a href>Book Appointment</a>
              </li>
              <li>
                <a href>Blog</a>
              </li>
              <li>
                <a href>About Us</a>
              </li>
              <li>
                <a href>Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className="icons_user">
            <img src={search} alt="" />
            <img src={shopping_bag} alt="" />
            <img src={user} alt="" />
          </div>
        </header>
  )
}

export default Header
