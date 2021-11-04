/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router";
import ItemCard from "./ItemCard/ItemCard"
// import InfiniteCarousel from "react-leaf-carousel";
import "./ItemList.css";


const ItemList = ({items}) => {
  const { categoryId } = useParams();

    return ( 
    <>
{/* <InfiniteCarousel
          className="carousel"
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.2}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >  */}
        {items.filter((items) => items.category == categoryId).map((items, id) => (
            <ItemCard item={items} key={id} />
        ))}
 {/* </InfiniteCarousel> */}
  </>
)
}

export default ItemList