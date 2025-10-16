"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaAward } from "react-icons/fa";

export default function Ventilation() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white">
      {/* Container with consistent alignment */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Image Section */}
        <div className="relative order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
            
            {/* Image Card */}
            <div className="relative z-30 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/ventilation.jpg"
                alt="Ventilation System"
                width={600}
                height={500}
                className="object-cover w-full h-auto rounded-2xl"
                priority
              />
            </div>

            {/* Background Accent */}
            <div className="absolute z-10 -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-[60%] h-[60%] bg-primary/90 rounded-tl-2xl rounded-br-3xl shadow-lg hidden sm:block"></div>

            {/* Overlay Card */}
            <div className="absolute z-30 bottom-4 sm:bottom-6 right-4 sm:right-6 bg-primary text-white p-4 sm:p-5 rounded-xl shadow-lg max-w-[90%] sm:max-w-sm flex items-start gap-3">
              <FaAward className="text-2xl sm:text-3xl mt-1 flex-shrink-0" />
              <p className="text-xs sm:text-sm md:text-base leading-snug">
                With 70 years of expertise, RespiCare ventilation systems ensure
                precision, reliability, and innovation in every breath.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="order-2 text-center lg:text-left">
          <div className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">
            Our Expertise
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0A1635] leading-tight mb-6">
            Ventilation
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            The RespiCare Ventilation brings a 70-year history of clinical
            experience, leadership, and expertise. Our diverse portfolio helps
            advance healthcare through every stage of life with integrated,
            industry-leading ventilation solutions including the BellaVista
            family, Fabius-R family, and 3100 HFOV.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm sm:text-base">
            <li className="flex items-center justify-center lg:justify-start gap-2 text-primary font-medium">
              <FaCheckCircle className="text-primary flex-shrink-0" />
              Innovative Ventilation Systems
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2 text-primary font-medium">
              <FaCheckCircle className="text-primary flex-shrink-0" />
              Patient-Centric Design
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2 text-primary font-medium">
              <FaCheckCircle className="text-primary flex-shrink-0" />
              Trusted Clinical Performance
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2 text-primary font-medium">
              <FaCheckCircle className="text-primary flex-shrink-0" />
              Proven 70-Year Legacy
            </li>
          </ul>

          <button className="inline-block cursor-pointer bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-secondary transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
