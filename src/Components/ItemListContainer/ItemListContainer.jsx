import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import Loader from "../Loader/Loader";
import { getFirestore } from "../../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    if (categoryId !== undefined) {
      const q = query(
        collection(db, "items"),
        where("category", "==", categoryId)
      );
      getDocs(q).then((snapshot) => {
        setItems(snapshot.docs.map((doc) => doc.data()));
      }).catch((error) => console.log(error));
    } else {
      getDocs(collection(db, "items"))
        .then((snapshot) => {
          setItems(snapshot.docs.map((doc) => doc.data()));
        })
        .catch((error) => console.log(error));
    }
  }, [categoryId]);

   return (
    <>
      {items.length ? (
        <ItemList items={items} title={categoryId} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ItemListContainer;
