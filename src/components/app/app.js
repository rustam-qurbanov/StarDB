import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

import PeoplePage from "../people-page";

import "./app.css";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    // selectedPerson: 3,
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

  // onPersonSelected = (selectedPerson) => {
  //   this.setState({ selectedPerson });
  // };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="container stardb-app">
        <Header />
        {planet}

        <div className="row mb2 button-row ">
          <button
            className="toggle-planet btn btn-primary  "
            onClick={this.toggleRandomPlanet}
          >
            Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />


      </div>
    );
  }
}
