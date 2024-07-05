"use client"
import Image from 'next/image'
import { useState } from 'react'
import tom from '@/assets/images/sanjeev3.jpg'

function Page() {
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImages, setProductImages] = useState<File[]>([])
    const [productCategory, setProductCategory] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
  
    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage('')
    
        if (productImages.length !== 4) {
          setMessage('Please select exactly 4 images');
          setIsLoading(false);
          return;
        }
      
        try {
          const base64Images = await Promise.all(productImages.map(convertToBase64));
          
          const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: productName,
              description: productDescription,
              price: parseFloat(productPrice),
              images: base64Images,
              category: productCategory,
            }),
          });
    
          if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
          }
      
          const data = await response.json();
      
          setMessage('Product added successfully! Images saved on server.');
          // Reset form
          setProductName('')
          setProductDescription('')
          setProductPrice('')
          setProductImages([])
          setProductCategory('')
        } catch (error) {
          console.error('Error:', error);
          setMessage('An unexpected error occurred. Please check the console for details.');
        } finally {
          setIsLoading(false);
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setProductImages(Array.from(e.target.files));
      }
    }
  
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-orange-500 text-white flex flex-col">
          <div className="p-4 text-start text-white font-bold text-2xl">
            <span className="block">Logo</span>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-purple-700">
              Dashboard
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-purple-700">
              Add product
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-purple-700">
              Projects
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-purple-700">
              Calendar
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-purple-700">
              Documents
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-purple-700">
              Reports
            </a>
          </nav>
          <div className="p-4 border-t border-white">
            <a href="#" className="block text-sm font-medium hover:underline">
              Settings
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white shadow">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <span className="sr-only">Notifications</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.5 14.5V11a6.001 6.001 0 00-5-5.917V4a3 3 0 10-6 0v1.083A6.001 6.001 0 002 11v3.5c0 .538-.214 1.055-.595 1.437L0 17h5m10 0v1a3 3 0 01-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>
              <div className="flex items-center">
                <span className="mr-2">Tom Cook</span>
                <Image
                  className="w-8 h-8 rounded-full"
                  src={tom}
                  alt="User Avatar"
                />
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
            {message && (
              <div className={`mb-4 p-2 ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded`}>
                {message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="mb-4">
                <label htmlFor="productName" className="block mb-2 font-medium">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="productDescription" className="block mb-2 font-medium">Description</label>
                <textarea
                  id="productDescription"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="productPrice" className="block mb-2 font-medium">Price</label>
                <input
                  type="number"
                  id="productPrice"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="productImages" className="block mb-2 font-medium">Images (Select 4)</label>
                <input
                  type="file"
                  id="productImages"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="productCategory" className="block mb-2 font-medium">Category</label>
                <input
                  type="text"
                  id="productCategory"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? 'Adding...' : 'Add Product'}
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    )
}

export default Page
