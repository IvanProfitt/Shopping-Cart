import { useState, createContext } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  

  const addToCart = (productInfo) => {
    setCartItems([...cartItems, productInfo]);
    console.log("Product added to cart", productInfo);
  };

  useEffect(() => {
    console.log("Cart Items updated:", cartItems);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
