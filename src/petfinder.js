import { Client } from "@petfinder/petfinder-js";

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
const getSearchResults = (type, breed) => client.animal.search({ type, breed });

export { ANIMALS, getBreeds, getSearchResults };
