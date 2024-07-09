"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartProvider, useCart } from "@/context/CartContext";
import Cart from "@/app/components/Cart";
import { useSearchParams } from 'next/navigation';

interface Category {
  name: string;
  count: number;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
}

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [counts, setCounts] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { addToCart, cart, removeFromCart } = useCart();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch("/api/categories/");
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setError("Failed to load categories. Please try again later.");
    }
  }, []);

  const fetchProducts = useCallback(async () => {
    setIsProductsLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (selectedCategories.length) {
        params.append('categories', selectedCategories.join(','));
      }
      if (query.search) {
        params.append('search', query.search);
      }
      const response = await fetch(`/api/products/?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setCounts(new Array(data.length).fill(0));
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setIsProductsLoading(false);
    }
  }, [selectedCategories, query.search]);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      await fetchCategories();
      await fetchProducts();
      setIsLoading(false);
    };
    init();
  }, [fetchCategories, fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleIncrement = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index]++;
      return newCounts;
    });
  };

  const handleDecrement = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(newCounts[index] - 1, 0);
      return newCounts;
    });
  };

  const handleAddToCart = (product: Product, index: number) => {
    const quantity = counts[index];
    if (quantity === 0) return;

    addToCart(product, quantity);

    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = 0;
      return newCounts;
    });

    setIsCheckoutOpen(true);
  };

  

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <CartProvider>
 <div className="container-xxl mt-40 mx-auto px-4">
      <section className="md:mt-40 mt-16">
        <div className="flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 p-4">
            <h2 className="font-bold mb-4 text-2xl">Shop By Category</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.name} className="mb-4 font-semibold text-sm">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.name)}
                    className="mr-2"
                    onChange={() => handleCategoryChange(category.name)}
                  />
                  {category.name} ({category.count})
                </li>
              ))}
            </ul>
          </aside>
          <main className="w-full lg:w-3/4 p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h2 className="font-bold text-2xl">Products</h2>
              <select className="border p-2 mt-2 md:mt-0">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            {isProductsLoading ? (
              <div>Loading products...</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                {products.map((product, index) => (
                  <div
                    key={product._id}
                    className="border p-4 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    {product.images && product.images.length > 0 ? (
                      <Link href={`/product/${product._id}`}>
                        <Image
                          src={product.images[0]}  
                          alt={product.name}
                          width={192}
                          height={192}
                          loading="lazy"
                          className="m-auto object-cover mb-4"
                        />
                      </Link>
                    ) : (
                      <div className="w-48 h-48 bg-gray-200 flex items-center justify-center mb-4">
                        No Image
                      </div>
                    )}
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-gray-700">₹ {product.price}</p>
                    <div className="flex flex-col sm:flex-row items-center mt-4">
                      <button
                        className="bg-orange-500 hover:bg-orange-200 text-white px-4 py-2"
                        onClick={() => handleAddToCart(product, index)}
                      >
                        Add to cart
                      </button>
                      <div className="flex items-center mt-2 sm:mt-0 sm:ml-4">
                        <button
                          className="border px-2"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </button>
                        <span className="px-2">{counts[index]}</span>
                        <button
                          className="border px-2"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>

      <Cart
        cart={cart}
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        onRemove={removeFromCart}
      />
    </div>
    </CartProvider>
   
  );
};

export default Page;