import React from 'react'
import washDog from "./img/washDog.svg";
import leather from "./img/leather.png";
import pink_diamond from "./img/pinkDiamond.png";
import silver_diamond from "./img/silverDiamond.png";
import dogBag from "./img/dogBag.png";
import catBag from "./img/catBag.png";
import backpackCat from "./img/backpackCat.png";

const Main = () => {
  return (
    <main>
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
      </main>
  )
}

export default Main
