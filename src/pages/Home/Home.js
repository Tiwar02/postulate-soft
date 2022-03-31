import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Navbar...</h1>
      <hr/>
      {/* <Switch>
        <Route path="/">

        </Route>
      </Switch> */}
      <header>
        <Link to="#" onClick={console.log("hello")} />
      </header>
    </div>
  );
}
