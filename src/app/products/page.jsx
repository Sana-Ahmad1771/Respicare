import { Suspense } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
// Import client components
import Products from "../components/Pages/products/Products";
import Filters from "../components/pages/products/Filters";

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
        url: "https://respicare-seven.vercel.app/og/products.png",
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
    images: ["/og/products.png"],
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
      <Products />
      <Filters />
      <Footer />
    </>
  );
};

export default Page;
