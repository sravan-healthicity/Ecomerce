import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Otp from './components/Otp';
import Password from './components/Password';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products.js';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/password" element={<Password />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
