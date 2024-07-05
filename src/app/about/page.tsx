import React from "react";
import Header from "../components/Header";
import slid1 from "@/assets/images/slid-2.jpg";
import Image from "next/image";
import Footer from "../components/Footer";
function page() {
  return (
    <div>
     
      <section>
        <div className="parallax"></div>

        <div className=" mt-16 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-center mb-36">
            <div className="">
              <Image src={slid1} alt="" />
            </div>
            <div className="">
              <h1 className="text-3xl text-orange-500 mb-5">About us</h1>
              <p className="text-gary-700 text-sm leading-7">
                Veeba is one of the leading Condiments & Sauce company in India.
                Our strong focus on Quality, Innovation and ‘Better for You’
                products have helped us stand out in a very cluttered retail
                market. With a Pan India distribution network reaching both
                General Trade and Modern trade shops we offer our consumers the
                freshest and the most authentic flavours in the comfort of their
                homes. Extreme focus is put on procuring the finest and most
                authentic ingredients from across the globe and then
                manufactured in a world class FSSC22000 certified manufacturing
                facility. We are a very proud Indian company, manufacturing
                world class food products in India. Veeba started off as B2B
                Sauce & Condiments company and our client list includes some of
                the biggest Global names in Quick Service Restaurants & Coffee
                industry. Needless to say that our plant passes their stringent
                quality tests and audits. We have won numerous awards from our
                esteemed clients for being a quality focused and a highly
                innovative business partner. We are very proud of the fact that
                with our large distribution network we can offer world class
                products to small restaurants, bakeries and canteens across the
                length and the breadth of the country enabling them to give
                their consumers a large variety of best quality Sandwiches,
                Pizzas, Pastas, Shakes and many other delicious menu offerings.
                Tasty and High Quality Food is the Centre of our World and it is
                our endeavour to make your ‘Life Taste Better’ one bite at a
                time!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-center">
           
            <div className="">
              <h1 className="text-3xl text-orange-500 mb-5">Our Philosophy</h1>
              <p className="text-gary-700 text-sm leading-7">
                Veeba is one of the leading Condiments & Sauce company in India.
                Our strong focus on Quality, Innovation and ‘Better for You’
                products have helped us stand out in a very cluttered retail
                market. With a Pan India distribution network reaching both
                General Trade and Modern trade shops we offer our consumers the
                freshest and the most authentic flavours in the comfort of their
                homes. Extreme focus is put on procuring the finest and most
                authentic ingredients from across the globe and then
                manufactured in a world class FSSC22000 certified manufacturing
                facility. We are a very proud Indian company, manufacturing
                world class food products in India. Veeba started off as B2B
                Sauce & Condiments company and our client list includes some of
                the biggest Global names in Quick Service Restaurants & Coffee
                industry. Needless to say that our plant passes their stringent
                quality tests and audits. We have won numerous awards from our
                esteemed clients for being a quality focused and a highly
                innovative business partner. We are very proud of the fact that
                with our large distribution network we can offer world class
                products to small restaurants, bakeries and canteens across the
                length and the breadth of the country enabling them to give
                their consumers a large variety of best quality Sandwiches,
                Pizzas, Pastas, Shakes and many other delicious menu offerings.
                Tasty and High Quality Food is the Centre of our World and it is
                our endeavour to make your ‘Life Taste Better’ one bite at a
                time!
              </p>
            </div>
            <div className="">
              <Image src={slid1} alt="" />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default page;
