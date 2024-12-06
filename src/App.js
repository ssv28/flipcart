import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import ProductDetails from './Components/Productdetails';
import './App.css'
import Payment from './Components/Payment';



const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
  </div>
);

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  // Fetch products from API
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false); // Stop loader after data is fetched
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false); // Stop loader even if there is an error
      });

    // Load the cart from localStorage when the app is loaded
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Add product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Save to localStorage
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Save to localStorage
  };

  // Handle Buy Now functionality
  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${cart.length} items.`);
  };

  return (
    <Router>
      <Header cartLength={cart.length} />
      <Routes>
        <Route
          path="/"
          element={loading ? <Loader /> : <ProductCard products={products} addToCart={addToCart} />}
        />
        <Route path="/productDetails" element={<ProductDetails addToCart={addToCart} />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} handleBuyNow={handleBuyNow} />} />
      </Routes>
    </Router>
  );
}

export default App;

