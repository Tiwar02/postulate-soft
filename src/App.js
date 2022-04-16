import { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Views from "./Views";
import "./App.css";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, name: "Stiwar Salazar" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Views />
    </UserContext.Provider>
  );
}
