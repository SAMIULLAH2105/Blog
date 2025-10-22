"use client";
import React, { useState } from "react";
// Keeping Chevron icons for the scroll buttons, but removing the service icons
import { ChevronRight, ChevronLeft } from "lucide-react";

// Define the service items data with local image URLs
const serviceItems = [
  {},
  {},
  {
    title: "Pay your bill",
    imageUrl: "/assets/bill.png", // Placeholder for user's asset
    description: "Easily manage and pay your monthly statements.",
  },
  {
    title: "Report a Complain",
    imageUrl: "/assets/complain.png", // Placeholder for user's asset
    description: "Submit a report for any service issues or feedback.",
  },
  {
    title: "Check Tender",
    imageUrl: "/assets/tender.png", // Placeholder for user's asset
    description: "View and track the status of current tenders.",
  },
  {
    title: "Online Tanker Book",
    imageUrl: "/assets/tank.png", // Placeholder for user's asset
    description: "Schedule and book tanker services online.",
  },
  {
    title: "Request a New Connection",
    imageUrl: "/assets/icons/new_connection.png", // Placeholder for user's asset
    description: "Apply for a new service connection in your area.",
  },
  {
    title: "FAQ & Help Center",
    imageUrl: "/assets/icons/faq_help.png", // Placeholder for user's asset
    description: "Find answers to frequently asked questions.",
  },
];

const ServiceCard = ({ item }) => {
  const isHighlighted = item.title === "Report a Complain"; // Example: adding a dynamic highlight

  return (
    <div
      className={`
      flex flex-col items-center p-4 mx-2 cursor-pointer 
      transition-all duration-300 ease-in-out transform hover:scale-[1.02] 
      hover:shadow-lg rounded-xl flex-shrink-0 w-32 md:w-40 lg:w-48
      group
    `}
    >
      {/* Icon Container with subtle background and highlight */}
      <div
        className={`
        relative p-3 rounded-xl mb-3 
        bg-white border-2 border-gray-100 shadow-md
        group-hover:border-blue-500 transition-colors
        ${isHighlighted ? "border-orange-400" : ""}
      `}
      >
        {/* -- ASSET ICON PLACEHOLDER -- 
          This will use the URL provided in the serviceItems array.
        */}
        <img
          src={item.imageUrl}
          alt={`${item.title} icon`}
          // Set explicit width and height for your custom icons
          className="w-9 h-9 md:w-10 md:h-10 transition-transform group-hover:rotate-1"
        />

        {/* Small badge for "Pay your bill" for visual match */}
        {item.title === "Pay your bill" && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center mt-2">
        {item.title}
      </h3>
    </div>
  );
};

// Main App component (or use this as a component within your Next.js page)
const CustomerServiceMenu = () => {
  // Simple state for scrolling position
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Pixels to scroll
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // This state update is optional but useful for complex carousel logic
      setScrollPosition(
        scrollRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount)
      );
    }
  };

  return (
    <div className="bg-gray-50 py-16  px-30 md:py-24 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header/Title Block */}

        <div className="mb-7 text-center">
          <div className="flex justify-center">
            {" "}
            {/* Added justify-center here */}
            <div className="w-[4px] h-[23px] bg-amber-300"></div>
            <span className=" h-[23px] inline-block px-2  bg-white/35 text-black text-xs font-semibold  mb-4">
              Contact
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F35] mt-1 tracking-tight">
            Customer Services
          </h1>
        </div>

        {/* Service Cards Container (The Carousel) */}
        <div className="relative flex items-center justify-center">
          {/* Left Scroll Button (Hidden on Mobile/Small screens) */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-0 z-10 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 border border-gray-200"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          {/* Scrollable Content Area */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto justify-start md:justify-center py-4 space-x-4 md:space-x-8 lg:space-x-12 scrollbar-hide snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }} // Hide scrollbar
          >
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className={`snap-center ${
                  index > 0
                    ? "border-l border-gray-300 pl-4" // Add border, padding to the left for separation
                    : "pr-4" // Add right padding to the first item for consistent spacing
                }`}
              >
                <ServiceCard item={item} />
              </div>
            ))}
          </div>

          {/* Right Scroll Button (Visible on all screens for the original design) */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 md:right-0 z-10 p-3 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Optional: Add custom CSS to hide the scrollbar */}
      <style jsx global>{`
        /* For Chrome, Safari, and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* For IE and Edge */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default CustomerServiceMenu;
