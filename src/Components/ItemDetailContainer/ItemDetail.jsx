/* eslint-disable eqeqeq */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ items }) => {
  const [itemCounts, setItemCounts] = useState();
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    const newItem = {
     ...items, 
      quantity: quantity,
    };
    addItem(newItem);
    setItemCounts(quantity);
  };
  return (
    <>
      <article>
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-full object-center object-cover"
            />
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {items.name}
              </h1>
            </div>
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Información de producto</h2>
              <p className="text-3xl text-gray-900">${items.price}</p>
              <form className="mt-10">
                {itemCounts === undefined ? (
                  <ItemCount stock={items.stock} initial={1} onAdd={onAdd} />
                ) : (
                  <>
                    <p>Agregaste {itemCounts} items al carrito</p>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Finalizar compra
                      </button>
                    </Link>
                    <Link to="/">
                      <button
                        type="button"
                        className="mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Seguir comprando
                      </button>
                    </Link>
                  </>
                )}
              </form>
            </div>
            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{items.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ItemDetail;
