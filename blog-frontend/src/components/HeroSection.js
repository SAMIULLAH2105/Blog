// // src/components/HeroSection.jsx
// export default function HeroSection() {
//   return (
//     <section className="relative h-[90vh] bg-[url('/assets/hero.jpg')] bg-cover bg-center flex items-center">
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content (aligned left) */}
//       <div className="relative z-10 text-white px-10 md:px-20 max-w-xl">
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           Welcome to Our Website
//         </h1>
//         <p className="text-lg md:text-xl mb-8">
//           Discover innovative solutions crafted to make your experience smarter and more seamless.
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// }
// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-[url('/assets/hero.jpg')] bg-cover bg-right-top lg:bg-center flex items-center">
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
