import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import { Link } from "react-router-dom"; 


const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(response => {
      dispatch(setProducts(response.data));
    });
  }, [dispatch]);

  const handleAddToCart = (product) => {
    console.log(product)
    dispatch(addToCart(product));

  };

  const categorizedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(categorizedProducts).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {categorizedProducts[category].map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <Link to="/checkout" onClick= {()=> handleAddToCart(product)}>Add to Cart</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
