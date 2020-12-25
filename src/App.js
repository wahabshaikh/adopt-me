import React from "react";
import Details from "./Details";
import SearchContainer from "./SearchContainer";
import { Link, Router } from "@reach/router";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchContainer path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

export default App;
