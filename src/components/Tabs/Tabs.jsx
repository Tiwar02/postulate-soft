import React, { useState } from "react";
import { Link } from "react-router-dom";

//Import Reactstraps
import { Nav, NavItem, NavLink } from "reactstrap";

import "./Tabs.css";

export default function Tabs(props) {
  const [tabSelected, setTabSelected] = useState(props.tabSelect);

  const styleLink0 = {
    background: tabSelected === 0 ? "#C20C19" : "#FFF",
    color: tabSelected === 0 ? "#FFF" : "#000",
    textDecorationLine: "none"
  };

  const styleLink1 = {
    background: tabSelected === 1 ? "#C20C19" : "#FFF",
    color: tabSelected === 1 ? "#FFF" : "#000"
  };

  return (
    <div >
      <Nav fill justified pills tabs className="mt-1">
        <NavItem >
          <Link style={{ textDecorationLine: "none", fontSize: "20px" }} to="/signup-companies" onClick={() => setTabSelected(0)}>
            <NavLink style={styleLink0}
              active={tabSelected === 0 ? true : false}
            >
              Registro Empresa
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link style={{ textDecorationLine: "none", fontSize: "20px" }} to="/signup-contacts" onClick={() => setTabSelected(1)}>
            <NavLink style={styleLink1}
              active={tabSelected === 1 ? true : false}
            >
              Registro Contacto
            </NavLink>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
}
