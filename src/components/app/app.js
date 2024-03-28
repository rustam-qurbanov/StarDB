import React, { Component } from "react";

import Header from "../header";
// import RandomPlanet from "../random-planet";
// import ErrorButton from "../error-button";

// import PeoplePage from "../people-page";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails from "../item-details";
import Record from "../record";
import ItemList from "../item-list/item-list";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

export default class App extends Component {
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

          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <PersonDetails itemId={11} />

          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
          <PlanetDetails itemId={4} />

          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
          <StarshipDetails itemId={9} />

          {/* <Row left={personDetails} right={starshipDetails} /> */}
        </div>
      </ErrorBoundry>
    );
  }
}
