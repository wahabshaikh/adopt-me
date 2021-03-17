import { Client } from "@petfinder/petfinder-js";
import "regenerator-runtime/runtime.js";

const client = new Client({
  apiKey: "Kf0JwJq5NNApC5FghXZVWboMHTqMkHHz3qpf6bRr97uKs227Dq",
  secret: "tAuGrmH6DY3Fo44IWole0NLKaAAoT3m2nUCH1UQq",
});

const ANIMALS = [
  "Dog",
  "Cat",
  "Rabbit",
  "Small & Furry",
  "Horse",
  "Bird",
  "Scales, Fins & Other",
  "Barnyard",
];

const getBreeds = (animal) => client.animalData.breeds(animal);
const getSearchResults = (animal, breed, location) =>
  client.animal.search({ type: animal, breed, location });
const getPetDetails = (id) => client.animal.show(id);

export { ANIMALS, getBreeds, getSearchResults, getPetDetails };
