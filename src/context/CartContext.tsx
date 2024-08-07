"use client"; // Ensure this is at the top for Next.js

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo, useEffect } from 'react';
import Cookies from 'js-cookie';

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

  useEffect(() => {
    // Load cart from cookies on component mount
    const savedCart = Cookies.get('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to cookies whenever it changes
    Cookies.set('cart', JSON.stringify(cart), { expires: 7 });
  }, [cart]);

  const addToCart = useCallback((product: Product, quantityToAdd: number) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item._id === product._id);
      if (existingItemIndex > -1) {
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: quantityToAdd }];
      }
    });
   // Save cart to cookies explicitly
   Cookies.set('cart', JSON.stringify(cart), { expires: 7 });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const getTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  }, []);

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
