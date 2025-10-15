"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, Brain, Activity, HeartPulse } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Pulmonary Function Testing",
    desc: "Accurately assess lung capacity and airway resistance with advanced spirometry and PFT systems.",
    icon: HeartPulse,
    img: "/images/service-01.jpg",
  },
  {
    id: 2,
    title: "CPET Analysis",
    desc: "Comprehensive cardiopulmonary exercise testing to evaluate oxygen uptake and cardiovascular performance.",
    icon: Activity,
    img: "/images/service-02.jpg",
  },
  {
    id: 3,
    title: "Spirometry Solutions",
    desc: "Portable and desktop spirometers designed for precision, compliance, and patient comfort.",
    icon: Stethoscope,
    img: "/images/service-03.jpg",
  },
  {
    id: 4,
    title: "Respiratory Diagnostics",
    desc: "Complete respiratory diagnostic systems supporting early detection and effective patient monitoring.",
    icon: Brain,
    img: "/images/service-04.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative lg:py-28 md:py-24 sm:py-24 py-24 bg-white/30">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary text-white font-semibold px-4 py-1 rounded-full text-sm mb-4">
            Services We Provide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1635]">
            Breathe Better With <span className="text-primary">RespiCare</span>{" "}
            Technology
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl h-[410px] overflow-visible flex flex-col items-center"
              >
                {/* Image with animated overlay */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Animated expanding overlay */}
                  <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute bg-primary/60 opacity-0 scale-0 rounded-full 
                                 transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] 
                                 group-hover:opacity-100 group-hover:scale-[2.5] z-10"
                      style={{
                        width: "180px",
                        height: "180px",
                      }}
                    ></div>
                  </div>

                  {/* Icon with animated hover effect */}
                  <div className="absolute z-30 top-4 right-4">
                    <div
                      className="relative p-3 rounded-lg bg-primary text-white overflow-hidden transition-all duration-500 
                                 before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0 before:bg-secondary 
                                 before:opacity-0 before:transition-all before:duration-500 before:content-[''] 
                                 group-hover:before:left-0 group-hover:before:right-0 group-hover:before:opacity-100"
                    >
                      <Icon className="relative z-10 w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Floating Content Box */}
                <div className="relative flex items-center justify-center w-full h-fit">
                  <div
                    className="
                      w-[90%] bg-white rounded-xl p-6 shadow-md text-center 
                      transition-all duration-500 group-hover:shadow-lg 
                      min-h-[170px] md:h-[300px] xl:h-[200px] flex flex-col justify-center 
                      -mt-10 sm:-mt-12 
                      lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[10px] 
                      lg:w-[85%] z-30
                    "
                  >
                    <h3 className="text-xl font-semibold text-[#0A1635] mb-2 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
