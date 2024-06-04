import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const totalAmount = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
      <h3>Total Amount: ${totalAmount}</h3>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
