import React from "react";
import { getPetDetails } from "./petfinder";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    // throw new Error("LOL");

    getPetDetails(this.props.id)
      .then(({ data }) => {
        const { animal } = data;
        this.setState({
          animal: animal.type,
          breed: animal.breeds.primary,
          description: animal.description,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          media: animal.photos,
          name: animal.name,
          loading: false,
        });
      })
      .catch((error) => console.error("Error fetching Pet details", error));
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, description, location, media, name } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            `${animal} - ${breed} - ${location}`
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
