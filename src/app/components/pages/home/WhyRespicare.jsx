"use client";
import React from "react";
import { FaUserMd, FaHospital, FaPills, FaAmbulance } from "react-icons/fa";

export default function WhyRespicare() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-white py-12 sm:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">
            Why Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1635] leading-tight mb-6">
            Why <span className="text-primary">RespiCare</span>
          </h2>

          <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
            The RespiCare Ventilation brings a 70-year legacy of clinical
            innovation and expertise. We deliver trusted respiratory
            technologies that enhance care and comfort across every stage of
            life.
          </p>

          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            From advanced ICU ventilators to home-use therapy devices, we’re
            driving progress in respiratory healthcare.
          </p>

          <button className="inline-block cursor-pointer bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-secondary transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Right Side Cards */}
        <div className="relative z-30 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card Template */}
          <div className="bg-white rounded-tl-3xl shadow-md p-4 flex flex-col items-center text-center border border-gray-100 min-h-[220px]">
            <div className="w-14 h-14 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <FaUserMd className="text-primary text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#0A1635] mb-2">
              Advanced Ventilation
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Reliable solutions for ICU and homecare respiratory care.
            </p>
          </div>

          <div className="bg-white rounded-tr-3xl shadow-md p-4 flex flex-col items-center text-center border border-gray-100 min-h-[220px]">
            <div className="w-14 h-14 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <FaHospital className="text-primary text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#0A1635] mb-2">
              Respiratory Diagnostics
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Accurate PFT, CPET & spirometry tools for better diagnosis.
            </p>
          </div>

          <div className="bg-white rounded-bl-3xl shadow-md p-4 flex flex-col items-center text-center border border-gray-100 min-h-[220px]">
            <div className="w-14 h-14 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <FaPills className="text-primary text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#0A1635] mb-2">
              Home Therapy & Accessories
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Masks, tubing & portable respiratory support devices.
            </p>
          </div>

          <div className="bg-white rounded-br-3xl shadow-md p-4 flex flex-col items-center text-center border border-gray-100 min-h-[220px]">
            <div className="w-14 h-14 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <FaAmbulance className="text-primary text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#0A1635] mb-2">
              Monitoring & Support
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Continuous monitoring & advanced respiratory management.
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      {/* <div className="absolute left-0 bottom-0 hidden md:block h-full bg-gradient-to-r from-primary/30 to-transparent w-[300px] sm:w-[450px] lg:w-[600px]"></div> */}
      <div className="absolute z-10 right-0 bottom-0 hidden md:block h-full bg-gradient-to-l from-primary/30 to-transparent w-[300px] sm:w-[450px] lg:w-[680px]"></div>
    
    </section>
  );
}
