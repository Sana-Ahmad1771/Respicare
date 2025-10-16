"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaAward } from "react-icons/fa";

export default function RespiratoryDiagnostics() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* ✅ Container aligned to header/footer */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* === Left Content === */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-block bg-primary/15 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">
            Our Specialties
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black-1 leading-tight mb-6">
            Respiratory Diagnostics
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            When breathing is compromised, quality of life diminishes. Our
            spirometry, complete PFT, and CPET testing solutions help classify
            pathophysiology and deliver vital insights for accurate diagnosis.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm sm:text-base">
            {[
              "Accurate Spirometry Testing",
              "Advanced Pulmonary Function Tests",
              "CPET Equipment Integration",
              "Reliable Clinical Insights",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center lg:justify-start gap-2 text-primary font-medium"
              >
                <FaCheckCircle className="flex-shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <button className="inline-block cursor-pointer bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-secondary transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* === Right Image Section === */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
            {/* Main Image */}
            <div className="relative z-30 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/about-img.jpg"
                alt="Respiratory Diagnostics"
                width={600}
                height={500}
                className="object-cover w-full h-auto rounded-2xl"
                priority
              />
            </div>
            {/* Background Accent */}
            <div className="absolute z-10 -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-[60%] h-[60%] bg-primary/90 rounded-tr-2xl rounded-bl-3xl shadow-lg hidden sm:block"></div>

            {/* Overlay Info Card */}
            <div className="absolute z-30 bottom-4 sm:bottom-6 left-4 sm:left-6 bg-primary text-white p-4 sm:p-5 rounded-xl shadow-lg max-w-[90%] sm:max-w-sm flex items-start gap-3">
              <FaAward className="text-2xl sm:text-3xl mt-1 flex-shrink-0" />
              <p className="text-xs sm:text-sm md:text-base leading-snug">
                Over 15 years of innovation in respiratory diagnostics — trusted
                by medical professionals worldwide for accuracy and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Right Gradient Accent */}
      <div className="absolute z-10 right-0 bottom-0 hidden md:block h-full bg-gradient-to-l from-primary/30 to-transparent w-[300px] sm:w-[450px] lg:w-[680px]"></div>
    </section>
  );
}
