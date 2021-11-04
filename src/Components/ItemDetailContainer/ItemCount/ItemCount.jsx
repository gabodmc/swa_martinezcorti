import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleAddItem = () => {
    count < stock ? setCount(count + 1) : alert("Alcanzaste el stock máximo");
  };

  const handleRemoveItem = () => {
    count > 1
      ? setCount(count - 1)
      : alert("La cantidad no puede ser menor a 1");
  };

  return (
    <>
      <div className="add-item">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRemoveItem}
        >
          -
        </button>
        <input value={count} onChange={setCount} readOnly />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddItem}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
