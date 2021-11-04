/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../ItemListContainer/Items";
import ItemDetail from "./ItemDetail";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    new Promise((response) => {
      setTimeout(() => {
        response(Data);
      }, 5);
    }).then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <>
      {items
        .filter((items) => items.id == id)
        .map((items, id) => (
          <ItemDetail items={items} key={items.id} />
        ))}
    </>
  );
};

export default ItemListContainer;
