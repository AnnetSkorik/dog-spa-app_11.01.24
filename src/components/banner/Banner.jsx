import React from 'react';
import banner_dog from "./img/banner_dog.png";

const Banner = () => {
  return (
    <banner>
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
      </banner>
  )
}

export default Banner 
