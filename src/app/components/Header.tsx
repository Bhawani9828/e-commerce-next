"use client";

import {
  BeakerIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useCart } from "@/context/CartContext"; 
import { useRouter } from 'next/navigation';
function Header() {
  let [isopen, setIsopen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getTotalQuantity } = useCart(); 
  const totalQuantity = getTotalQuantity(); 
  const toggleDropdown = () => {
    setIsOpen1(!isOpen1);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen1(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="header fixed top-0 left-0 w-full z-[1027]">
        <div className="top_bannnar bg-orange-500 text-center p-2">
          <span className="text-white text-center text-md">
            Free Shipping above ₹299 | Get 100G Mayonnaise Free on order above
            ₹750
          </span>
        </div>
        <div className="shadow-md w-full">
          <div className="md:px-10 px-7 py-4 md:flex justify-between items-center bg-white">
            {/* logo */}
            <div className="flex text-2xl items-center gap-2 cursor-pointer">
              <BeakerIcon className="w-7 h-7 text-orange-500" />
              <Link href="/" className="font-bold text-orange-500">
                Bhawani
              </Link>
            </div>

            {/* toggle icon */}
            <div
              onClick={() => setIsopen(!isopen)}
              className="w-7 h-7 absolute right-8 top-20 cursor-pointer md:hidden"
            >
              {isopen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
            </div>

            {/* links */}
            <ul
              className={`md:flex pl-9 md:pl-0 md:static  md:items-center bg-white w-full md:w-auto left-0 transition-all md:z-auto z-[-1] duration-500 ease-in-out md:pb-0 pb-12 absolute ${
                isopen ? "top-32" : "top-[-490px]"
              }`}
            >
              <li className="relative my-7 md:my-0 md:ml-8 group">
                <div className="flex items-center cursor-pointer">
                  <span className="text-orange-500">About us</span>
                  <FaChevronDown className="group-hover:hidden ml-3 text-orange-500 w-7 h-3" />
                  <FaChevronUp className="hidden group-hover:block ml-3 text-orange-500 w-7 h-3" />
                </div>
                <ul className="hidden group-hover:block absolute z-10 bg-white shadow-lg p-2 min-w-max">
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="/about">About the Company</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#"> Quality Policy</Link>
                  </li>
                </ul>
              </li>

              <li className="relative my-7 md:my-0 md:ml-8 group">
                <div className="flex items-center cursor-pointer">
                  <span className="text-orange-500">Shop Now</span>
                  <FaChevronDown className="group-hover:hidden ml-3 text-orange-500 w-7 h-3" />
                  <FaChevronUp className="hidden group-hover:block ml-3 text-orange-500 w-7 h-3" />
                </div>
                <ul className="hidden group-hover:block absolute z-10 bg-white shadow-lg p-2 min-w-max">
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">All</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Woktok Sauces & Chutneys</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Mayonnaise</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Sandwich Spread</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Pasta & Pizza Sauces</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Sauces</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Dressings</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Dips</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Peanut Spreads</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Sweet Toppings</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Ketchup</Link>
                  </li>
                  <li className="block p-2 text-orange-500 hover:text-black">
                    <Link href="#">Chutneys</Link>
                  </li>
                </ul>
              </li>

              <li className="my-7 md:my-0 md:ml-8">
                <Link href="/recipe" className="text-orange-500">
                  Recipes
                </Link>
              </li>
              <li className="my-7 md:my-0 md:ml-8">
                <Link href="/contact" className="text-orange-500">
                  Contact
                </Link>
              </li>
              <li className="my-7 md:my-0 md:ml-8">
                <Link href="/trackorder" className="text-orange-500">
                  Track Order
                </Link>
              </li>
              <li className="my-7 md:my-0 md:ml-8">
                <Link href="" className="text-orange-500">
                  International
                </Link>
              </li>

              <a
                href="#_"
                className="relative inline-flex items-center md:ml-8 justify-center px-5 py-2 text-lg font-medium tracking-tighter text-white bg-orange-500 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-orange-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-orange-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-orange-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Saga Food Service
                </span>
              </a>
            </ul>
            <div className="hidden items-center md:flex">
              <div className="relative mr-2">
                <input
                  className="block drop-shadow-lg rounded-full appearance-none bg-white py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none border-orange-500 sm:text-sm sm:leading-6"
                  placeholder="Find anything..."
                  type="text"
                  aria-autocomplete="list"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              <Link className="absolute right-4 top-4" href={`/search?query=${searchQuery}`}>
  <button  className="" type="button" onClick={handleSearch}>
    <svg
      className="pointer-events-none h-6 w-6 font-bold fill-orange-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.65 15.293a8.125 8.125 0 111.414-1.414l4.907 4.907a1 1 0 01-1.414 1.414l-4.907-4.907zM16.5 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
      />
    </svg>
  </button>
</Link>
             
              </div>
              {/* <Link
                href="#"
                className="border bg-orange-500 p-3 mx-2 rounded-full"
              >
                <UserIcon className="h-5 w-5 fill-white" />
              </Link> */}
              <div className="relative inline-block text-left">
                <div>
                  <UserIcon
                    className="w-7 h-7 m-2 text-orange-500 cursor-pointer"
                    type="button"
                    id="menu-button"
                    aria-expanded={isOpen1}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  />
                </div>
                {isOpen1 && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <Link
                        href="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-400"
                      >
                        Signup
                      </Link>
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-400"
                      >
                        Login
                      </Link>
                      <Link
                        href="/profile/id"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-400"
                      >
                        Profile
                      </Link>
                      <form role="none">
                        <button
                          type="submit"
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-3"
                        >
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/cart" className="relative mx-2">
                <div className="absolute bottom-5 right-1/2 translate-x-1/2 bg-orange-500 rounded-full text-white px-2 py-1 text-xs">
                  {totalQuantity} {/* Display total quantity */}
                </div>
                <ShoppingBagIcon className="h-8 w-8 fill-orange-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
