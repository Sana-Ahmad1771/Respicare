"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import productsData from "@/app/components/pages/products/productsdata.json"
import { TiStarFullOutline } from "react-icons/ti";
import { FiFilter } from "react-icons/fi";
import Image from "next/image";

// Import product images (adjust paths if needed)
import product1 from "../../../../../public/products/product1.svg";
import product2 from "../../../../../public/products/product1.svg";
import product3 from "../../../../../public/products/product1.svg";

// Map image filenames to imports
const imageMap = {
  "product1.svg": product1,
  "product2.svg": product2,
  "product3.svg": product3,
};

const Filters = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // ✅ for mobile toggle

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const productsWithImages = productsData.map((product) => {
      const imageName = product.image.split("/").pop();
      return {
        ...product,
        image: imageMap[imageName] || null,
      };
    });

    setAllProducts(productsWithImages);

    const param = searchParams.get("category");
    if (param) setSelectedCategories(param.split(","));
  }, [searchParams]);

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  // ✅ Only fix: prevent scroll-to-top when filter changes
  const updateSearchParams = (categories) => {
    const query = categories.length ? `?category=${categories.join(",")}` : "";
    router.push(`/products${query}`, { scroll: false });
  };
  const toggleCategory = (category) => {
    if (category === "All") {
      clearAll();
      return;
    }

    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updated);
    updateSearchParams(updated);
  };

  const clearAll = () => {
    setSelectedCategories([]);
    updateSearchParams([]);
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? allProducts
      : allProducts.filter((product) =>
          selectedCategories.includes(product.category)
        );

  const displayedProducts = filteredProducts.slice(0, 3);
  const headingText =
    selectedCategories.length === 0
      ? "All Products"
      : selectedCategories.join(", ");

  return (
    <section className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 py-20 font-poppins overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ✅ Mobile Filter Toggle Button */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h2 className="text-xl font-semibold">Products</h2>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-primary border border-primary px-4 py-2 rounded-lg text-sm font-medium"
          >
            <FiFilter size={18} />
            Filters
          </button>
        </div>

        {/* ============ Left Filter Sidebar ============ */}
        <aside
          className={`lg:w-1/4 w-full bg-white lg:bg-transparent p-5 lg:p-0 border lg:border-0 rounded-xl shadow lg:shadow-none transition-all duration-300 ${
            isFilterOpen ? "block" : "hidden lg:block"
          }`}
        >
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FiFilter className="text-primary" />
            Filters
          </h2>
          <hr className="mb-3" />

          <div className="space-y-2 mb-4">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={cat}
                  name="category"
                  className="accent-primary"
                  checked={
                    cat === "All"
                      ? selectedCategories.length === 0
                      : selectedCategories.includes(cat)
                  }
                  onChange={() => toggleCategory(cat)}
                />
                <label htmlFor={cat} className="text-sm">
                  {cat}
                </label>
              </div>
            ))}
          </div>

          {/* ✅ Clear All Button */}
          <button
            onClick={clearAll}
            className="mt-4 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-medium transition-all"
          >
            Clear All
          </button>
        </aside>

        {/* ============ Right Product Grid ============ */}
        <main className="lg:w-3/4 w-full font-poppins">
          <h2 className="text-[28px] lg:text-2xl font-medium mb-5 italic">
            {headingText} — {displayedProducts.length} Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-[#f8f9fa] rounded-xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="h-[260px] flex items-center justify-center mb-4 bg-white rounded-lg overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No Image</span>
                  )}
                </div>

                <div className="space-y-2 text-left">
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <h3 className="font-semibold text-lg">{product.title}</h3>

                  <div className="flex justify-between items-center">
                    <p className="text-sm flex gap-1 items-center text-yellow-500">
                      <TiStarFullOutline size={20} /> 5.0 (10)
                    </p>
                    <p className="text-green-600 font-medium text-sm">
                      In Stock
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    router.push(`/products/${product.slug}`)
                  }
                  className="mt-3 w-full cursor-pointer bg-primary/10 hover:bg-primary text-primary hover:text-white font-medium py-2 text-sm rounded-lg transition-all"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Filters;
