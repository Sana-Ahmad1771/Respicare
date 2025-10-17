"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLungs,
  FaMicroscope,
  FaLaptopMedical,
  FaCogs,
  FaGlobe,
  FaHandshake,
  FaFlask,
  FaArrowRight,
} from "react-icons/fa";

const MegaMenu = ({ setIsMegaMenuOpen }) => {
  const [open, setOpen] = useState(false);

  const menuCategories = [
    {
      title: "Product Divisions",
      icon: FaLungs,
      description: "Advanced respiratory diagnostic solutions",
      items: [
        { name: "Spirometry", desc: "Accurate lung function testing systems", icon: FaMicroscope },
        { name: "PFT Systems", desc: "Comprehensive pulmonary testing devices", icon: FaLaptopMedical },
        { name: "CPET Equipment", desc: "Cardio-pulmonary exercise analyzers", icon: FaCogs },
      ],
    },
    {
      title: "Technology & Innovation",
      icon: FaFlask,
      description: "Driven by research and precision engineering",
      items: [
        { name: "Precision Sensors", desc: "High-quality flow and pressure sensors", icon: FaMicroscope },
        { name: "AI Diagnostics", desc: "Smart interpretation and data analysis", icon: FaLaptopMedical },
        { name: "Software Suite", desc: "Integrated patient data management tools", icon: FaCogs },
      ],
    },
    {
      title: "Global Presence",
      icon: FaGlobe,
      description: "Connecting care through collaboration",
      items: [
        { name: "Distributors", desc: "Worldwide distribution and support network", icon: FaHandshake },
        { name: "Partners", desc: "Collaborations with leading medical groups", icon: FaGlobe },
        { name: "Research Labs", desc: "Continuous innovation through R&D", icon: FaFlask },
      ],
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        setIsMegaMenuOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsMegaMenuOpen(false);
      }}
    >
      {/* Trigger Button */}
      <button className="py-2 text-body hover:text-primary cursor-pointer flex items-center">
        Explore RespiCare <span className="ml-1 transition-transform">▾</span>
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur */}
            <motion.div
              className="fixed inset-0 top-[130px] bg-white/30 backdrop-blur-md z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            {/* Main Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40"
              style={{ top: "130px" }}
            >
              <div className="max-w-[1500px] mx-auto px-6 lg:px-16 xl:px-24 py-14 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-dark-2 mb-2">
                    Discover Our Expertise
                  </h3>
                  <p className="text-gray-600">
                    Explore RespiCare’s advanced diagnostics, innovation, and global reach.
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {menuCategories.map((cat, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                        <cat.icon className="text-primary text-xl" />
                        <div>
                          <h4 className="font-semibold text-dark-2 text-lg">{cat.title}</h4>
                          <p className="text-sm text-gray-500">{cat.description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {cat.items.map((item, j) => (
                          <motion.div
                            key={j}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all text-primary">
                              <item.icon className="text-lg" />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-semibold text-dark-2 group-hover:text-primary transition-colors">
                                  {item.name}
                                </h5>
                                <FaArrowRight className="text-xs text-gray-400 group-hover:text-primary transition-all transform group-hover:translate-x-1" />
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;
