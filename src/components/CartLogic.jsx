import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productInfo) => {
    setCartItems([...cartItems, productInfo]);
    console.log("Product added to cart", productInfo);
  };

  const contextValue = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
