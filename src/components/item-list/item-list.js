import React from "react";

import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  // Проверка, является ли data массивом перед вызовом метода map()
  if (!data) {
    return null; // Возвращаем null, если data не определено
  }

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
