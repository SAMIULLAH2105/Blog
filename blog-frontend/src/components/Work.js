"use client";
// Import Calendar icon for consistency
import {
  Video,
  Droplets,
  HelpCircle,
  Bell,
  Droplet,
  LifeBuoy,
} from "lucide-react";
export default function Work() {
  return (
    <section className="bg-white py-15 px-4 sm:px-6 lg:px-0 border-t border-[#DCDCDC] ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-7 text-center">
          <div className="flex justify-center">
            {/* Added justify-center here */}
            <div className="w-[4px] h-[23px] bg-amber-300"></div>
            <span className=" h-[23px] inline-block px-2  bg-white/35 text-black text-xs font-semibold  mb-4">
              How We Work
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F35] mt-1 tracking-tight">
            Our Project Videos
          </h1>
        </div>

        {/* Project Card (Now using data structure) */}
        <div className="grid lg:grid-cols-2 items-stretch bg-red-900 h-[470px]">
          {/* Image Column */}
          <div className="bg-[#091242] h-full w-full flex items-center justify-center px-10 relative">
            <img
              src="/assets/work.gif"
              alt="Work animation"
              className="h-full w-auto object-contain"
            />
            <div className="bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] absolute lg:bottom-20 lg:left-10 md:bottom-6 md:left-10 bottom-17 left-10 text-black text-sm font-semibold p-2">
              77th Pakistan Independence <br />
              Celebration at Karsaz Office
            </div>
          </div>

          <div className="bg-[#F4F4F4] h-full w-full flex flex-col p-20">
            <h1 className="font-bold pb-2">Watch Project Videos</h1>
            <p>
              Find out the latest updates on planned projects. See what we're
              working on in your area and how it might impact you.
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-4">
              {/* Left Column */}
              <div>
                <ul className="list-none p-0 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-gray-800 hover:text-blue-600 no-underline"
                    >
                      <div className="h-10 w-10 bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] rounded-full flex items-center justify-center">
                        <Video className="w-5 h-5 text-black" />
                      </div>
                      Project Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-gray-800 hover:text-blue-600 no-underline"
                    >
                      <div className="h-10 w-10 bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] rounded-full flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-black" />
                      </div>
                      Water Wise Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-gray-800 hover:text-blue-600 no-underline"
                    >
                      <div className="h-10 w-10 bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] rounded-full flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-black" />
                      </div>
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <ul className="list-none p-0 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-gray-800 hover:text-blue-600 no-underline"
                    >
                      <div className="h-10 w-10 bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] rounded-full flex items-center justify-center">
                        <Bell className="w-5 h-5 text-black" />
                      </div>
                      Latest Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-gray-800 hover:text-blue-600 no-underline"
                    >
                      <div className="h-10 w-10 bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] rounded-full flex items-center justify-center">
                        <Droplet className="w-5 h-5 text-black" />
                      </div>
                      Save Water Tips
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-gray-800 hover:text-blue-600 no-underline"
                    >
                      <div className="h-10 w-10 bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] rounded-full flex items-center justify-center">
                        <LifeBuoy className="w-5 h-5 text-black" />
                      </div>
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
