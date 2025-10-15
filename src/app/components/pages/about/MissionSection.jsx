"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function MissionSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content Section */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">
            About Company
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0A1635] leading-tight mb-6">
            Our <span className="text-primary">Mission</span>
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

        {/* Right Image Section */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
            {/* Image Card */}
            <div className="relative z-30 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/service-02.jpg"
                alt="Our Mission - Respicare"
                width={600}
                height={500}
                className="object-cover w-full h-auto rounded-2xl"
                priority
              />
            </div>

            {/* Background Accent Shapes */}
            <div className="absolute z-10 -top-4 -left-4 w-[60%] h-[60%] bg-primary/90 rounded-tl-2xl rounded-br-3xl shadow-lg hidden sm:block"></div>
            <div className="absolute z-10 -bottom-4 -right-4 w-[60%] h-[60%] bg-primary/90 rounded-br-2xl shadow-lg hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
