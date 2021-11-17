import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutContainer = () => {
  const { cart } = useContext(CartContext);
  return cart.length > 0 ? (
    <CheckoutForm />
  ) : (
    <>
      <br />
      <h3
        className="block text-lg font-medium text-gray-700"
        style={{ textAlign: "center" }}
      >
        No podes realizar el checkout sin elegir items.
        <br />
        <Link to="/">
          <button
            type="button"
            className=" py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Ir de shopping
          </button>
        </Link>
      </h3>
    </>
  );
};

export default CheckoutContainer;
