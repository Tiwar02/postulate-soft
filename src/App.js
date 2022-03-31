import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Components
import NavbarUp from "./components/Navbar/NavbarUp";
import Datagrid from "./components/DataGrid/DataGrid";

//Pages
import Login from "./pages/Login/Login";
import SignupCompanies from "./pages/Signup/SignupCompanies/SignupCompanies";
import SignupContacts from "./pages/Signup/SignupContacts/SignupContacts";
import StudentCatalog from "./pages/StudentsCatalog/StudentsCatalog";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarUp/>
          <Routes>
            <Route path="/signup-companies" element={<SignupCompanies />}></Route>
            <Route path="/signup-contacts" element={<SignupContacts />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/students-catalog" element={<StudentCatalog />}></Route>
            <Route path="/students" element={<Datagrid />}></Route>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
