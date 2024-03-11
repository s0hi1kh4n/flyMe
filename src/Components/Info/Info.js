import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";
const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all around the world.</h2>
          <button className="btn">View All</button>
        </div>

        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta laboriosam quasi nostrum nam vitae.
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Smart Checkklist</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta laboriosam quasi nostrum nam vitae.
            </p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="cardTitle">Save More</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta laboriosam quasi nostrum nam vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
