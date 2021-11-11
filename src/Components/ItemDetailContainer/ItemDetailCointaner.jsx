/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../ItemListContainer/Items";
import ItemDetail from "./ItemDetail";
import Loader from '../Loader/Loader'

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
      {items.length ? items
        .filter((items) => items.id == id)
        .map((items, id) => (
          <ItemDetail items={items} key={id} />
        )) : <Loader />}
    </>
  );
};

export default ItemListContainer;
