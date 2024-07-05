"use client"
import React from 'react'
import { useCart } from '@/context/CartContext';
function Page() {
  const { cart, getTotal } = useCart();
  return (
    <div>
        <div className="max-w-7xl mx-auto mt-40 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                Email me with news and offers
              </label>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country/Region
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              >
                <option>India</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                Apartment, suite, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>Rajasthan</option>
                </select>
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  PIN code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </form>
        </div>
        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="border p-4 rounded-md space-y-4">
            <div className="flex justify-between items-center">
              <span>VEEBA SWEET ONION SAUCE (350g)</span>
              <span>₹155.00</span>
            </div>
            <div>
              <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
                Discount code
              </label>
              <div className="flex mt-1">
                <input
                  type="text"
                  id="discount-code"
                  name="discount-code"
                  className="block w-full border border-gray-300 rounded-l-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                />
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-md border border-l-0 border-gray-300 hover:bg-gray-400"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>₹155.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span>Enter shipping address</span>
              </div>
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>₹155.00</span>
              </div>
            </div>
          </div>
        </div> */}
         <div className='p-6 '>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="border p-2 rounded-md space-y-4 bg-orange-100 ">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>₹{item.price} x {item.quantity}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>₹{getTotal()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span>Enter shipping address</span>
              </div>
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>₹{getTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page