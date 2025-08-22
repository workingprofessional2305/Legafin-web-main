
import React from "react";
import backgroundImg from "../assets/gst-registration.jpg";
import { Link } from "react-router-dom";

const GSTRegistration = () => {
  return (
    <section
      className="w-full relative text-white px-6 py-12 rounded-lg overflow-hidden"
      style={{
        fontFamily: "Roboto Slab, serif",
      }}
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          filter: "blur(3px)",
          zIndex: 0,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 z-0" />

      {/* Content */}
      <div className="relative z-10 space-y-4 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
          Professional & Trustworthy {" "}
          <span className="text-blue-300">GST Registration</span> & Filing Made Easy
        </h1>

        {/* Subheading */}
        <p className="text-lg font-medium text-gray-100">
          Fast, accurate, and hassle-free with {" "}
          <span className="font-semibold">Legafin experts.</span>
        </p>

         {/* Highlights */}
        <div className="flex flex-col md:flex-row justify-center gap-4 text-sm md:text-base font-semibold mt-4">
          <span className="bg-white/20 px-3 py-1 rounded-lg">
            ✅ Timely registration  
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-lg">
             ✅ Error-free filing  
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-lg">
             ✅ 100% GST compliance 
          </span>
          {/* <span className="bg-white/20 px-3 py-1 rounded-lg">
             ✅ Zero Stress 
          </span> */}
        </div>

        {/* Description */}
        {/* <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-200">
          Get online assistance from India’s recommended Business Taxation Experts
          for hassle-free GST registration and filing mandatory GST returns annually.
        </p> */}

        {/* Offer */}
        <div>
          {/* <div className="flex justify-center">
          
<p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-xl font-lato text-blue-300 font-semibold mt-2">
  Complete GST Registration and Filing Assistance — Fast, Reliable & Hassle-Free!
</p> */}

          
          {/* <p className="text-sm text-gray-100">
            *Government fees extra. Complete process in{" "}
            <span className="font-bold">Same Day</span>.
          </p> */}
        </div>

        {/* <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-300">
          With our expert guidance, you can ensure timely registration, accurate
          filing, and compliance with GST laws, avoiding penalties and ensuring smooth business operations.
        </p> */}

        {/* CTA */}

        {/* <h3 className="text-blue-400 mt-1">Register for GST Now</h3>  */}

        <p className="text-lg font-medium text-gray-100">
          Ensure smooth business operations & avoid penalties .
        </p>
        
        <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 mt-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 inline-block">
            Get Started Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GSTRegistration;

