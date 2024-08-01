import React, { useState, useContext } from 'react';
import { Link, NavLink,useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdBookmark, MdInfo } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../images/logo2.png";

import {UserContext} from '../context/UserContext'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
const {currentUser} = useContext(UserContext)
const { id } = useParams();
  return (
    <>
    <nav>
    <Link to={"/"} className='nav_logo'>
           <img src={logo} alt="Logo" />
         </Link>
         <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
         }}>
          <span></span>
          <span></span>
          <span></span>
         </div>
         
      {currentUser?.id && <ul className={menuOpen ? "open" : ""}>
           <li>
             <NavLink to={"/book"}>
               <MdBookmark className="nav_icon" /> Book A Vehicle
             </NavLink>
           </li>
          <li>
             <NavLink to={"/vehicles"}>
               <RiMotorbikeFill className="nav_icon" /> See Bikes
             </NavLink>
           </li>
          <li>
             <NavLink to={"/about"}>
               <MdInfo className="nav_icon" /> About Us
             </NavLink>
           </li>
           <li>
             <NavLink to={"/history"}>
               <FaCartShopping className="nav_icon" /> All Bookings
             </NavLink>
           </li>
           <li>
            <NavLink to={`/profile/${id}`}>
               <FaUserCircle  className="nav_icon" /> Profile
             </NavLink>
           </li>
           <li>
            <NavLink to={"/logout"}>
               <FaUserCircle  className="nav_icon" /> Logout
             </NavLink>
           </li>
      </ul>}
      {!currentUser?.id && <ul className={menuOpen ? "open" : ""}>
          <li>
             <NavLink to={"/vehicles"}>
               <RiMotorbikeFill className="nav_icon" /> See Bikes
             </NavLink>
           </li>
           <li>
             <NavLink to={"/about"}>
               <MdInfo className="nav_icon" /> About Us
             </NavLink>
           </li>
           <li>
            <NavLink to={"/login"}>
               <FaUserCircle  className="nav_icon" /> Login
             </NavLink>
           </li>
      </ul>}
    </nav>
    </>
  )
}

export default Header
