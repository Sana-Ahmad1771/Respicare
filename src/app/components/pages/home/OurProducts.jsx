"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    title: "Clinical",
    desc: "Advanced clinical ventilation and monitoring systems designed for precision and reliability.",
    img: "/images/about-img.jpg",
  },
  {
    id: 2,
    title: "Veterinary Food",
    desc: "Trusted veterinary-grade solutions for animal care, research, and diagnostic applications.",
    img: "/images/product-2.svg",
  },
  {
    id: 3,
    title: "Water & Environmental",
    desc: "High-efficiency analyzers and filtration systems for environmental and water quality testing.",
    img: "/images/product-3.svg",
  },
  {
    id: 4,
    title: "Pharmaceutical",
    desc: "Innovative solutions for cleanroom, lab testing, and pharmaceutical manufacturing environments.",
    img: "/images/product-4.svg",
  },
  {
    id: 5,
    title: "Industrial",
    desc: "Industrial respiratory and diagnostic equipment ensuring safety and productivity in workplaces.",
    img: "/images/ventilation.jpg",
  },
  {
    id: 6,
    title: "Cosmetic",
    desc: "Precision testing instruments and equipment for cosmetic and dermatological applications.",
    img: "/images/product-6.svg",
  },
];

export default function OurProducts() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-[#f6f8ff] to-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex justify-between items-center flex-wrap gap-6">
          <div>
            <div className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">
              Our Products
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1635] mb-4">
              Innovation with <span className="text-primary">Purpose</span>
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Cutting-edge equipment and solutions redefining standards in
              healthcare, research, and industry.
            </p>
          </div>

          <a
            href="/products"
            className="inline-block bg-primary text-white hover:bg-secondary font-semibold px-10 py-3 rounded-full shadow-md  transition-all duration-300"
          >
            View All Products
          </a>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet !w-3 !h-3 rounded-full transition-all duration-300"></span>`,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={3500}
          spaceBetween={30}
          grabCursor={true} // ✅ allows dragging with mouse
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                onMouseEnter={() => {
                  // ✅ Slow down autoplay when hovering
                  if (swiperRef.current) swiperRef.current.params.autoplay.delay = 5000;
                  swiperRef.current.autoplay.stop();
                }}
                onMouseLeave={() => {
                  // ✅ Resume normal autoplay when leaving
                  if (swiperRef.current) swiperRef.current.params.autoplay.delay = 0;
                  swiperRef.current.autoplay.start();
                }}
              >
                <div className="relative h-[400px] w-full">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-all duration-500"></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <h3 className="text-2xl font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                      {product.desc}
                    </p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold bg-white/90 text-primary px-4 py-2 rounded-full hover:bg-white transition-all duration-300">
                      Learn More <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* Custom pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ebe4ec;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #95669d;
          width: 0.75rem !important;
          height: 0.75rem !important;
        }
      `}</style>
    </section>
  );
}
