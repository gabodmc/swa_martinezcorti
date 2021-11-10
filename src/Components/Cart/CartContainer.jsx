import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartList from "./CartList/CartList";

const CartContainer = () => {
  const { cart, checkOutTotal, clearCart } = useContext(CartContext);

  return cart.length > 0 ? (
    <CartList
      items={cart}
      total={checkOutTotal}
      clear={clearCart}
    />
  ) : (
    <>
      <br />
      <h3
        className="block text-lg font-medium text-gray-700"
        style={{ textAlign: "center" }}
      >
        Aun no agregaste items
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

export default CartContainer;
