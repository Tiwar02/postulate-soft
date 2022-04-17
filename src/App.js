import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Views from "./Views";
import "./App.css";
import { UserContext } from "./UserContext";

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, name: "Juan Pablo Arroyave Hernández" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Views />
    </UserContext.Provider>
  );
}
