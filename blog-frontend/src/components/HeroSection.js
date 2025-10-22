// ...existing code...
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-[url('/assets/hero.gif')] bg-cover bg-right-top lg:bg-center flex items-center">
      {/* Added: top bar overlay */}
      <div className="absolute top-0 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto  py-2 md:py-3 bg-black/50 text-white text-center text-sm md:text-base  flex justify-between px-[8%]">
          <ul className="flex text-sm ">
            <a href="/" className="  px-2">
              <li>Home</li>
            </a>
            <a href="/" className=" px-2">
              <li>| Customer Service </li>
            </a>
            <a href="/" className=" px-2">
              <li>| Right to information</li>
            </a>
            <a href="/" className=" px-2">
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
                className=" bg-white text-black font-semibold py-1 px-3 "
              >
                Contact Us
              </a>
            </button>
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="relative z-10 text-white 
                      px-6 
                      md:px-12 
                      lg:px-20 
                      max-w-4xl 
                      mx-auto 
                      md:mx-0"
      >
        {/* 2. Heading: Adjust size from a smaller base (4xl) up to 6xl on large screens */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Welcome to Our Website
        </h1>

        {/* 3. Paragraph: Adjust size from a smaller base (base) up to xl on large screens */}
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl">
          Discover innovative solutions crafted to make your experience smarter
          and more seamless.
        </p>

        <button className="bg-[url('/assets/btn-bg.png')] bg-cover text-white font-semibold py-3 px-8  shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </section>
  );
}
// ...existing code...
