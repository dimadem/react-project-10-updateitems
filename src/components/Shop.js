import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log(localStorage.items, "Check localStorage");
  }, [items]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDesc(event) {
    setDesc(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (name === "" || desc === "") {
      console.log(name, desc, "Empty Submit");
      return alert("не удалось создать товар!");
    } else {
      setItems((prev) => [
        ...items,
        {
          name,
          desc,
          id: uuid(),
        },
      ]);
      setName("");
      setDesc("");
    }
    fetch("https://covid-shop-mcs.herokuapp.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: name, desc: desc }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data, "uploaded data"))
      .catch((error) => console.error(error));
  }

  function handleDeleteItem(id) {
    setItems(items.filter((i) => i.id !== id));
  }

  //consoleCheck
  console.log(items, "Items in useState");

  //OUTPUT
  return (
    <>
      <AddItem
        onHandleSubmitForm={handleSubmitForm}
        name={name}
        onHandleChangeName={handleChangeName}
        desc={desc}
        onHandleChangeDesc={handleChangeDesc}
      />
      <div className="p-4">
        <p class="block text-gray-700 text-lg font-bold mb-2">
          {items.length < [1] && "Добавьте первый товар"}
        </p>
      </div>
      <ItemsList items={items} onHandleDeleteItem={handleDeleteItem} />
    </>
  );
}
