import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemsAdmin } from './MenuItems';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";
import udemLogo from "../../assets/images/udem_logo.png";
import { UserContext } from "../../UserContext";
import { Progress } from 'reactstrap';

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const [sidebar, setSidebar] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progressValue, setProgressValue] = useState();
  const showSidebar = () => setSidebar(!sidebar);
  const changeShowProgress = () => setShowProgress(!showProgress);

  const logout = () => {
    setUser({...user, loggedIn: false })
  }

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
      <Progress animated color="info" value={progressValue} hidden={!showProgress} />
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className='sidebar-items' onClick={showSidebar}>
          <li className='navbar-display'>
            {/* <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar} style={{ color: "#000" }} />
            </Link> */}
            <p className='name'>{user.name}</p>
          </li>
          {MenuItemsAdmin.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <li className="nav-text" >
            <Link to="/" onClick={logout} >
              <i className="fas fa-arrow-right-from-bracket"></i>
              <span>Salir</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
