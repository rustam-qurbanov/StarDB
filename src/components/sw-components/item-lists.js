import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunc = (Wrapped, func) => {
  return (props) => {
    return <Wrapped {...props}>{func}</Wrapped>;
  };
};
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

// const ListWithChildren = withChildFunc(ItemList, renderName);

const PersonList = withData(withChildFunc(ItemList, renderName), getAllPeople);

const PlanetList = withData(withChildFunc(ItemList, renderName), getAllPlanets);

const StarshipList = withData(
  withChildFunc(ItemList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
