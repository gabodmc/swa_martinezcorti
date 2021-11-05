/* eslint-disable eqeqeq */
import React from "react";
import { useParams } from "react-router";
import ItemCard from "./ItemCard/ItemCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  const { categoryId } = useParams();

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items
              .filter((items) => items.category == categoryId)
              .map((items) => (
                <ItemCard product={items} key={items.id} />
              ))}
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default ItemList;
