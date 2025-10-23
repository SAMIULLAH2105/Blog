// "use client";
// import { Calendar, MoveUpRight } from "lucide-react"; // Import Calendar icon for consistency

// export default function CurrentProjects() {
//   // Use a data structure for project details to make it easily repeatable/scalable
//   const project = {
//     title: "Karachi S-III The Great Water Sewerage Plan",
//     funding: "PKR 36,000 Million (USD 120 Million equivalent)",
//     date: {
//       day: "08",
//       monthYear: "Dec 2024",
//     },
//     timeline: [
//       {
//         detail:
//           "**Trunk Interceptor:** Oct, 2013 (start date) and Dec, 2024 (completion date)",
//       },
//       {
//         detail:
//           "**Sewage Treatment Plant-I:** at Haroonabad, Keamari, Karachi - Sep, 2014 (start date) and June, 2026 (completion date)",
//       },
//     ],
//     imageUrl: "[Your-Image-URL]", // Replace with your actual image path
//   };

//   const metrics = [
//     { number: "150 +", label: "Completed Projects" },
//     { number: "25M +", label: "People Served" },
//   ];

//   return (
//     <section className="bg-white py-15 px-4 sm:px-6 lg:px-30 border-t border-[#DCDCDC] ">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-7 text-center">
//           <div className="flex justify-center">
//             {/* Added justify-center here */}
//             <div className="w-[4px] h-[23px] bg-amber-300"></div>
//             <span className=" h-[23px] inline-block px-2  bg-white/35 text-black text-xs font-semibold  mb-4">
//               Our Impact
//             </span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F35] mt-1 tracking-tight">
//             Our Currennt Projects
//           </h1>
//         </div>

//         {/* Project Card (Now using data structure) */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl ">
//           {/* Image Column */}
//           <div className="flex flex-row items-center gap-6">
//             <img
//               src="/assets/hero.jpg" // Replace with project.imageUrl when dynamic
//               alt={project.title}
//               className="w-[80%] h-[323px] object-cover rounded-lg "
//             />

//             <div className="w-1/2 ">
//               <Calendar />
//             </div>
//           </div>

//           <div className="w-[80%] ">
//             <p className="h-[323px] line-clamp-10 text-gray-900 text-justify text-sm border-l-3 border-amber-300 pl-4">
//               Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
//               Cicero in 45 BC "At vero eos et accusamus et iusto odio
//               dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
//               atque corrupti quos dolores et quas molestias excepturi sint
//               occaecati cupiditate non provident, similique sunt in culpa qui
//               officia deserunt mollitia animi, id est laborum et dolorum fuga.
//               Et harum quidem rerum facilis est et expedita distinctio. Nam
//               libero tempore, cum soluta nobis est eligendi optio cumque nihil
//               impedit quo minus id quod maxime placeat facere possimus, omnis
//               voluptas assumenda est, omnis dolor repellendus. Temporibus autem
//               quibusdam et aut officiis debitis aut rerum necessitatibus saepe
//               eveniet ut et voluptates repudiandae sint et molestiae non
//               recusandae.
//             </p>
//           </div>
//         </div>

//         {/* Impact Metrics Section */}
//         <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-20 pt-10 border-t border-gray-200">
//           {metrics.map((metric, index) => (
//             <div key={index} className="flex items-center">
//               <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 mr-2">
//                 {metric.number}
//               </span>
//               <span className="text-base sm:text-lg text-gray-600">
//                 {metric.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/api"; // Using the same function
import { Calendar } from "lucide-react";

export default function CurrentProjects() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch latest 2 projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const posts = await getPosts();

        const sorted = posts?.data
          ?.sort(
            (a, b) =>
              new Date(b.published_date || b.publishedAt) -
              new Date(a.published_date || a.publishedAt)
          )
          .slice(0, 2); // take latest 2

        setProjects(sorted || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No projects available.
      </div>
    );
  }

  const baseUrl = "http://localhost:1337";

  return (
    <section className="bg-white py-15 px-4 sm:px-6 lg:px-30 border-t border-[#DCDCDC]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-7 text-center">
          <div className="flex justify-center">
            <div className="w-[4px] h-[23px] bg-amber-300"></div>
            <span className="h-[23px] inline-block px-2 bg-white/35 text-black text-xs font-semibold mb-4">
              Our Impact
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F35] mt-1 tracking-tight">
            Our Current Projects
          </h1>
        </div>

        {/* Sliding Container */}
        <div className="relative w-[80%] mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-[3000ms] ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => {
              const title = project?.title || "Untitled Project";
              const excerpt = project?.content || "No description available.";
              const imageUrl = project?.cover_image?.url
                ? `${baseUrl}${project.cover_image.url}`
                : "/assets/hero.jpg";

              const publishedDate =
                project?.published_date || project?.attributes?.publishedAt;
              const formattedDate = publishedDate
                ? new Date(publishedDate).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Unknown Date";

              return (
                <div
                  key={index}
                  className="min-w-full flex flex-col lg:flex-row gap-6 items-stretch bg-white p-6 sm:p-8 lg:p-10 rounded-xl"
                >
                  {/* Image Column */}
                  <div className="lg:w-1/3 h-full">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Calendar Column */}
                  <div className="flex flex-col items-center justify-center  lg:w-1/6">
                    <img
                      src="/assets/calender.png"
                      alt="Calendar Icon"
                      className="w-12 h-12"
                    />
                    <span className="text-sm font-semibold text-gray-700 mt-2 text-center">
                      {formattedDate}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="lg:w-1/2 flex flex-col justify-start h-full border-l-2 border-gray-200 pl-4">
                    <h2 className="text-xl font-bold text-[#1C1F35] mb-4">
                      {title}
                    </h2>
                    <p className="flex-1 overflow-hidden text-gray-900 text-justify text-sm   line-clamp-4">
                      {excerpt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-20 pt-10 pb-10 border-t border-gray-200 border-b">
          <div className="flex items-center pr-6 border-r border-gray-300">
            <span className="text-3xl sm:text-5xl font-bold text-gray-900 mr-2">
              150 +
            </span>
            <span className="h-[17px] w-[17px] bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] mx-2"></span>
            <span className="text-base sm:text-lg text-gray-600">
              Completed Projects
            </span>
          </div>

          <div className="flex items-center pl-6">
            <span className="text-3xl sm:text-5xl font-bold text-gray-900 mr-2">
              25M +
            </span>
            <span className="h-[17px] w-[17px] bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] mx-2"></span>
            <span className="text-base sm:text-lg text-gray-600">
              People Served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
