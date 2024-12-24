// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product, quantity) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => 
                    item.id === product.id 
                        ? {...item, quantity: item.quantity + quantity}
                        : item
                );
            }
            return [...prev, {...product, quantity}];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };
  
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prev => 
            prev.map(item => 
                item.id === productId ? {...item, quantity: newQuantity} : item
            )
        );
    };
  
    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            updateQuantity 
        }}>
            {children}
        </CartContext.Provider>
    );
}