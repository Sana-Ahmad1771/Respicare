"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function VisionSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Image Section */}
        <div className="relative order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
            {/* Image Card */}
            <div className="relative z-30 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/service-03.jpg"
                alt="Our Vision - Respicare"
                width={600}
                height={500}
                className="object-cover w-full h-auto rounded-2xl"
                priority
              />

              {/* Overlay Info Card
              <div className="absolute z-40 bottom-4 sm:bottom-6 left-4 sm:left-6 bg-primary text-white p-4 sm:p-5 rounded-xl shadow-xl max-w-[90%] sm:max-w-sm flex items-start gap-3">
                <FaCheckCircle className="text-white text-2xl sm:text-3xl mt-1 flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base leading-snug font-medium">
                  When breathing is compromised, quality of life diminishes. Our
                  spirometry and PFT solutions deliver clarity for accurate
                  diagnosis.
                </p>
              </div> */}
            </div>
            {/* Background Accent */}
            <div className="absolute z-10 -top-4 -right-4 w-[60%] h-[60%] bg-primary/90 rounded-tr-2xl rounded-bl-3xl shadow-lg hidden sm:block"></div>
            {/* Background Accent Shape */}
            <div className="absolute z-10 -bottom-4 -left-4 w-[60%] h-[60%] bg-primary/90 rounded-bl-2xl shadow-lg hidden sm:block"></div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="order-2 text-center lg:text-left">
          <div className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">
            About Company
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0A1635] leading-tight mb-6">
            Our <span className="text-primary">Vision</span>
          </h2>

          <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            When breathing is compromised, quality of life diminishes. Our
            family of spirometry, complete PFT, and CPET testing products help
            to classify pathophysiology and offer valuable information for
            differential diagnoses.
          </p>

          <button className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-secondary transition-all duration-300">
            Get Start
          </button>
        </div>
      </div>
    </section>
  );
}
