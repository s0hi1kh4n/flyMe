import React from 'react'
import logo from '../../Assets/images/logo.png'
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo}  className='logo' alt="" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore debitis veniam quaerat maiores dolores dicta</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiOutlineTwitter className="icon"/>
            <FaPinterestP className="icon"/>
          </div>
        </div>
        <div className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li><a href="/flyMe">Home</a></li>
          <li><a href="/flyMe">Explore</a></li>
          <li><a href="/flyMe">Flight Status</a></li>
          <li><a href="/flyMe">Travel</a></li>
          <li><a href="/flyMe">Check-In</a></li>
          <li><a href="/flyMe">Manage Your Booking</a></li>
        </div>
        <div className="footerLinks">
          <span className='linkTitle'>Quick Guide</span>
          <li><a href="/flyMe">FAQ</a></li>
          <li><a href="/flyMe">How to </a></li>
          <li><a href="/flyMe">Features</a></li>
          <li><a href="/flyMe">Baggage</a></li>
          <li><a href="/flyMe">Route Map</a></li>
          <li><a href="/flyMe">Our Communities</a></li>
        </div> 
        <div className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li><a href="/flyMe">Chauffuers</a></li>
          <li><a href="/flyMe">Our Partners</a></li>
          <li><a href="/flyMe">Destination</a></li>
          <li><a href="/flyMe">Careers</a></li>
          <li><a href="/flyMe">Transportation</a></li>
          <li><a href="/flyMe">Programme Rules</a></li>
        </div>  
      </div>


      <div className="copyrightDiv flex">
        <p>Courtesy Design | Developed by 
          <a href='https://instagram.com/s0hi1khan'  target='blank'> s0hi1khan</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
