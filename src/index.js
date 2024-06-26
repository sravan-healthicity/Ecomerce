import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <UserProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </UserProvider>,
  document.getElementById('root')
);