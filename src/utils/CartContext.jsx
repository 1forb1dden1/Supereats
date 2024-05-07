import React, { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Custom Hook for useCart
export function useCart() {
    return useContext(CartContext);
}

// Provider component that wraps your app and provides the cart context
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        console.log(item);
        setCartItems(prevItems => {
            const itemExists = prevItems.find(i => i.id === item.id);
            if (itemExists) {
                return prevItems.map(i => 
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1, imageUri: item.imageuri }];
            }
        });
    }

    function removeFromCart(itemId) {
        setCartItems(prevItems => {
            const item = prevItems.find(i => i.id === itemId);
            if (!item) {
                return prevItems;
            }
            
            if (item.quantity > 1) {
                return prevItems.map(i => 
                    i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                );
            } else {
                return prevItems.filter(i => i.id !== itemId);
            }
        });
    }
    
    

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
