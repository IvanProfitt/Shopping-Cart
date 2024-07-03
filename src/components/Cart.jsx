import React, { useContext } from 'react';
import NavBar from './NavBar';
import { CartContext } from './CartLogic';

function Cart() {
  const { cartItems, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  return (
    <>
      <NavBar />
      <h1 style={{ marginTop: '60px' }}>CART</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img style={{ width: '50px' }} src={item.image} alt={item.title} />
          <button onClick={() => handleDecrement(item.id)}>-</button>
          <input type='text' value={item.quantity} readOnly />
          <button onClick={() => handleIncrement(item.id)}>+</button>
        </div>
      ))}
    </>
  );
}

export default Cart;
