import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HeroSection from "./components/pages/home/HeroSection";
import OurProducts from "./components/pages/home/OurProducts";
import RespiratoryDiagnostics from "./components/pages/home/RespiratoryDiagnostics";
import ServicesSection from "./components/pages/home/ServicesSection";
import Ventilation from "./components/pages/home/Ventilation";
import WhyRespicare from "./components/pages/home/WhyRespicare";

export const metadata = {
  title: "Respicare | Advanced Respiratory Care Solutions",
  description:
    "Explore Respicare’s range of reliable respiratory care equipment and medical devices designed for better breathing and patient care.",
  alternates: {
    canonical: "https://respicare-seven.vercel.app/",
  },
  openGraph: {
    title: "Respicare | Advanced Respiratory Care Solutions",
    description:
      "Discover innovative and trusted respiratory care products at Respicare — supporting healthier lives through technology.",
    url: "https://respicare-seven.vercel.app/",
    siteName: "Respicare",
    images: [
      {
        url: "https://respicare-seven.vercel.app/og/home.png",
        width: 1200,
        height: 630,
        alt: "Respicare Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Respicare | Advanced Respiratory Care Solutions",
    description:
      "Innovative and trusted respiratory care equipment — explore Respicare’s full product line today.",
    images: ["/og/home.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <RespiratoryDiagnostics />
    <Ventilation />
    <OurProducts />
    <WhyRespicare />
     <ServicesSection />
    <Footer />
    </>
  );
}
