import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="max-w-fit rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{info.name}</h2>
        <p className="text-gray-700 text-base">{info.desc}</p>
      </div>
      <div className="inline-flex p-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l"
          onClick={handleAddClick}
        >
          +
        </button>
        <h3 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-l">
          {total ? total : ""}
        </h3>
      </div>
    </div>
  );
}
