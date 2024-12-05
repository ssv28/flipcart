import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import ProductCard from './Components/productCard';
import ProductDetails from './Components/productDetails';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from API
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => setProducts(response.data.products))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Add product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Handle Buy Now functionality
  const handleBuyNow = () => {
    alert("Proceeding to checkout with " + cart.length + " items.");
  };

  return (
    <Router>
      <Header cartLength={cart.length} />
      <Routes>
        <Route path="/" element={<ProductCard products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} handleBuyNow={handleBuyNow} />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
