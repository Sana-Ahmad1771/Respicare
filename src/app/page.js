import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HeroSection from "./components/pages/home/HeroSection";
import OurProducts from "./components/pages/home/OurProducts";
import RespiratoryDiagnostics from "./components/pages/home/RespiratoryDiagnostics";
import ServicesSection from "./components/pages/home/ServicesSection";
import Ventilation from "./components/pages/home/Ventilation";
import WhyRespicare from "./components/pages/home/WhyRespicare";

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
