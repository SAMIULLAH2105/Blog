import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-[url('/assets/hero.gif')] bg-cover bg-right-top lg:bg-center flex items-center">
      {/* 🔹 Top Bar Overlay */}
      <div className="absolute top-0 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto py-2 md:py-3 bg-black/50 text-white text-center text-sm md:text-base flex justify-between px-[8%]">
          <ul className="flex text-sm">
            <a href="/" className="px-2">
              <li>Home</li>
            </a>
            <a href="/" className="px-2">
              <li>| Customer Service</li>
            </a>
            <a href="/" className="px-2">
              <li>| Right to information</li>
            </a>
            <a href="/" className="px-2">
              <li>| About Us</li>
            </a>
          </ul>

          <ul className="flex text-sm space-x-4">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-pink-500 hover:text-pink-400"
                  size={20}
                />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="text-blue-600 hover:text-blue-500"
                  size={20}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-blue-400 hover:text-blue-300"
                  size={20}
                />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  className="text-red-600 hover:text-red-500"
                  size={20}
                />
              </a>
            </li>

            <button>
              <a
                href="/contact"
                className="bg-white text-black font-semibold py-1 px-3"
              >
                Contact Us
              </a>
            </button>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 🔹 Main Hero Content */}
      <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 max-w-4xl mx-auto md:mx-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Welcome to Our Website
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl">
          Discover innovative solutions crafted to make your experience smarter
          and more seamless.
        </p>

        <button className="bg-[url('/assets/btn-bg.png')] bg-cover text-white font-semibold py-3 px-8 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>

      {/* 🔹 Right Vertical Social Navbar */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-3 z-20 bg-white/70 py-4 px-3 rounded-tl-xl rounded-bl-xl shadow-md backdrop-blur-sm">
        {[
          { src: "/assets/hero/bills.png", name: "Bills", link: "/bills" },
          { src: "/assets/hero/tender.png", name: "Tender", link: "/tender" },
          { src: "/assets/hero/truck.png", name: "Truck", link: "/truck" },
          {
            src: "/assets/hero/connection.png",
            name: "Connection",
            link: "/connection",
          },
          {
            src: "/assets/hero/complain.png",
            name: "Complain",
            link: "/complain",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-col items-center group"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-6 h-6 mb-0.5 transition-transform group-hover:scale-110 brightness-0"
            />
            <p className="text-[10px] font-medium text-gray-700 group-hover:text-blue-600">
              {item.name}
            </p>
            <div className="w-5 border-b border-gray-300 mt-0.5 group-hover:border-blue-500 transition-all"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
