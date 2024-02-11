import "../src/App.css";
import React from "react"
// import logo from "./img/spaLogo2.png";
// import logo_text from "./img/LuxeAnimalSpa.svg";
// import search from "./img/search.png";
// import shopping_bag from "./img/shopping_bag.png";
// import user from "./img/user.png";
// import banner_dog from "./img/banner_dog.png";
// import washDog from "./img/washDog.svg";
// import leather from "./img/leather.png";
// import pink_diamond from "./img/pinkDiamond.png";
// import silver_diamond from "./img/silverDiamond.png";
// import dogBag from "./img/dogBag.png";
// import catBag from "./img/catBag.png";
// import backpackCat from "./img/backpackCat.png";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <Header />
      {/* <header>
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
        </header> */}

      <Banner />
      {/* <banner>
        <div className="get_off">
          <h2>Get 20% OFF When You Book A Spa Day For Your Animal Today!</h2>
        </div>
        <div className="running_dog">
          <h3>Your dog running amok in the dirt?</h3>
          <h4>
            Book your doggy <br />
            spa day!
          </h4>
          <div className="book_button">
            <button>Book Appointment</button>
          </div>
        </div>

        <div className="banner_dog">
          <img src={banner_dog} alt="" />
        </div>
      </banner> */}

      <Main />
      {/* <main>
        <div className="trending_spa">
          <h5>Trending Spa Package</h5>
        </div>
        <div className="wash_dog">
          <div className="yellow_dog">
            <img src={washDog} alt="" />
          </div>
          <div className="doggy_facial">
            <h6>
              Doggy Facial and Fur <br /> Cleanse Treatment <br />
              $269
            </h6>
            <p>
              Dogs receive a facial with our vegan, cruelty free face products
              and <br />
              cleansing of any dirt left hiding in their beautiful fur <br />
              (comes with a take home face products and animal treats).
            </p>
            <button className="see_more">See More Spa Packages</button>
          </div>
        </div>

        <div className="productCategorie">
          <h5>Dog Collars</h5>
        </div>
        <div className="accessories">
          <div className="accessoriesImg">
            <img src={leather} alt="" />
            <p>
              Leather Dog Collars with Gold Name Tag <br />
              Luxe Animal Spa
            </p>
            <h7>CA $325.00</h7>
          </div>
          <div className="accessoriesImg">
            <img src={pink_diamond} alt="" />
            <p>
              Pink & White Diamond Encrusted Dog Collar <br />
              Luxe Animal Spa
            </p>
            <h7>CA $1225.00</h7>
          </div>
          <div className="accessoriesImg">
            <img src={silver_diamond} alt="" />
            <p>
              Large 3000kt Silver Diamond Collar <br />
              Luxe Animal Spa
            </p>
            <h7>CA $1500.00</h7>
          </div>
        </div>
        <div className="buttonSeeMore">
          <button className="see_more">See More Dog Collars</button>
        </div>

        <div className="productCategorie">
          <h5>Animal Carry Ons</h5>
        </div>
        <div className="accessories">
          <div className="accessoriesImg">
            <img src={dogBag} alt="" />
            <p>
              Leather Dog Collars with Gold Name Tag <br />
              Luxe Animal Spa
            </p>
            <h7>CA $125.00</h7>
          </div>
          <div className="accessoriesImg">
            <img src={catBag} alt="" />
            <p>
              Leather Dog Collars with Gold Name Tag <br />
              Luxe Animal Spa
            </p>
            <h7>CA $135.00</h7>
          </div>
          <div className="accessoriesImg">
            <img src={backpackCat} alt="" />
            <p>
              Leather Dog Collars with Gold Name Tag <br />
              Luxe Animal Spa
            </p>
            <h7>CA $95.00</h7>
          </div>
        </div>
        <div className="buttonSeeMore">
          <button className="see_more">See More Carry Ons</button>
        </div>
      </main> */}
    </>
  );
};

export default App
