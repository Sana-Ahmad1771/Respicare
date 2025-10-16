import React from "react";
import Header from "../components/common/Header";
import ContactInfo from "../components/pages/contact/ContactInfo";
import Footer from "../components/common/Footer";
import ContactFormSection from "../components/pages/contact/ContactFormSection";
import { ContactHero } from "../components/pages/contact/ContactHero";

export const metadata = {
  title: "Contact Us | Respicare",
  description:
    "Get in touch with Respicare for product inquiries, support, or partnership opportunities.",
  alternates: {
    canonical: "https://respicare-seven.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Respicare",
    description:
      "Reach out to Respicare for respiratory equipment support or business collaborations.",
    url: "https://respicare-seven.vercel.app/contact",
    siteName: "Respicare",
    images: [
      {
        url: "https://respicare-seven.vercel.app/images/hero-slider-1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Respicare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Respicare",
    description:
      "Contact Respicare for inquiries, support, or to learn more about our respiratory care solutions.",
    images: ["/images/hero-slider-1.jpg"],
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
      <ContactHero />
      <ContactFormSection />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default page;
