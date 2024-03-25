import React, { Component } from "react";

import Header from "../header";
// import RandomPlanet from "../random-planet";
// import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

// import PeoplePage from "../people-page";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails from "../item-details";
import Record from "../record";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } =
      this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender:" />
        <Record field="birthYear" label="Birth Year:" />
        <Record field="eyeColor" label="Eye Color:" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="container stardb-app">
          <Header />
          {/* {planet}
          <div className="row mb2 button-row ">
            <button
              className="toggle-planet btn btn-primary  "
              onClick={this.toggleRandomPlanet}
            >
              Random Planet
            </button>
            <ErrorButton />
          </div>
          <PeoplePage /> */}

          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
