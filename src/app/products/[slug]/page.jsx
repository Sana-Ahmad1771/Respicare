import { notFound } from "next/navigation";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import productsData from "../../components/Pages/products/productsdata.json";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found | Respicare" };

  return {
    title: `${product.title} | Respicare`,
    description: `Learn more about ${product.title} — ${product.category} by Respicare.`,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: `https://respicare-seven.vercel.app${product.image}`,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default function ProductDetail({ params }) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <>
      <Header />

      <main className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-20 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-xl shadow p-6 flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-semibold mb-3">{product.title}</h1>
            <p className="text-gray-500 mb-4">{product.category}</p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description || "No detailed description available."}
            </p>

            <p className="text-green-600 font-medium mb-4">In Stock</p>

            <button className="bg-primary cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition">
              Contact for Details
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
