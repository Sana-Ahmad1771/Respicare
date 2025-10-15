"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaCapsules, 
  FaTruck, 
  FaLaptopMedical, 
  FaBolt,
  FaIndustry,
  FaShieldAlt,
  FaGlobe,
  FaArrowRight
} from "react-icons/fa";

const MegaMenu = ({ setIsMegaMenuOpen }) => {
  const [open, setOpen] = useState(false);

  const brandCategories = [
    {
      title: "Manufacturing Division",
      icon: FaIndustry,
      description: "Precision medical manufacturing",
      brands: [
        {
          name: "Safecare Medical Industries",
          description: "Surgical kits, PPE & medical consumables manufacturing",
          icon: FaBuilding,
          href: "https://safecare-medical.com",
          color: "text-blue-600"
        },
        {
          name: "Jurhy",
          description: "Medical components & raw materials production",
          icon: FaCapsules,
          href: "https://jurhy.com/",
          color: "text-green-600"
        }
      ]
    },
    {
      title: "Distribution Network",
      icon: FaTruck,
      description: "Healthcare supply chain solutions",
      brands: [
        {
          name: "Binali Medical Supplies",
          description: "Medical logistics & distribution services",
          icon: FaTruck,
          href: "https://binali-medical.com",
          color: "text-orange-600"
        },
        {
          name: "Care Medical Trading",
          description: "Medical equipment trading & supplies",
          icon: FaGlobe,
          href: "https://caremedical-trading.com",
          color: "text-purple-600"
        }
      ]
    },
    {
      title: "Technology Solutions",
      icon: FaLaptopMedical,
      description: "Digital healthcare innovation",
      brands: [
        {
          name: "Safecare Technology",
          description: "Healthcare management systems & software",
          icon: FaLaptopMedical,
          href: "https://safecare-tech.com",
          color: "text-indigo-600"
        },
        {
          name: "Safefast",
          description: "Medical logistics & delivery solutions",
          icon: FaBolt,
          href: "https://safefast.com",
          color: "text-red-600"
        }
      ]
    }
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
        Our Brands <span className="ml-1 transition-transform">▾</span>
      </button>

      {/* Dropdown Panel - Full width */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40"
            style={{ top: "130px" }}
          >
            <div className="max-w-[1400px] mx-auto px-6 py-8">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-dark-2 mb-2">
                  Our Manufacturing Ecosystem
                </h3>
                <p className="text-gray-600">
                  Six specialized companies united in medical manufacturing excellence
                </p>
              </div>

              {/* Brands Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {brandCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                      <category.icon className="text-primary text-xl" />
                      <div>
                        <h4 className="font-semibold text-dark-2 text-lg">
                          {category.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Brands List */}
                    <div className="space-y-4">
                      {category.brands.map((brand, brandIndex) => (
                        <motion.a
                          key={brandIndex}
                          href={brand.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          whileHover={{ x: 5 }}
                          onClick={() => {
                            setOpen(false);
                            setIsMegaMenuOpen(false);
                          }}
                        >
                          {/* Brand Icon */}
                          <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all ${brand.color}`}>
                            <brand.icon className="text-lg" />
                          </div>

                          {/* Brand Info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h5 className="font-semibold text-dark-2 group-hover:text-primary transition-colors">
                                {brand.name}
                              </h5>
                              <FaArrowRight className="text-xs text-gray-400 group-hover:text-primary transition-all transform group-hover:translate-x-1" />
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {brand.description}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-gray-600 text-sm">
                    Looking for a specific product or service?
                  </p>
                  <button
                      className="bg-gradient-to-r from-primary to-primary-light 
                    cursor-pointer text-white font-semibold py-2 px-6 rounded-xl 
                    transition-all duration-300 disabled:opacity-60 
                    disabled:cursor-not-allowed hover:scale-105 active:scale-95 mt-6 
                    sm:px-6 sm:py-3 bg-primary hover:bg-primary-light text-sm sm:text-base w-full 
                    sm:w-auto text-center"
                    onClick={() => {
                      setOpen(false);
                      setIsMegaMenuOpen(false);
                      // Scroll to contact section or open contact modal
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;