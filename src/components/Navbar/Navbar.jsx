import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";
import udemLogo from "../../assets/images/udem_logo.png";
import { UserContext } from "../../App";
import { Progress } from 'reactstrap';

export default function Navbar2() {
  const { user } = useContext(UserContext);

  const [sidebar, setSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showProgress = () => setIsLoading(!isLoading);

  return (
    <>
      <div className={sidebar ? "navbar slide" : "navbar"}>
        <div className='container'>
          <Link to="/" className='navbar-logo'>
            <img src={udemLogo} alt="UdeM-logo" />
          </Link>
          <h3 className='title'>Postúlate UdeM</h3>
          {user.loggedIn && <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{ color: "#fff" }} />
          </Link>}
        </div>
      </div>
      <Progress animated color="info" value={70} hidden={!isLoading} />
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className='sidebar-items'>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar} style={{ color: "#000" }} />
            </Link>
          </li>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
