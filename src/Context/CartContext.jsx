import { createContext, useState } from "react";
import Swal from 'sweetalert2'
export const CartContext = createContext();
const { Provider } = CartContext;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const cartResult = [];
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
    Swal.fire({
      title: 'Esta seguro de eliminar este item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'green',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(deleteItem);
      }
    })
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
    Swal.fire({
      title: 'Esta seguro de vaciar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'green',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Vaciar carrito'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Vaciaste el carrito',
          "",          
          'success'
        )
        setCart([]);
      }
    })
  };

  const clearCheckOut = () => {
       setCart([]);

  };

  const CartContextValues = {
    cart,
    addItem,
    removeItem,
    countItems,
    checkOutTotal,
    clearCart,
    clearCheckOut,
    cartResult,
  };

  return <Provider value={CartContextValues}>{children}</Provider>;
};
