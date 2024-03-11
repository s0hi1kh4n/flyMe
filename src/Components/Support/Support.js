import React from 'react'
// import gridWindow1 from '../../Assets/images/gridWindow1.jpg'
// import gridWindow2 from '../../Assets/images/gridWindow2.jpg'
// import gridWindow3 from '../../Assets/images/gridWindow3.jpg'
import windows from '../../Assets/images/windows.png'
const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Plan Your Travel With Confidence</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid recusandae voluptatum itaque doloremque</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime itaque unde enim ad numquam perspiciatis</p>
            </div> 

            <div className="singleInfo">
              <span className="number colourOne">02</span>
              <h4>Chauffeur Service at your arrival</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime itaque unde enim ad numquam perspiciatis</p>
            </div>

            <div className="singleInfo">
              <span className="number colourTwo">03</span>
              <h4>Multi-Risk Travel Insurance</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime itaque unde enim ad numquam perspiciatis</p>
            </div> 
          </div>

          <div className="imgDiv">
            <img src={windows} className="windows" alt="" />
            {/* <img src={gridWindow1} className="gridWindow1" alt="" />
            <img src={gridWindow2} className="gridWindow2" alt="" />
            <img src={gridWindow3} className="gridWindow3" alt="" /> */}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Support
