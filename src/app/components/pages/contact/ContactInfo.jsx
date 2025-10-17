"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="relative w-full bg-primary/20 text-dark-2 py-20 sm:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
        {/* Section Header */}
        <div className="inline-block bg-primary/10 text-primary font-semibold px-6 py-2 rounded-full text-sm mb-6">
          Contact Information
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          Get in Touch With <span className="text-primary">Respicare</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-16 leading-relaxed">
          When breathing is compromised, quality of life diminishes. Our family
          of spirometry, complete PFT, and CPET testing products help to
          classify pathophysiology and offer valuable information for
          differential diagnoses.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
          {/* Card 1 */}
          <div className="group relative bg-white text-gray-800 rounded-2xl shadow-lg pt-16 pb-10 px-6 transition-transform duration-500 hover:-translate-y-2">
            {/* Floating Icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="relative flex items-center justify-center w-[90px] h-[90px] rounded-2xl border bg-white text-primary text-3xl shadow-md overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:rounded-md before:bg-primary before:scale-0 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.62,0.21,0.45,1.52)] group-hover:before:scale-100 group-hover:text-white">
                <FaPhoneAlt className="z-10 transition-colors duration-300" />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 mt-4">Phone</h3>
            <p className="text-gray-600 mb-1">(12+) 123 3456</p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white text-gray-800 rounded-2xl shadow-lg pt-16 pb-10 px-6 transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="relative flex items-center justify-center w-[90px] h-[90px] rounded-2xl border bg-white text-primary text-3xl shadow-md overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:rounded-md before:bg-primary before:scale-0 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.62,0.21,0.45,1.52)] group-hover:before:scale-100 group-hover:text-white">
                <FaEnvelope className="z-10 transition-colors duration-300" />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 mt-4">Email</h3>
            <p className="text-gray-600 mb-1">support@yoursite.com</p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white text-gray-800 rounded-2xl shadow-lg pt-16 pb-10 px-6 transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="relative flex items-center justify-center w-[90px] h-[90px] border rounded-2xl bg-white text-primary text-3xl shadow-md overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:rounded-md before:bg-primary before:scale-0 before:transition-all before:duration-500 before:ease-[cubic-bezier(0.62,0.21,0.45,1.52)] group-hover:before:scale-100 group-hover:text-white">
                <FaMapMarkerAlt className="z-10 transition-colors duration-300" />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 mt-4">Location</h3>
            <p className="text-gray-600 mb-1">
              121th Haidezign St, Melbourne, AUS 12313
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
