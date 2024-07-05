import React from "react";
import { MapPinIcon, PhoneIcon, } from "@heroicons/react/24/solid";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter,FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="footer md:mt-36 md:px-10 p-4 m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="p-4">
            <div className="mb-3">
              <h1 className="text-4xl text-orange-500 mb-2">Blockverse</h1>
              <p className="text-gray-400 text-sm">
                Cremica Food Industries Limited
              </p>
            </div>
            <span className="text-black font-semibold mb-3">Location</span>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/6">
                <MapPinIcon className="w-7 h-7 text-orange-500" />
              </div>
              <div className="w-full">
                <span className="text-gray-500">
                  Plot- 202, Okhla Industrial Estate Area Phase 3, Jaipur,
                  302021, India
                </span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/6">
                <PhoneIcon className="w-7 h-7 text-orange-500" />
              </div>
              <div className="w-full">
                <span className="text-gray-500">
                  1800-208-2254 customercare@blockverse.com
                </span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h1 className="text-3xl mb-3 font-semibold">Buy Now</h1>
            <ul className="mb-5">
              <li className="mb-3">Chataka</li>
              <li className="mb-3">Tomato Ketchup</li>
              <li className="mb-3">Opera Crisps</li>
              <li className="mb-3">Mayonnaise</li>
              <li className="mb-3">Syrups</li>
            </ul>
          </div>
          <div className="p-4">
            <h1 className="text-3xl mb-3 font-semibold">Quick Links</h1>
            <ul className="mb-5">
              <li className="mb-3">About</li>
              <li className="mb-3">Products</li>
              <li className="mb-3">Recipes</li>
              <li className="mb-3">Media</li>
              <li className="mb-3">Blog</li>
              <li className="mb-3">Contact Us</li>
              <li className="mb-3">Product Catalogue</li>
              <li className="mb-3">Bonheur Catalogue</li>
            </ul>
          </div>
          <div className="p-4">
            <h1 className="text-3xl mb-2 font-semibold">
              Get The Latest Deals
            </h1>
            <span className="mb-3 text-gray-400 font-sm">
              And Stay Updated With Cremicas Innovations
            </span>
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
  <input
    className="h-12 min-w-full sm:min-w-[12rem] rounded-lg border-orange-500 indent-4 text-orange-900 shadow-lg focus:outline-none focus:ring focus:ring-orange-600"
    type="text"
    placeholder="Designation"
  />
  <button className="h-12 min-w-full sm:min-w-[8rem] rounded-lg border-2 border-orange-600 bg-orange-500 text-emerald-50 shadow-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-600">
    Submit
  </button>
</div>
            <div className="my-4">
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <ul className="flex mb-5">
                    <li className="mr-3 rounded-full p-2 flex justify-center items-center bg-orange-500 hover:bg-orange-400"><button className="text-white"><FaFacebookF /></button></li>
                    <li className="mr-3 rounded-full p-2 flex justify-center items-center bg-orange-500 hover:bg-orange-400"><button className="text-white"><FaTwitter /></button></li>
                    <li className="mr-3 rounded-full p-2 flex justify-center items-center bg-orange-500 hover:bg-orange-400"><button className="text-white"><FaInstagram  /></button></li>
                </ul>

                <p className="text-sm text-gray-500">Shipping & Return | Privacy Policy | Terms & Condition</p>
            </div>
          </div>
        </div>

      </footer>
      <div className="bg-orange-500 text-center text-sm md:text-lg w-full text-white flex items-center p-2 justify-center">Copyright © 2023 Blockverse Food Industries Limited. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
