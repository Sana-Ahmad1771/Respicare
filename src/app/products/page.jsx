import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Filters from "../components/pages/products/Filters";
import Products from "../components/pages/products/Products";
import { Suspense } from "react";

export const metadata = {
  title: "Our Products | Respicare",
  description:
    "Browse Respicare’s complete line of respiratory care devices and medical equipment — designed for comfort, safety, and efficiency.",
  alternates: {
    canonical: "https://respicare-seven.vercel.app/products",
  },
  openGraph: {
    title: "Respicare Products",
    description:
      "Explore high-quality respiratory devices, nebulizers, oxygen concentrators, and more at Respicare.",
    url: "https://respicare-seven.vercel.app/products",
    siteName: "Respicare",
    images: [
      {
        url: "https://respicare-seven.vercel.app/images/hero-slider-3.jpg",
        width: 1200,
        height: 630,
        alt: "Respicare Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Respicare Products",
    description:
      "Browse Respicare’s reliable range of respiratory and medical care equipment.",
    images: ["/images/hero-slider-3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      {/* ✅ Wrap components using useSearchParams in Suspense */}
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Products />
        <Filters />
      </Suspense>
      <Footer />
    </>
  );
};

export default Page;
