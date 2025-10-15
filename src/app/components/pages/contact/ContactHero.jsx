"use client";
import aboutbg from "../../../../../public/images/hero-slider-1.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export const ContactHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-fixed bg-center bg-cover bg-no-repeat min-h-[40vh] md:min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${aboutbg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-[4px]"></div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center space-y-4">
        <div>
          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl mb-1 lg:text-5xl font-bold tracking-tight"
          >
            Get In Touch With Us
          </motion.h1>
          {/* Divider */}
          <motion.div
            className="w-20 h-1 bg-primary rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm md:text-base flex justify-center items-center gap-2 text-white/90"
        >
          <Link href="/" className="hover:underline hover:text-white">
            Home
          </Link>
          <GoDotFill />
          <span>Contact</span>
        </motion.div>
      </div>
    </motion.section>
  );
};
