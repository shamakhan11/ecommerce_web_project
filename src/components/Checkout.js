import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const cart = useSelector(state => state.cart);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleCheckout = () => {
    console.log(cart)
    axios.post('http://localhost:5000/api/checkout', { user: userDetails, cart })
      .then(response => {
        console.log("testing", response)
        alert('Order placed successfully');
      })
      .catch(error => {
        console.error('There was an error placing the order!', error);
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
