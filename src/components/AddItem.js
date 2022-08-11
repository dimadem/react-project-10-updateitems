import React from "react";

export default function AddItem(props) {
  return (
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={props.onHandleSubmitForm}
      >
        <div className="container box-border p-4">
          <label
            className="block p-2 text-base font-medium text-gray-700"
            htmlFor="id-name"
          >
            Название:
          </label>
          <input
            id="id-name"
            type="text"
            placeholder="Название товара"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={props.name}
            onChange={props.onHandleChangeName}
          />
        </div>
        <div className="container box-border p-4">
          <label
            className="block p-2 text-base font-medium text-gray-700"
            htmlFor="id-desc"
          >
            Описание:
          </label>
          <input
            id="id-desc"
            type="text"
            placeholder="Описание товара"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={props.desc}
            onChange={props.onHandleChangeDesc}
          />
        </div>
        <div className="container box-border p-4">
          <div className="validation"></div>
          <label hidden="true" htmlFor="id-AddButton">
            Добавить:
          </label>
          <input
            id="id-AddButton"
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Добавить"
          />
        </div>
      </form>
    </div>
  );
}
