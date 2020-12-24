import React from "react";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Courage",
      animal: "Dog",
      breed: "Cowardly",
    }),
    React.createElement(Pet, {
      name: "Oggy",
      animal: "Cat",
      breed: "Chartreux",
    }),
    React.createElement(Pet, {
      name: "Mickey",
      animal: "Mouse",
      breed: "Cartoon",
    }),
  ]);
};

export default App;
