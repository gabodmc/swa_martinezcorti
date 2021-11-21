import React, { useState } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const submitItem = () => {
    if(stock > 0){
      onAdd(count)
  }
    

  };

  const handleAddItem = () => {
    count < stock ? setCount(count + 1) : Swal.fire(
      'Alcanzaste el stock máximo',
      '',
      'warning'
    )
  };

  const handleRemoveItem = () => {
    count > 1
      ? setCount(count - 1)
      : Swal.fire(
        'El stock no puede ser menor a 1',
        '',
        'warning'
      )
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
      <button
          type="button"
          className="bg-green-500 hover:bg-gren-700 text-white font-bold py-2 px-4 rounded"
          onClick={submitItem}
        >
        Agregar item
        </button>
    </>
  );
};

export default ItemCount;
