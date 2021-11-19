import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItems(snapshot.data());
      } 
    });
  }, [id]);

  return (
    <>
      {items !== undefined ? (
        <ItemDetail items={items} key={id} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ItemListContainer;
