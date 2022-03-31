import React, { useState } from "react";
import udemLogo from "../../assets/images/udem_logo.png";

//Reactstrap
import { Navbar, NavbarBrand, Progress } from "reactstrap";
import { Link } from "react-router-dom";

export default function NavbarUp() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Navbar style={{ background: "#C20C19" }} color="faded" dark>
        <div className="container d-flex justify-content-between align-items-center" >
          <NavbarBrand href="/" className="me-auto">  
            <img src={udemLogo} alt="UdeM-logo" />
          </NavbarBrand>
          <h3 style={{ color: "#FFF" }}>Postúlate UdeM</h3>
        </div>
      </Navbar>
      <Progress animated color="info" value={70} hidden={!isLoading} />
    </div>
  );
}
