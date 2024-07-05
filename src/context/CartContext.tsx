// src/context/CartContext.tsx
"use client"; // Ensure this is at the top for Next.js

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  images?: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  getTotal: () => number;
  getTotalQuantity: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, quantityToAdd: number) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item._id === product._id);
      if (existingItemIndex > -1) {
        // Item already exists, update its quantity
        return prevCart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        // Item doesn't exist, add it to the cart
        return [...prevCart, { ...product, quantity: quantityToAdd }];
      }
    });
  },[]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  },[]);

  const getTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  },[]);

 const getTotalQuantity = useCallback(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const contextValue = useMemo(() => ({
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotal,
    getTotalQuantity,
    clearCart
  }), [cart, addToCart, updateQuantity, removeFromCart, getTotal, getTotalQuantity, clearCart]);

  return (
    <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


