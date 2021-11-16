import { createContext, useState } from "react";
import swal from "sweetalert";
export const CartContext = createContext();
const { Provider } = CartContext;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const cartResult = [];
  console.log(cartResult);
  cart.reduce(function (res, value) {
    if (!res[value.id]) {
      res[value.id] = { ...value, quantity: 0 };
      cartResult.push(res[value.id]);
    }
    res[value.id].quantity += value.quantity;
    return res;
  }, {});

  const removeItem = (itemId) => {
    const deleteItem = cart.filter((item) => item.id !== itemId);
    swal({
      title: "Estás seguro de eliminar el item?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        setCart(deleteItem);
      }
    });
  };

  const countItems = () => {
    if (cart.length > 0) {
      let total = 0;
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
    swal({
      title: "Estás seguro de vaciar el carrito?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({ text: "Vaciaste el carrito", icon: "success" });
        setCart([]);
      }
    });
  };

  const CartContextValues = {
    cart,
    addItem,
    removeItem,
    countItems,
    checkOutTotal,
    clearCart,
    cartResult,
  };

  return <Provider value={CartContextValues}>{children}</Provider>;
};
