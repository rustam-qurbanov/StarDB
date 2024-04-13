import React, { Component } from "react";

import Header from "../header";
// import RandomPlanet from "../random-planet";
// import ErrorButton from "../error-button";

// import PeoplePage from "../people-page";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
// import Row from "../row";
import { SwapiServiceProvider } from "../swapi-service-context";
// import DummySwapiService from "../../services/dummy-swapi-service";

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

export default class App extends Component {
  // swapiService = new DummySwapiService();
  swapiService = new SwapiService();


  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
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

            {/* <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
          <Row left={<PlanetList />} right={<PlanetDetails itemId={4} />} />
          <Row left={<StarshipList />} right={<StarshipDetails itemId={9} />} /> */}

            <PersonList />
            <PersonDetails itemId={11} />

            <PlanetList />
            <PlanetDetails itemId={4} />

            <StarshipList />
            <StarshipDetails itemId={9} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
