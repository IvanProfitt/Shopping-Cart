import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (productInfo) => {
    setCartItems(prevCartItems => {
      const existingProduct = prevCartItems.find(item => item.id === productInfo.id);

      if (existingProduct) {
        return prevCartItems.map(item =>
          item.id === productInfo.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...productInfo, quantity: 1 }];
      }
    });

    console.log("Product added to cart", productInfo);
  };

  const incrementQuantity = (productId) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement quantity of a cart item
  const decrementQuantity = (productId) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Effect to log cartItems whenever it changes
  useEffect(() => {
    console.log("Cart Items updated:", cartItems);
  }, [cartItems]);

  // Context value to provide to consumers
  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
