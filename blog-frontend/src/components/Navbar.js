"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [logoMode, setLogoMode] = useState("light");

  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch("/api/weather");
      const data = await res.json();
      setWeather(data);
    }
    fetchWeather();
  }, []);

  useEffect(() => {
    if (!weather?.weather?.[0]?.main) return;

    const condition = weather.weather[0].main.toLowerCase();

    if (condition.includes("clear")) setLogoMode("dark");
    else setLogoMode("light"); // fallback or adjust as needed
  }, [weather]);

  const getWeatherBg = (condition = "") => {
    const cond = condition.toLowerCase();
    if (cond.includes("clear")) {
      // setLogoMode("dark");
      return "bg-[url('/assets/sunny.jpg')]";
    }
    if (cond.includes("cloud")) return "bg-[url('/assets/cloudy.png')]";
    if (cond.includes("rain")) return "bg-[url('/assets/rain.png')]";
    if (cond.includes("drizzle")) return "bg-[url('/assets/rain.png')]";
    if (cond.includes("fog") || cond.includes("mist") || cond.includes("haze"))
      return "bg-[url('/assets/noon.jpg')]";
    if (cond.includes("night")) return "bg-[url('/assets/moonlight.png')]";
    return "bg-[url('/assets/sunny.jpg')]";
  };

  // ✅ Only calculate local time if weather exists
  const localTime =
    weather && weather.dt && weather.timezone
      ? new Date((weather.dt + weather.timezone) * 1000)
      : null;

  const formattedTime = localTime
    ? localTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "";

  return (
    <nav
      className={`${getWeatherBg(
        weather?.weather?.[0]?.main
      )} bg-cover bg-top shadow-md h-[270px] md:h-[140px] lg:h-[150px] text-white border-b border-white`}
    >
      {/* <div className="max-w-7xl mx-[5%] px-0 sm:px-6 lg:px-2 h-full flex flex-col justify-center"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* <div className="flex justify-between items-center p-15"> */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8 lg:p-15">
          <div className="flex flex-row items-center">
            <a href="/" className="text-2xl font-bold ">
              <Image
                src={
                  logoMode === "dark"
                    ? "/assets/dark_logo.png"
                    : "/assets/light_logo.png"
                }
                alt="Logo"
                height={40}
                width={90}
              />
            </a>
            <span
              className={`ml-4 text-sm font-bold ${
                logoMode === "dark" ? "text-black" : "text-white"
              }`}
            >
              KARACHI WEATHER & <br />
              SEWERAGE CORPORATION
            </span>
          </div>

          <div className="absolute top-0 right-0 animate-slideIn">
            <Image
              src={
                logoMode === "light" ? "/assets/sun.png" : "/assets/moon.png"
              }
              alt="Weather Mode"
              width={140}
              height={140}
              className="drop-shadow-lg"
            />
          </div>

          <div className="flex flex-row items-end">
            <div>
              <div className="flex flex-row mt-2 mb-0 py-0 ">
                <div className="flex items-center lg:px-4 py-2 max-w-sm mx-auto space-x-4 text-black">
                  <span
                    className="h-[36px] w-[36px] flex items-center justify-center flex-shrink-0
                   border border-black/60  p-1.5"
                  >
                    <Image
                      src="/assets/weather.png"
                      alt="time logo"
                      height={24} // Increased size slightly to fill container
                      width={24}
                    />
                  </span>

                  {/* Text Content: Use semantic tags and apply specific text styles */}
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold leading-tight">
                      Weather
                    </h4>
                    <p className="text-sm font-medium opacity-90">
                      {weather?.weather?.[0]?.description}
                    </p>
                  </div>
                </div>

                {/*  */}

                <div className="flex items-center lg:px-4 py-2 max-w-sm mx-auto space-x-4 text-black">
                  <span
                    className="h-[36px] w-[36px] flex items-center justify-center flex-shrink-0
                   border border-black/50  p-1.5"
                  >
                    <Image
                      src="/assets/timeicon_dark.png"
                      alt="time logo"
                      height={24} // Increased size slightly to fill container
                      width={24}
                    />
                  </span>

                  {/* Text Content: Use semantic tags and apply specific text styles */}
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold leading-tight">
                      Opening Hours
                    </h4>
                    <p className="text-sm font-medium opacity-90">
                      Mon - Fri: 9am to 5pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-3 text-black/90">
                  <div className="flex items-center space-x-2 text-sm font-semibold lg:px-33">
                    <span className="pr-6">Eng</span>
                    <span className="h-6 w-px bg-black/70"></span>{" "}
                    <span className="text-sm pl-6">اردو</span>
                  </div>
                  {/* HERE IS THE DIV */}
                  <button
                    type="button"
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    className="text-black hover:text-black-300 focus:outline-none mr-7"
                  >
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>

                  {/* Hidden dropdown div (like the screenshot) */}
                  {megaMenuOpen && (
                    <>
                      <div className="absolute left-0 lg:top-[120px] top-[70] lg:m-20 bg-gradient-to-b from-[#1F2A7C] to-[#A7C7E7] text-black shadow-lg p-0 z-50 ">
                        <button
                          className="absolute lg:bg-white top-4 right-4 text-black text:sm lg:text-xl font-bold hover:text-gray-300 rounded-full lg:p-1 "
                          onClick={() => setMegaMenuOpen(false)}
                        >
                          <Undo2 />
                        </button>

                        <div className="flex flex-row items-center px-15 border-b border-white/30 mt-8 mb-4 lg:mb-0 lg:mt-4 lg:p-4">
                          <a href="/" className="text-2xl font-bold ">
                            <Image
                              src={
                                logoMode === "dark"
                                  ? "/assets/dark_logo.png"
                                  : "/assets/light_logo.png"
                              }
                              alt="Logo"
                              height={40}
                              width={90}
                            />
                          </a>
                          <span
                            className={`ml-4 text-sm font-bold ${
                              logoMode === "dark" ? "text-black" : "text-white"
                            }`}
                          >
                            KARACHI WEATHER & <br />
                            SEWERAGE CORPORATION
                          </span>
                        </div>

                        {/* Headings row */}

                        <div className="grid  grid-cols-6 bg-[#1F2A7C] text-white lg:text-lg font-semibold rounded-t-md text-[7px] ">
                          <h2 className="p-3 text-center">About Us</h2>
                          <h2 className="p-3 text-center">Our Projects</h2>
                          <h2 className="p-3 text-center">Work with Us</h2>
                          <h2 className="p-3 text-center">Careers</h2>
                          <h2 className="p-1 text-center">
                            Right to Information
                          </h2>
                          <h2 className="p-3 text-center">News & Updates</h2>
                        </div>

                        {/* Content rows */}
                        <div className="grid grid-cols-6 gap-2 lg:gap-8 mt-6 lg:text-sm lg:m-14 text-[7px] px-2">
                          <ul className="space-y-2">
                            <li>History</li>
                            <li>Vision</li>
                            <li>SDGs Roadmap</li>
                            <li>Board of Directors</li>
                            <li>Management Team</li>
                          </ul>

                          <ul className="space-y-2">
                            <li>PSDP/ADP Projects</li>
                            <li>PPP Projects</li>
                            <li>IBRD/AIIB Foreign-Funded Projects</li>
                            <li>Employee & Customer Initiatives</li>
                          </ul>

                          <ul className="space-y-2 lg:ml-3">
                            <li>Tenders</li>
                            <li>Licenses</li>
                            <li>Collaborations</li>
                            <li>Investment Opportunities</li>
                          </ul>

                          <ul className="space-y-2 lg:ml-12">
                            <li>Recruitment</li>
                            <li>Graduate Program</li>
                            <li>Consultancies</li>
                          </ul>

                          <ul className="space-y-2 lg:ml-3">
                            <li>Groundwater Licence Form</li>
                            <li>Extraction Regulations</li>
                            <li>Employee Details</li>
                            <li>KW&SC Budget</li>
                            <li>Signed CoC</li>
                          </ul>

                          <ul className="space-y-2 lg:ml-9">
                            <li>Latest Updates</li>
                            <li>Press Release</li>
                            <li>Media Gallery</li>
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 mr-8 ">
                  <button
                    className="w-[114px] px-3 py-1.5 text-white text-sm font-medium
                             bg-green-600 hover:bg-green-700 transition shadow-md border-1 border-white/80"
                    onClick={() => router.push("/bestexeng")}
                  >
                    Best Ex.Eng
                  </button>
                  <button
                    className=" w-[114px] px-3 py-1.5 text-white text-sm font-medium
                             bg-green-600 hover:bg-green-700 transition shadow-md border-1 border-white/80"
                  >
                    Aleart
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/assets/govt_dark.png"
                alt="govt logo"
                height={60}
                width={70}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {/* Simple hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-7 right-10  w-[40%] z-20 flex flex-col space-y-6 bg-[#1a1a2e7e] p-6 shadow-lg border-l border-white/10 transition-transform duration-300">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <a href="/blog" className="hover:text-yellow-400">
              Blog
            </a>
            <a href="/about" className="hover:text-yellow-400">
              About
            </a>
            <a href="/contact" className="hover:text-yellow-400">
              Contact
            </a>
            <a href="/author" className="hover:text-yellow-400">
              Author
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
