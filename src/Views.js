import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignupCompanies from "./pages/Signup/SignupCompanies/SignupCompanies";
import SignupContacts from "./pages/Signup/SignupContacts/SignupContacts";
import Students from "./pages/Students/Students";
import Companies from "./pages/Companies/Companies";
import Contacts from "./pages/Contacts/Contacts";
import Contact from "./pages/Contacts/Contact";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
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
        <Route path="*" element={<NotFoundPage />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/*" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
