import { createContext, useState } from "react";
export const CartContext = createContext();
const { Provider } = CartContext;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // cart.find((items) => items.id === item.id)
    //   ? cart
    //       .filter((items) => items.id === item.id)
    //       .map((items) => (items.quantity = items.quantity + item.quantity))
    setCart([...cart, item]);
  };

  const removeItem = (itemId) => {
    const deleteItem = cart.filter((item) => item.id !== itemId);
    setCart(deleteItem);
  };

  const countItems = () => {
    if (cart.length > 0) {
      let total= 0
      cart.map((item) => (total += item.quantity));
      return total;
    }
  };

  const checkOutTotal = () => {
    let total = 0;
    cart.map((item) => (total += item.price * item.quantity));
    return total;
  };

  const clearCart = () => {
    setCart([]);
    alert("Vaciaste el carrito");
  };

  const CartContextValues = {
    cart,
    addItem,
    removeItem,
    countItems,
    checkOutTotal,
    clearCart,
  };

  return <Provider value={CartContextValues}>{children}</Provider>;
};
