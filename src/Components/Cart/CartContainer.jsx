import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { StyleContext } from "../../Context/StyleContext";
import CartList from "./CartList/CartList";

const CartContainer = () => {
  const { cart, cartResult, checkOutTotal, clearCart } = useContext(CartContext);
  const { greenButton } = useContext(StyleContext);

  return cart.length > 0 ? (
    <CartList items={cartResult} total={checkOutTotal} clear={clearCart} />
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
          <button type="button" className={greenButton}>
            Ir de shopping
          </button>
        </Link>
      </h3>
    </>
  );
};

export default CartContainer;
