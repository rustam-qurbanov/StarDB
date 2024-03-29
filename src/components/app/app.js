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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender:" />
        <Record field="birthYear" label="Birth Year:" />
        <Record field="eyeColor" label="Eye Color:" />
      </ItemDetails>
    );

    const personList = (
      <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
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

          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>

          {/* <Row left={personList} right={personDetails} />
          <Row left={personList} right={starshipDetails} /> */}

          {/* <Row left={personDetails} right={starshipDetails} /> */}
        </div>
      </ErrorBoundry>
    );
  }
}
