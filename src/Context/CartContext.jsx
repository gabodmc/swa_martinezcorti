import { createContext, useState } from "react";
export const CartContext = createContext();
const { Provider } = CartContext;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
    console.log(item);
  };

  const removeItem = (itemId) => {
    const deleteItem = cart.filter((item) => item.id !== itemId);
    setCart(deleteItem);
  };

  const countItems = () => {
    if (cart.length > 0) {
      return cart.length;
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const CartContextValues = {
    cart,
    addItem,
    removeItem,
    countItems,
    clearCart,
  };

  return <Provider value={CartContextValues}>{children}</Provider>;
};
