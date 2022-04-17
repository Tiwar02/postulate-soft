import React, { Component, useContext } from "react";
import udemLogo from "../../assets/images/udem_logo2.png";
import "./Home.css";
 

export default class Home extends Component {

  render() {
    return (
      <div className="contenedor">
        <img id="logo" src={udemLogo} alt="Udem Logo" />
      </div>
    )
  }
}