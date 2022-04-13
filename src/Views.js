import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignupCompanies from "./pages/Signup/SignupCompanies/SignupCompanies";
import SignupContacts from "./pages/Signup/SignupContacts/SignupContacts";
import StudentCatalog from "./pages/StudentsCatalog/StudentsCatalog";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";

const ROLES = {
  'Student': 2001,
  'Company': 1984,
  'Admin': 5150
}

export default function Views() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup-companies" element={<SignupCompanies />} />
        <Route path="/signup-contacts" element={<SignupContacts />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/students-catalog" element={<StudentCatalog />} />
        </Route>
      </Route>
    </Routes>
  );
}
