"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../../public/logo.svg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navItemClass = (path) =>
    `relative py-2 transition-all duration-300 group hover:text-primary ${
      pathname === path ? "text-primary" : "text-dark-2"
    }`;

  const navItemBorderClass = (path) =>
    `absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
      pathname === path ? "bg-primary" : "bg-transparent group-hover:bg-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white font-inter shadow-md">
      {/* === Top Bar === */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-12 text-sm text-dark-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2">
              <FiPhone className="text-primary" />
              <span
                onClick={() => copyToClipboard("(239) 555-0108")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                (239) 555-0108
              </span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineEmail className="text-primary" />
              <span
                onClick={() => copyToClipboard("info@binali.xyz")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                info@Respicare.xyz
              </span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-primary hover:scale-110">
              <RiFacebookFill size={18} />
            </a>
            <a href="#" className="hover:text-primary hover:scale-110">
              <FaXTwitter size={18} />
            </a>
            <a href="#" className="hover:text-primary hover:scale-110">
              <LuInstagram size={18} />
            </a>
            <a href="#" className="hover:text-primary hover:scale-110">
              <RxLinkedinLogo size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* === Navbar === */}
      <nav className="bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="binali-logo"
              width={140}
              height={40}
              className="w-auto h-14"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10 text-[16px] font-medium">
            <li>
              <Link href="/" className={navItemClass("/")}>
                Home <span className={navItemBorderClass("/")} />
              </Link>
            </li>
            <li>
              <Link href="/about" className={navItemClass("/about")}>
                About Us <span className={navItemBorderClass("/about")} />
              </Link>
            </li>
            <li className="relative flex items-center group">
              <MegaMenu />
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
                  pathname.startsWith("/services")
                    ? "bg-primary"
                    : "bg-transparent group-hover:bg-primary"
                }`}
              ></span>
            </li>
            <li>
              <Link href="/products" className={navItemClass("/products")}>
                Our Products{" "}
                <span className={navItemBorderClass("/products")} />
              </Link>
            </li>
            <li>
              <Link href="/partners" className={navItemClass("/partners")}>
                Our Partners{" "}
                <span className={navItemBorderClass("/partners")} />
              </Link>
            </li>
            <li>
              <Link href="/career" className={navItemClass("/career")}>
                Career <span className={navItemBorderClass("/career")} />
              </Link>
            </li>
            <li>
              <Link href="/contact" className={navItemClass("/contact")}>
                Contact <span className={navItemBorderClass("/contact")} />
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-primary focus:outline-none"
          >
            {!isMenuOpen && <AlignRight size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-white z-50 px-6 pt-16"
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="/" onClick={closeMenu}>
                  <Image
                    src={Logo}
                    width={130}
                    height={40}
                    alt="logo"
                    className="w-auto h-14"
                  />
                </Link>
                <button onClick={closeMenu} className="text-primary">
                  <IoCloseSharp size={30} />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/products", label: "Our Products" },
                  { href: "/career", label: "Career" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2 ${
                        pathname === item.href
                          ? "text-primary border-b-2 border-primary"
                          : "text-dark-2 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </header>
  );
};

export default Header;
