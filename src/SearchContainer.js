import React, { useContext, useEffect, useState } from "react";
import { ANIMALS, getBreeds, getSearchResults } from "./petfinder";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useDropdown from "./useDropdown";

const SearchContainer = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "Barnyard", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    const { data } = await getSearchResults(animal, breed, location);

    const pets = data.animals || [];
    setPets(pets);
  };

  useEffect(() => {
    setBreed("");
    setBreeds([]);

    getBreeds(animal)
      .then(({ data }) => {
        const breeds = data.breeds.map(({ name }) => name);
        setBreeds(breeds);
      })
      .catch((error) => console.error("Error fetching breeds", error));
  }, [animal]);

  return (
    <div className="search-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />

        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchContainer;
