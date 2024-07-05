"use client"
// src/pages/cart.tsx
import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push('/'); // Redirect to the home page or products page
  };

  return (
    <div className="container mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-6">My Cart:</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-3/4">
            {cart.map((item) => (
              <div key={item._id} className="flex flex-col  md:flex-row items-center border-b py-4">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                   {item.images && item.images.length > 0 ? (
        <Image
          src={item.images[0]}  // Use the first image from the array
          alt={item.name}
          width={96}  // Increased from 24 to 96 for better quality
          height={96} // Increased from 24 to 96 for better quality
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
          No Image
        </div>
      )}
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <h2 className="font-bold">{item.name}</h2>
                  <p>₹ {item.price}</p>
                </div>
                <div className="w-full md:w-1/4 flex items-center mb-4 md:mb-0">
                  <button onClick={() => updateQuantity(item._id, Math.max(item.quantity - 1, 1))}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                </div>
                <div className="w-full md:w-1/4">
                  <button onClick={() => removeFromCart(item._id)} className="text-red-500">Remove</button>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
              <button
                className="bg-orange-500 text-white py-2 px-4 hover:bg-transparent hover:text-orange-500 border border-orange-500 transition duration-300"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="bg-orange-500 text-white py-2 px-4 hover:bg-transparent hover:text-orange-500 border border-orange-500 transition duration-300"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="lg:w-1/4 p-6 bg-orange-100 rounded-lg">
            <div className="flex items-center mb-4">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded"
                placeholder="Discount code or gift card"
              />
              <button className="ml-2 bg-orange-500 text-white p-2 rounded">Apply</button>
            </div>
            <div className="border-t flex justify-between border-gray-300 py-4">
              <p className="font-bold text-lg mb-2">Subtotal</p>
              <p className="text-xl font-bold">₹ {getTotal()}</p>
            </div>
            <div className="border-t border-gray-300 py-4">
              <p className="text-xl font-bold">₹ {getTotal()}</p>
            </div>
            <Link href="/checkout" className="w-full bg-orange-500 text-white p-3 rounded mt-4">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
