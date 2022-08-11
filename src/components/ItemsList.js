import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  const itemsList = props.items.map((item) => (
    <div className="w-full md:w-1/2 px-3">
      <li className="ui-item-list" key={item.id}>
        <Item info={item} />
        <label hidden="true" htmlFor="id-itemButton">
          Удалить:
        </label>
        <div className="w-full md:w-1/2 px-3">
          <button
            id="id-itemButton"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => props.onHandleDeleteItem(item.id)}
          >
            Удалить
          </button>
        </div>
      </li>
    </div>
  ));

  return <ul className="shop">{itemsList}</ul>;
}
