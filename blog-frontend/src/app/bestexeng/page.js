// "use client";
// import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
// import { useState, useEffect } from "react";

// export default function BestExEngPage() {
//   const [hasMounted, setHasMounted] = useState(false);
//   const [chairman, setChairman] = useState({});

//   useEffect(() => {
//     setHasMounted(true);

//     const fetchChairman = async () => {
//       try {
//         // ✅ Include ?populate=* to fetch media relations
//         const res = await fetch("http://localhost:1337/api/chairmen?populate=*");
//         const data = await res.json();

//         console.log("📦 Strapi response:", data);

//         const chairmanData = data?.data?.[0] || {};
//         setChairman(chairmanData);
//       } catch (error) {
//         console.error("Error fetching chairman:", error);
//       }
//     };

//     fetchChairman();
//   }, []);

//   // ✅ Construct full Strapi media URL
//   const getImageUrl = () => {
//     const baseUrl = "http://localhost:1337"; // change to backend.ntstrading.com in production
//     const imageUrl = chairman?.profile?.url || chairman?.profile?.formats?.medium?.url;
//     return imageUrl ? `${baseUrl}${imageUrl}` : "/assets/Murtaza.png";
//   };

//   const contentClasses = `
//     transition-all duration-1000 ease-out
//     ${hasMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
//   `;

//   const imageClasses = `
//     transition-all duration-1000 ease-out
//     ${hasMounted ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
//   `;

//   return (
//     <>
//       {/* Top Navbar */}
//       <div className="w-full relative z-30" style={{ backgroundColor: "#404299" }}>
//         <div className="max-w-7xl mx-auto py-2 md:py-3 flex justify-between items-center px-[8%]">
//           <ul className="flex text-sm flex-wrap text-white">
//             <li className="px-2"><a href="/">Home</a></li>
//             <li className="px-2"><a href="/">| Customer Service</a></li>
//             <li className="px-2"><a href="/">| Right to Information</a></li>
//             <li className="px-2"><a href="/">| About Us</a></li>
//           </ul>

//           <ul className="flex items-center text-sm space-x-4">
//             <li><a href="https://instagram.com" target="_blank"><FaInstagram className="text-pink-500 hover:text-pink-400" size={20} /></a></li>
//             <li><a href="https://facebook.com" target="_blank"><FaFacebookF className="text-blue-600 hover:text-blue-500" size={20} /></a></li>
//             <li><a href="https://twitter.com" target="_blank"><FaTwitter className="text-blue-400 hover:text-blue-300" size={20} /></a></li>
//             <li><a href="https://youtube.com" target="_blank"><FaYoutube className="text-red-600 hover:text-red-500" size={20} /></a></li>
//             <li>
//               <a href="/contact" className="bg-white text-black font-semibold py-1 px-3 rounded-sm">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="mb-7 mt-17 text-center">
//         <div className="flex justify-center">
//           <div className="w-[4px] h-[23px] bg-amber-300"></div>
//           <span className="h-[23px] inline-block px-2 bg-white/35 text-black text-xs font-semibold mb-4">
//             Our Impact
//           </span>
//         </div>
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F35] mt-1 tracking-tight">
//           Our Current Projects
//         </h1>
//       </div>

//       {/* Chairman Section */}
//       <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl max-w-6xl mx-auto my-12 overflow-hidden">
//         {/* Left Content */}
//         <div className={`lg:w-2/3 p-10 flex flex-col justify-center ${contentClasses}`}>
//           <div className="text-7xl font-serif text-gray-400 opacity-75 mb-4 leading-none">"</div>

//           <h2 className="text-4xl font-extrabold text-gray-900 mb-1">
//             {chairman?.Name || "Loading..."}
//           </h2>
//           <p className="text-xl text-yellow-600 font-medium mb-8">
//             Water & Sewerage Board
//           </p>

//           <p className="text-gray-700 leading-relaxed text-lg max-w-lg border-l-4 border-yellow-500 pl-4 italic">
//             “{chairman?.Message || "Fetching chairman message..."}”
//           </p>

//           <div className="text-6xl font-serif text-yellow-500 self-start mt-6 ml-4 leading-none">"</div>
//         </div>

//         {/* Right Image */}
//         <div className={`lg:w-1/3 relative overflow-hidden rounded-r-xl lg:rounded-l-none ${imageClasses}`}>
//           <img
//             src={getImageUrl()}
//             alt={chairman?.Name || "Chairman"}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

//           <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col items-center z-10">
//             <h3 className="text-3xl font-bold mb-1 text-white">
//               {chairman?.Name || "Chairman"}
//             </h3>
//             <p className="text-lg opacity-90 mb-6 text-white">Mayor Karachi</p>

//             <div className="flex space-x-4">
//               <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg">
//                 <FaInstagram className="w-6 h-6 text-blue-900" />
//               </a>
//               <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg">
//                 <FaFacebookF className="w-6 h-6 text-blue-900" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Star, StarHalf, StarOff } from "lucide-react";

export default function BestExEngPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [engineer, setEngineer] = useState({});

  useEffect(() => {
    setHasMounted(true);

    const fetchEngineer = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/engineers?populate=*"
        );
        const data = await res.json();

        console.log("📦 Strapi Engineer response:", data);

        const engineerData = data?.data?.[0] || {};
        setEngineer(engineerData);
      } catch (error) {
        console.error("Error fetching engineer:", error);
      }
    };

    fetchEngineer();
  }, []);

  const getImageUrl = () => {
    const baseUrl = "http://localhost:1337";
    const imageUrl =
      engineer?.profile?.formats?.medium?.url || engineer?.profile?.url;
    return imageUrl ? `${baseUrl}${imageUrl}` : "/assets/default-engineer.png";
  };

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
      {" "}
      <div
        className="mt-7 text-center border-b-2 border-gray-300
"
      >
        <div className="flex justify-center">
          {" "}
          {/* Added justify-center here */}
          <div className="w-[4px] h-[23px] bg-amber-300"></div>
          <span className=" h-[23px] inline-block px-2  bg-white/115 text-black text-xs font-semibold  mb-4">
            Trusted Expertise
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1F35] mt-1 tracking-tight pb-8">
          Customer Services
        </h1>
      </div>
      {/* Engineer Section */}
      <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl max-w-6xl mx-auto my-12 overflow-hidden">
        {/* Left Content */}
        <div
          className={`lg:w-2/3 p-10 flex flex-col justify-center ${contentClasses}`}
        >
          <div className="text-7xl font-serif text-gray-400 opacity-75 mb-4 leading-none">
            "
          </div>

          <div className="w-fit">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 border-b-2 border-gray-300">
              {engineer?.name || "Loading..."}
            </h2>
          </div>

          <p className="text-xl text-black font-medium mb-1">
            {engineer?.date
              ? new Date(engineer.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })
              : ""}
          </p>

          <p className="mb-5">Current Month Best Executive Engineer</p>

          <p className="text-gray-700 leading-relaxed text-lg max-w-lg  italic">
            Public Rating
          </p>

          <p className="text-lg text-yellow-600 font-semibold flex items-center">
            {engineer?.rating ? (
              <>
                {/* Rounded rating to 0.5 precision */}
                {Math.round(engineer.rating * 2) / 2}

                <span className="ml-2 flex">
                  {Array.from({ length: 5 }, (_, i) => {
                    const ratingValue = Math.round(engineer.rating * 2) / 2;
                    if (ratingValue >= i + 1) {
                      return (
                        <Star
                          key={i}
                          className="text-yellow-500 w-5 h-5 fill-yellow-500"
                        />
                      );
                    } else if (ratingValue >= i + 0.5) {
                      return (
                        <StarHalf
                          key={i}
                          className="text-yellow-500 w-5 h-5 fill-yellow-500"
                        />
                      );
                    } else {
                      return (
                        <StarOff key={i} className="text-yellow-400 w-5 h-5" />
                      );
                    }
                  })}
                </span>
              </>
            ) : (
              "No rating"
            )}
          </p>
        </div>

        {/* Right Image */}
        <div
          className={`lg:w-1/3 relative overflow-hidden rounded-r-xl lg:rounded-l-none ${imageClasses}`}
        >
          <img
            src={getImageUrl()}
            alt={engineer?.name || "Engineer"}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col items-center z-10">
            <h3 className="text-3xl font-bold mb-1 text-white">
              {engineer?.name || "Engineer"}
            </h3>
            <p className="text-lg opacity-90 mb-6 text-white">
              {engineer?.designation || ""}
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <FaInstagram className="w-6 h-6 text-blue-900" />
              </a>
              <a
                href="#"
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <FaFacebookF className="w-6 h-6 text-blue-900" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
