import React, { createContext, useState, useEffect } from 'react';
import Cart from '../components/Cart';

// Create a context for the cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [confirmation, setConfirmation] = useState({ show: false, product: null });

    const [notification, setNotification] = useState('');

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const productIndex = updatedCart.findIndex(item => item.id === product.id);

        if (productIndex > -1) {
            updatedCart[productIndex].quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setNotification(`${product.title} added to cart`);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const getTotalItems = () => {
        return cart.length;
    };

    const updateQuantity = (productId, quantity) => {
        const updatedCart = [...cart];
        const productIndex = updatedCart.findIndex(item => item.id === productId);

        if (productIndex > -1) {
            updatedCart[productIndex].quantity = quantity;
            if (quantity <= 0) {
                updatedCart.splice(productIndex, 1);
            }
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    // Function to show confirmation modal
    const showConfirmation = (product) => {
        setConfirmation({ show: true, product });
    };

    // Function to hide confirmation modal
    const hideConfirmation = () => {
        setConfirmation({ show: false, product: null });
    };

    // Function to confirm adding item to cart
    const confirmAddToCart = (product) => {
        addToCart(product);
        hideConfirmation();
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems, clearCart, getTotalItems, showConfirmation, hideConfirmation, confirmAddToCart, confirmation, updateQuantity, notification }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
