"use client";
import React, { useState, useEffect } from "react";

export default function Officials() {
  const [hasMounted, setHasMounted] = useState(false);

  // Set hasMounted to true after the component is rendered
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Tailwind CSS transition/transform classes
  const contentClasses = `
    transition-all duration-1000 ease-out 
    ${hasMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
  `;

  const imageClasses = `
    transition-all duration-1000 ease-out 
    ${hasMounted ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `;

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl max-w-6xl mx-auto my-12 overflow-hidden">
        {/* Left Section: Quote/Text Content (Slides in from Left) */}
        <div
          className={`lg:w-2/3 p-10 flex flex-col justify-center ${contentClasses}`}
        >
          <div className="text-7xl font-serif text-gray-400 opacity-75 mb-4 leading-none">
            "
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-1">
            Murtuza Wahab
          </h2>
          <p className="text-xl text-yellow-600 font-medium mb-8">
            Water & Sewerage Board
          </p>

          <p className="text-gray-700 leading-relaxed text-lg max-w-lg border-l-4 border-yellow-500 pl-4 italic">
            "KWSLC, under Chairman Barrister Murtaza Wahab Siddiqui, is
            committed to providing clean water, improving infrastructure,
            resolving complaints swiftly, and ensuring a sustainable
            water-secure future for Karachi."
          </p>

          <div className="text-6xl font-serif text-yellow-500 self-start mt-6 ml-4 leading-none">
            "
          </div>
        </div>

        {/* Right Section: Image with Text Overlay (Slides in from Right) */}
        <div
          className={`lg:w-1/3 relative overflow-hidden rounded-r-xl lg:rounded-l-none ${imageClasses}`}
        >
          <img
            src="/assets/Murtaza.png"
            alt="Murtuza Wahab"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col items-center z-10">
            <h3 className="text-3xl font-bold mb-1 text-white">
              Murtuza Wahab
            </h3>
            <p className="text-lg opacity-90 mb-6 text-white">Mayor Karachi</p>

            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram Profile"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.785 2h8.43C18.66 2 21 4.34 21 7.785v8.43C21 19.66 18.66 22 15.785 22H7.785C4.34 22 2 19.66 2 15.785V7.785C2 4.34 4.34 2 7.785 2zm.84 2A2.84 2.84 0 005.78 6.84v8.32A2.84 2.84 0 008.84 18h6.32a2.84 2.84 0 002.06-2.06V8.84A2.84 2.84 0 0015.16 5.78H8.84zm6.5 4.34a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zm-4.14 1.7a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook Profile"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.458V14.654h-3.418v-4.04h3.418V7.531c0-3.374 2.066-5.212 5.068-5.212 1.442 0 2.686.107 3.045.155v3.522l-2.083.001c-1.638 0-1.956.778-1.956 1.918v2.502h4.04l-.65 4.04h-3.39V24h6.075c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-gradient-to-b from-[#404299] to-[#091242] rounded-xl shadow-2xl max-w-6xl mx-auto my-12 overflow-hidden">
        <div
          className={`lg:w-1/3 relative overflow-hidden rounded-r-xl lg:rounded-l-none ${imageClasses}`}
        >
          <img
            src="/assets/Murtaza.png"
            alt="Murtuza Wahab"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col items-center z-10">
            <h3 className="text-3xl font-bold mb-1 text-white">
              Murtuza Wahab
            </h3>
            <p className="text-lg opacity-90 mb-6 text-white">Mayor Karachi</p>

            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram Profile"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.785 2h8.43C18.66 2 21 4.34 21 7.785v8.43C21 19.66 18.66 22 15.785 22H7.785C4.34 22 2 19.66 2 15.785V7.785C2 4.34 4.34 2 7.785 2zm.84 2A2.84 2.84 0 005.78 6.84v8.32A2.84 2.84 0 008.84 18h6.32a2.84 2.84 0 002.06-2.06V8.84A2.84 2.84 0 0015.16 5.78H8.84zm6.5 4.34a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zm-4.14 1.7a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook Profile"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.458V14.654h-3.418v-4.04h3.418V7.531c0-3.374 2.066-5.212 5.068-5.212 1.442 0 2.686.107 3.045.155v3.522l-2.083.001c-1.638 0-1.956.778-1.956 1.918v2.502h4.04l-.65 4.04h-3.39V24h6.075c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Left Section: Quote/Text Content (Slides in from Left) */}
        <div
          className={`lg:w-2/3 p-10 flex flex-col justify-center ${contentClasses}`}
        >
          <div className="text-7xl font-serif text-gray-400 opacity-75 mb-4 leading-none">
            "
          </div>

          <h2 className="text-4xl font-extrabold text-white mb-1">
            Murtuza Wahab
          </h2>
          <p className="text-xl text-yellow-600 font-medium mb-8">
            Water & Sewerage Board
          </p>

          <p className="text-white leading-relaxed text-lg max-w-lg border-l-4 border-yellow-500 pl-4 italic">
            "KWSLC, under Chairman Barrister Murtaza Wahab Siddiqui, is
            committed to providing clean water, improving infrastructure,
            resolving complaints swiftly, and ensuring a sustainable
            water-secure future for Karachi."
          </p>

          <div className="text-6xl font-serif text-yellow-500 self-start mt-6 ml-4 leading-none">
            "
          </div>
        </div>

        {/* Right Section: Image with Text Overlay (Slides in from Right) */}
      </div>

      <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl max-w-6xl mx-auto my-12 overflow-hidden">
        {/* Left Section: Quote/Text Content (Slides in from Left) */}
        <div
          className={`lg:w-2/3 p-10 flex flex-col justify-center ${contentClasses}`}
        >
          <div className="text-7xl font-serif text-gray-400 opacity-75 mb-4 leading-none">
            "
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-1">
            Murtuza Wahab
          </h2>
          <p className="text-xl text-yellow-600 font-medium mb-8">
            Water & Sewerage Board
          </p>

          <p className="text-gray-700 leading-relaxed text-lg max-w-lg border-l-4 border-yellow-500 pl-4 italic">
            "KWSLC, under Chairman Barrister Murtaza Wahab Siddiqui, is
            committed to providing clean water, improving infrastructure,
            resolving complaints swiftly, and ensuring a sustainable
            water-secure future for Karachi."
          </p>

          <div className="text-6xl font-serif text-yellow-500 self-start mt-6 ml-4 leading-none">
            "
          </div>
        </div>

        {/* Right Section: Image with Text Overlay (Slides in from Right) */}
        <div
          className={`lg:w-1/3 relative overflow-hidden rounded-r-xl lg:rounded-l-none ${imageClasses}`}
        >
          <img
            src="/assets/Murtaza.png"
            alt="Murtuza Wahab"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col items-center z-10">
            <h3 className="text-3xl font-bold mb-1 text-white">
              Murtuza Wahab
            </h3>
            <p className="text-lg opacity-90 mb-6 text-white">Mayor Karachi</p>

            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram Profile"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.785 2h8.43C18.66 2 21 4.34 21 7.785v8.43C21 19.66 18.66 22 15.785 22H7.785C4.34 22 2 19.66 2 15.785V7.785C2 4.34 4.34 2 7.785 2zm.84 2A2.84 2.84 0 005.78 6.84v8.32A2.84 2.84 0 008.84 18h6.32a2.84 2.84 0 002.06-2.06V8.84A2.84 2.84 0 0015.16 5.78H8.84zm6.5 4.34a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zm-4.14 1.7a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook Profile"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.458V14.654h-3.418v-4.04h3.418V7.531c0-3.374 2.066-5.212 5.068-5.212 1.442 0 2.686.107 3.045.155v3.522l-2.083.001c-1.638 0-1.956.778-1.956 1.918v2.502h4.04l-.65 4.04h-3.39V24h6.075c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
