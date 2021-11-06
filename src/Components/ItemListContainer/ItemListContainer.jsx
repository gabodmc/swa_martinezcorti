import React, {useState,useEffect} from "react"
import { Data } from "./Items"
import ItemList from "./ItemList/ItemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      new Promise((response) => {
        setTimeout(() => {
          response(Data);
        }, 5);
      }).then((response) => {
        setItems(response)
      });
    }, []);


    return (
        items.length ? 
        <ItemList items={items} /> :
      <p>Cargando items</p>
    )
    
    

}

export default ItemListContainer