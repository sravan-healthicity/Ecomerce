import React, { createContext, useState, useEffect } from 'react';

// Create a context for the user
const UserContext = createContext();

const UserProvider = ({ children }) => {
    // Initialize user state from local storage, or start with null
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Generate a 4-digit OTP
    const generateOtp = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    // Function to login user and save details in local storage
    const loginUser = (email) => {
        const otp = generateOtp();
        const userWithOtp = { email, otp, isLoggedIn: false };
        localStorage.setItem('user', JSON.stringify(userWithOtp));
        setUser(userWithOtp);
        return otp;
    };

    // Function to verify OTP
    const verifyOtp = (inputOtp) => {
        if (user && user.otp === inputOtp) {
            const updatedUser = { ...user, otp: null };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            return true;
        }
        return false;
    };

    // Function to verify password and log the user in
    const verifyPassword = (inputPassword) => {
        if (user && user.password === inputPassword) {
            const updatedUser = { ...user, isLoggedIn: true };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            return true;
        }
        return false;
    };

    const logoutUser = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    // Function to set password
    const setPassword = (password) => {
        if (user) {
            const updatedUser = { ...user, isLoggedIn: true };
            console.log(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            return true;
        }
    };




    return (
        <UserContext.Provider value={{ user, loginUser, verifyOtp, verifyPassword, setPassword, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
