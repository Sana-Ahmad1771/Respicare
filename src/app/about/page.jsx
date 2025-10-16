import React from "react";
import { AboutUs } from "../components/pages/about/AboutUs";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AboutCompany from "../components/pages/about/AboutCompany";
import VissionSection from "../components/pages/about/VissionSection";
import MisionSection from "../components/pages/about/MissionSection";

export const metadata = {
  title: "About Us | Respicare",
  description:
    "Learn more about Respicare’s mission to deliver world-class respiratory care and medical technology solutions.",
  alternates: {
    canonical: "https://respicare-seven.vercel.app/about",
  },
  openGraph: {
    title: "About Respicare",
    description:
      "Discover how Respicare is improving respiratory health with innovation, care, and reliability.",
    url: "https://respicare-seven.vercel.app/about",
    siteName: "Respicare",
    images: [
      {
        url: "https://respicare-seven.vercel.app//images/blog-01.jpg",
        width: 1200,
        height: 630,
        alt: "About Respicare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Respicare",
    description:
      "Discover Respicare’s mission and values in advancing respiratory care across the region.",
    images: ["/images/blog-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <AboutCompany />
      <VissionSection />
      <MisionSection />
      <Footer />
    </>
  );
};

export default page;
