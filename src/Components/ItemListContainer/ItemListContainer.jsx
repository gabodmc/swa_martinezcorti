import React, {useState,useEffect} from "react"
import { Data } from "./Items"
import ItemList from "./ItemList/ItemList";
import Loader from "../Loader/Loader";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      new Promise((response) => {
        setTimeout(() => {
          response(Data);
        }, 1000);
      }).then((response) => {
        setItems(response)
      });
    }, []);


    return (
      <>
        {items.length ? 
        <ItemList items={items} /> :
<Loader/>}
</>
    )
    
    

}

export default ItemListContainer