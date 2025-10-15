"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/hero-slider-1.jpg",
    title: "Breathe Better, Live Better with RespiCare",
    desc: "At RespiCare, we provide innovative respiratory and medical devices designed to enhance patient comfort and improve clinical outcomes.",
  },
  {
    id: 2,
    image: "/images/hero-slider-2.jpg",
    title: "Innovative Respiratory Solutions for Healthier Lives",
    desc: "We deliver advanced respiratory care products that set the benchmark for safety, comfort, and clinical efficiency.",
  },
  {
    id: 3,
    image: "/images/hero-slider-3.jpg",
    title: "Trusted Partner in Respiratory Care",
    desc: "Empowering healthcare professionals with cutting-edge technologies to ensure better breathing for every patient.",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 120px)" }}
      aria-label="RespiCare Hero Slider"
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
        }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[calc(100vh-120px)] flex items-center overflow-hidden">
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ${
                  activeIndex === index ? "scale-110" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--primary)]/65"></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
                  <div className="max-w-3xl text-center md:text-left">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-white/90 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                      {slide.desc}
                    </p>

                    <Link
                      href="/about"
                      className="mt-6 inline-block bg-white text-[var(--primary)] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      {/* <div className="hero-pagination z-30 absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center"></div> */}

      {/* Navigation Arrows */}
      <div className="absolute bottom-0 right-0 z-20">
        <div className="flex">
          <button
            className="hero-prev p-4 text-[var(--primary)] bg-white border-r border-[var(--primary)] cursor-pointer hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <FaArrowLeftLong />
          </button>
          <button
            className="hero-next p-4 text-[var(--primary)] bg-white cursor-pointer hover:bg-gray-100"
            aria-label="Next slide"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Swiper Pagination Dots Custom Style */}
      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: transparent;
          border: 2px solid #4087b8;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .hero-pagination .swiper-pagination-bullet-active {
          background: #4087b8;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
