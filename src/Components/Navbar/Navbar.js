import React from 'react'
// import { useState } from 'react'
import {GiCommercialAirplane} from 'react-icons/gi'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../Assets/images/logo.png'

const Navbar = () => {
//   const [active, setActive] = useState('navBarMenu')
//   const showNavBar=()=>{
//     setActive("navBarMenu showNavBar")
//   }
//   const removeNavBar=()=>{
//     setActive("navBarMenu")
//   }
// // bg add to second navbar
//   const [noBg, addBg] = useState('navBarTwo flex')
//   const addBgColor=()=>{
//     if(window.scrollY >= 10)
//       addBg("navBarTwo navbar_with_bg")
//     else{
//       addBg('navBarTwo flex')
//     }
//   }
//   window.addEventListener('scroll',addBgColor)

  return (
    <div className='navbar flex'>
        <div className="navBarOne flex">
          <div> 
            <GiCommercialAirplane className='icon'/>
          </div>
          <div className="flex">
            <li className='flex'><BsPhoneVibrate className='icon'/> &nbsp;  Support</li>
            <li className='flex'><AiOutlineGlobal className='icon'/> &nbsp;  Languages</li>
          </div>
          <div className="atb flex">
            <span>Log In</span>
            <span>Sign In</span>
          </div>
        </div>

        <div className="navBarTwo flex">
          <div className="logoDiv">
            <img src={logo} className='logo' alt="" />
          </div>
          <div className="navBarMenu">
            <ul className="menu flex">
              <li  className="listItem">Home</li>
              <li  className="listItem">About</li>
              <li className="listItem">Offers</li>
              <li className="listItem">Seats</li>
              <li className="listItem">Destinations</li>
            </ul>
            <button className='btn flex btnOne'>Contact</button>
          </div>
          {/* <button className='btn flex btnTwo'>Contact</button> */}
          <div className="toggleIcon">
            <CgMenuGridO className='icon'/> 
          </div>
        </div>
    </div>
  )
}

export default Navbar
// onClick={removeNavBar} 
// onClick={showNavBar} 