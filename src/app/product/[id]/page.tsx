"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import { CartProvider, useCart } from "@/context/CartContext";
import Cart from "@/app/components/Cart";
import { useParams } from 'next/navigation';

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
}

function ProductDetailPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isZoomed, setIsZoomed] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { addToCart, cart, removeFromCart, getTotalQuantity  } = useCart();
 
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);
  useEffect(() => {
    if (product) {
      const cartItem = cart.find(item => item._id === product._id);
      if (cartItem) {
        setQuantity(cartItem.quantity);
      }
    }
  }, [cart, product]);


  const fetchProduct = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/products/${id}`, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data: Product = await response.json();
      setProduct(data);
      setSelectedImage(data.images[0]);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      const currentQuantityInCart = cart.find(item => item._id === product._id)?.quantity || 0;
      const quantityToAdd = quantity - currentQuantityInCart;
      if (quantityToAdd > 0) {
        addToCart(product, quantityToAdd);
      }
      setQuantity(1);  // Keep the quantity as is after adding to cart
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-6 mt-40">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 relative">
            <div className="relative w-full h-96 border mb-4">
              <Image
                src={selectedImage}
                alt="Selected Product Image"
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className={`transition-transform transform ${isZoomed ? "scale-150" : ""}`}
              />
              <div
                className="absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer"
                onClick={handleZoomToggle}
              >
                <FaSearchPlus size={24} />
              </div>
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 border p-3 cursor-pointer ${selectedImage === image ? "border-orange-500" : ""}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Product Thumbnail ${index}`}
                    width={96}
                    height={96}
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 ml-0 md:ml-6 mt-6 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl mb-4">₹ {product.price.toFixed(2)}</p>
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p>{product.description}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside">
                <li>Vegan</li>
                <li>No added colours</li>
                <li>No Artificial Flavours</li>
                <li>Trans fat free</li>
              </ul>
            </div>
            <div className="mt-6 flex items-center">
              <label className="mr-4">Quantity:</label>
              <div className="flex items-center">
                <button className="border px-2" onClick={handleDecrement}>
                  -
                </button>
                <span className="px-2">{quantity}</span>
                <button className="border px-2" onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button
                className="bg-orange-500 text-white px-4 py-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <span>Total Items in Cart: {getTotalQuantity()}</span>
              <button
                className="bg-orange-500 text-white px-4 py-2"
                onClick={handleOpenCheckout}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <div key={index} className="w-48">
                <Image
                  src={image}
                  alt="Related Product"
                  width={192}
                  height={192}
                  objectFit="cover"
                  loading="lazy"
                />
                <div className="mt-2 text-center">
                  <p className="font-semibold">{product.name}</p>
                  <p>₹ {product.price.toFixed(2)}</p>
                  <button className="bg-orange-500 text-white px-4 py-2 mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cart
        cart={cart}
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

export default function WrappedProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <CartProvider>
      <ProductDetailPage params={params} />
    </CartProvider>
  );
}