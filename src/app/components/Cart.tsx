import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface Product {
  _id: string;
  name: string;
  price: number;
  images?: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, isOpen, onClose, onRemove }) => {
  if (!isOpen) return null;

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div
      className="fixed inset-0 flex z-[1050]"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="relative flex-1 flex items-start justify-end">
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                      onClick={onClose}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flow-root">
                    <ul
                      role="list"
                      className="-my-6 divide-y divide-gray-200"
                    >
                      {cart.map((item) => (
  <li key={item._id} className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
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

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{item.name}</a>
          </h3>
          <p className="ml-4">₹ {item.price}</p>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">
          Qty {item.quantity}
        </p>

        <div className="flex">
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => onRemove(item._id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6 z-10">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>₹ {getTotalPrice()}</p>
                </div>
                <div className="mt-6">
                  <Link
                  href="checkout"
                   
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={onClose}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
