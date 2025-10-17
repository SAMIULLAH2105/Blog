"use client";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[url('/assets/navbar.png')] bg-cover bg-top shadow-md h-[110px] text-white border-b border-white">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-2 h-full flex flex-col justify-center">
        <div className="flex justify-between items-center p-15">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold ">
              MyBlog
            </a>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className=" hover:text-gray-900">
              Home
            </a>
            <a href="/blog" className=" hover:text-gray-900">
              Blog
            </a>
            <a href="/about" className=" hover:text-gray-900">
              About
            </a>
            <a href="/contact" className=" hover:text-gray-900">
              Contact
            </a>
            <a href="/author" className=" hover:text-gray-900">
              Author
            </a>
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

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md h-[194px]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-2xl font-bold text-gray-800">
//               MyBlog
//             </a>
//           </div>

//           {/* Menu */}
//           <div className="hidden md:flex space-x-6">
//             <a href="/" className="text-gray-700 hover:text-gray-900">
//               Home
//             </a>
//             <a href="/blog" className="text-gray-700 hover:text-gray-900">
//               Blog
//             </a>
//             <a href="/about" className="text-gray-700 hover:text-gray-900">
//               About
//             </a>
//             <a href="/contact" className="text-gray-700 hover:text-gray-900">
//               Contact
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="text-gray-700 hover:text-gray-900 focus:outline-none"
//             >
//               {/* Simple hamburger icon */}
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
