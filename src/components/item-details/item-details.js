import React, { Component } from "react";

import "./item-details.css";

import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

// const Record = ({ item, field, label }) => {
//   return (
//     <li className="list-group-item">
//       <span className="term">{label}</span>
//       <span>{item[field]}</span>
//     </li>
//   );
// };
// export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = (item) => {
    const { getImageUrl } = this.props;

    this.setState({
      item,
      loading: false,
      error: false,
      image: getImageUrl(item),
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateItem() {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then(this.onItemLoaded).catch(this.onError);
  }

  render() {
    const { item, loading, error, image } = this.state;
    const { children } = this.props;

    if (!item) {
      return (
        <div className="alert alert-dismissible alert-dark">
          <span>Select a person from a list!</span>
        </div>
      );
    }

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <ItemView item={item} image={image} children={children} />
    ) : null;

    return (
      <div className="item-details card ">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemView = ({ item, image, children }) => {
  const { name } = item;

  return (
    <React.Fragment>
      <img
        className="item-image"
        // src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        src={image}
        alt="item-img"
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">
            <span className="term">Gender:</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year:</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color:</span>
            <span>{eyeColor}</span>
          </li> */}

          {children.map((child, idx) => {
            return React.cloneElement(child, { item, key: idx });
          })}
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
