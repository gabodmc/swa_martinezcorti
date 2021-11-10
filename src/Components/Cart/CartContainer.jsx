import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartList from "./CartList";

const CartContainer = () => {
  const { cart, removeItem } = useContext(CartContext);


  return (
    cart.length > 0 ? 
    <CartList items={cart} functions={removeItem} />
    :
    <p>Aun no hay items</p>
 


  );
};

export default CartContainer;
