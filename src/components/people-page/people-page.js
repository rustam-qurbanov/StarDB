import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details";

import Row from "../row";
import ErrorBoundry from "../error-boundry";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 11,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name}`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
