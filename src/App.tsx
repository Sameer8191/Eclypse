import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import TestimonialSection from "./components/Testimonials";
import Checkout from "./components/Checkout";

// Data
const accordionData = [
  { title: "Size & Fit", content: "Fits true to size. The model is wearing size S." },
  { title: "Delivery & Returns", content: "Free shipping and returns within 30 days." },
  { title: "How This Was Made", content: "Crafted in our studio using responsibly sourced wool." },
];
const sizes = ["XS", "S", "M", "L", "XL"];

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-800 text-sm sm:text-base relative">
        {/* Logo left */}
        <img src="./public/assets/Frame 8.png" alt="Eclypse logo" className="h-8 sm:h-10" />

        {/* Hamburger button right on small screens */}
        <button
          className="sm:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
            )}
          </svg>
        </button>

        {/* Navigation - hidden on small screens unless menu open */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex absolute sm:static top-full left-0 sm:left-auto w-full sm:w-auto bg-black sm:bg-transparent flex-col sm:flex-row gap-3 p-4 sm:p-0 border-t border-gray-800 sm:border-0 z-10 md:gap-12`}
        >
          {["About Us", "Wishlist", "Cart", "Buy"].map((link) => (
            <button
              key={link}
              onClick={() => {
                if (link === "Buy") navigate("/checkout");
                setIsMenuOpen(false); // Close menu on link click
              }}
              className={`hover:underline whitespace-nowrap ${
                link === "Buy"
                  ? "bg-white text-black px-3 py-1 rounded text-xs sm:text-base"
                  : "text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>
      </header>

      {/* Video Section */}
      <div className="flex justify-between items-center w-full bg-black text-white font-sans py-4 sm:py-8 px-4 relative text-xs sm:text-base">
        <div>
          <span className="text-2xl sm:text-4xl font-bold tracking-wider">Eclypse</span>
        </div>
        <div className="flex items-center">
          <span className="mr-1 font-bold">©</span>
          <span className="font-bold">2025</span>
        </div>
      </div>

      <section className="relative h-[50vh] sm:h-screen overflow-hidden">
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="./public/assets/Videos/Eclypse – Figma.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-base sm:text-3xl z-10">
          A silhouette worth remembering
        </div>
      </section>

      {/* Text Section */}
      <section className="pt-8 pb-8 px-3 text-left text-xl sm:text-4xl max-w-3xl mx-0">
        <h1 className="pl-2">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in
          movement, in presence.
        </h1>
        <a
          href="#"
          className="inline-flex items-center mt-4 sm:mt-6 text-gray-400 hover:bg-white hover:text-black pt-2 pb-2 sm:pt-6 sm:pb-6 rounded transition-colors duration-300 text-sm sm:text-base"
          title="Learn more about Eclypse"
          style={{ padding: "0.25rem 0.5rem" }}
        >
          Learn more about Eclypse
          <span
            className="ml-2 inline-block transform rotate-[-95deg] border-r-2 border-b-2 border-current w-3 h-3"
            aria-hidden="true"
          ></span>
        </a>
      </section>

      {/* Video + Image Grid */}
      <>
        <section className="grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-2 pt-2 max-w-8xl mx-auto mb-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-60 sm:h-110 object-cover"
            src="./public/assets/Videos/Eclypse – Figma.mp4"
          />
          <img
            src="./public/assets/media/Frame 18.png"
            alt="Look 2"
            className="w-full h-60 sm:h-110 object-cover"
          />
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 max-w-8xl mx-auto">
  {[
    "./public/assets/media/Frame 18(2).png",
    "./public/assets/media/Frame 18(1).png",
    "./public/assets/media/Frame 19.png",
  ].map((src, idx) => (
    <img
      key={idx}
      src={src}
      alt={`Look ${idx + 3}`}
      className={`w-full h-60 sm:h-110 object-cover ${
        idx === 2 ? "hidden sm:block" : ""
      }`}
    />
  ))}
</section>

        <section className="pt-8 sm:pt-30 pb-8 sm:pb-25 pl-3 text-left text-xl sm:text-4xl max-w-3xl mx-0">
          <h1 className="pl-2">Silhouette No.1 - Vermilion</h1>
        </section>
      </>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto bg-white text-black my-10 h-auto">
        {/* Left Video */}
        <div className="flex-1 overflow-hidden">
          <video autoPlay muted loop className="w-full h-[300px] md:h-[800px] object-cover">
            <source src="./public/assets/Videos/Eclypse – Figma_2.mp4" />
          </video>
        </div>

        {/* Right Info */}
        <div className="flex-1 p-4 md:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
              A tailored composition in motion.
            </h1>
            <p className="text-xs md:text-base text-gray-700 mb-4 md:mb-6">
              Cut from structured wool with a sculpted shoulder and softened hem, this piece captures
              presence without force.
            </p>

            <div className="flex justify-center gap-2 md:gap-6 mb-4 md:mb-6">
              {[
                "./public/assets/Thumb/Frame 11.png",
                "./public/assets/Thumb/Frame 12.png",
                "./public/assets/Thumb/Frame 13.png",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-20 h-28 md:w-50 md:h-64 object-cover cursor-pointer border border-gray-300"
                />
              ))}
            </div>

            <div className="text-base md:text-xl font-bold mb-2 md:mb-4">₹ 7,999 MRP incl. of all taxes</div>
            <hr className="mb-4 md:mb-6" />

            <div className="mb-4 md:mb-6">
              <p className="mb-2 text-xs md:text-sm font-medium">Please select a size</p>
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 md:px-5 py-2 md:py-3 text-xs md:text-sm transition-colors border ${
                      selectedSize === size
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-black"
                    } hover:bg-gray-400`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <button className="w-full py-2 md:py-4 border border-black bg-white text-black hover:bg-gray-200 transition text-sm md:text-base">
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full py-2 md:py-4 bg-black text-white hover:bg-gray-800 transition text-sm md:text-base"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Accordion */}
      {accordionData.map(({ title, content }, idx) => (
        <div key={idx}>
          <div
            className="p-4 border-t border-gray-800 cursor-pointer select-none text-xs sm:text-base"
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          >
            {title}
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 px-4 sm:px-8 ${
              activeIndex === idx ? "max-h-40 py-2 sm:py-4" : "max-h-0"
            }`}
          >
            <p className="text-xs sm:text-base">{content}</p>
          </div>
        </div>
      ))}

      {/* Testimonials */}
      <TestimonialSection />

      {/* Footer */}
      <hr className="flex justify-between items-center p-4 border-t border-gray-800 text-xs text-white bg-black" />
      <footer className="flex flex-col sm:flex-row flex-wrap justify-between p-4 sm:p-8 text-xs sm:text-sm text-white bg-black gap-4">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-xl mb-2 sm:mb-4 cursor-pointer">
            Eclypse<span>↗</span>
          </h1>
          <nav className="flex flex-wrap gap-1 sm:gap-2">
            {["Home", "About", "Buy", "Our Customers", "Contacts"].map((link) => (
              <a key={link} href="#" className="hover:underline">
                {link}
                {link !== "Contacts" && " /"}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-2 sm:mb-4">
            <h4 className="font-normal tracking-widest text-[10px] sm:text-xs mb-1">CONTACT</h4>
            <a href="tel:+911234567890" className="font-bold hover:underline text-xs sm:text-sm">
              +91 123-456-7890
            </a>
          </div>
          <div>
            <h4 className="font-normal tracking-widest text-[10px] sm:text-xs mb-1">EMAIL</h4>
            <a href="mailto:eclypse@gmail.com" className="font-bold hover:underline text-xs sm:text-sm">
              eclypse@gmail.com
            </a>
          </div>
        </div>
      </footer>
      <div className="flex justify-between items-center p-4 text-xs text-white bg-black">
        <small>© Eclypse 2025</small>
        <a
          href="#"
          className="bg-white text-black rounded-full w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center"
        >
          ↑
        </a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
