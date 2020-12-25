import { Link } from "@reach/router";
import React from "react";

const Pet = ({ id, name, animal, breed, media, location }) => {
  const thumbnail = !media.length
    ? "http://placecorgi.com/300/300"
    : media[0].small;

  return (
    <Link to={`details/${id}`} className="pet">
      <div className="image-container">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
