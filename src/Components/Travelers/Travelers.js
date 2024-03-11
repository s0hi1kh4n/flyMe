import React from "react";
import paris from "../../Assets/images/paris.jpg";
import dubai from "../../Assets/images/dubai.jpg";
import newYork from "../../Assets/images/newYork.jpg";
import london from "../../Assets/images/london.jpg";
import delhi from "../../Assets/images/delhi.jpg";
import greece from "../../Assets/images/greece.jpg";
import traveler1 from "../../Assets/images/traveler1.jpg";
import traveler2 from "../../Assets/images/traveler2.jpg";
import traveler3 from "../../Assets/images/traveler3.jpg";
import traveler4 from "../../Assets/images/traveler4.jpg";
import traveler5 from "../../Assets/images/traveler5.jpg";
import traveler6 from "../../Assets/images/traveler6.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Aiony Haust",
    socialLink: "@s0hi1khan"
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "Charles Deluvio",
    socialLink: "@s0hi1khan"
  },
  {
    id: 3,
    destinationImage: newYork,
    travelerImage: traveler3,
    travelerName: "Leio McLaren",
    socialLink: "@s0hi1khan"
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: "Luis Villasmil",
    socialLink: "@s0hi1khan"
  },
  {
    id: 5,
    destinationImage:delhi,
    travelerImage: traveler5,
    travelerName: "Sohil Khan",
    socialLink: "@s0hi1khan"
  },
  {
    id: 6,
    destinationImage:greece,
    travelerImage: traveler6,
    travelerName: "Johny Sins",
    socialLink: "@s0hi1khan"
  }
];

const Travelers = () => {
  return (
    <div className="section container travelers">
      <div className="sectionContainer">
        <h2>Top Travelers of this Month!</h2>
        <div className="travelersContainer grid">
          {/* single passenger card */}

          {travelers.map(({id, destinationImage , travelerImage, travelerName, socialLink}) => {
            return (
              <div key={id} className="singleTraveler">
                <img src={destinationImage} className="destinationImage" alt="" />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage}className="travelerImage" alt="" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
