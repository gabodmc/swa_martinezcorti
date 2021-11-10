import { createContext, useState } from "react";
export const CartContext = createContext();
const { Provider } = CartContext;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    if(searchInCart(item.id)){
            <h4>Ya existe el producto</h4>
            return false
        }
        setCart([...cart,item])
    }

  const removeItem = (itemId) => {
    const deleteItem = cart.filter((item) => item.item.id !== itemId);
    setCart(deleteItem);
  };

  const countItems = () => {
    if (cart.length > 0) {
      return cart.length;
    }
  };
  
	const checkOutTotal = () => {
		let total = 0;
		cart.map(item => total += item.item.price * item.quantity);
		return total;
	}

  const clearCart = () => {
    setCart([]);
    alert('Vaciaste el carrito')
  };

  const searchInCart = () => {
    cart.find(item => item.item.id === item.id)
}

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
