import React from "react";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Courage" animal="Dog" breed="Cowardly" />
      <Pet name="Oggy" animal="Cat" breed="Chartreux" />
      <Pet name="Mickey" animal="Mouse" breed="Cartoon" />
    </div>
  );
};

export default App;
