"use client";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/api";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

export default function LatestNews() {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        const sortedPosts = posts?.data
          ?.sort(
            (a, b) =>
              new Date(b.published_date || b.publishedAt) -
              new Date(a.published_date || a.publishedAt)
          )
          .slice(0, 1);

        if (sortedPosts && sortedPosts.length > 0) {
          setLatestPost(sortedPosts[0]);
        }
      } catch (error) {
        console.error("Error loading posts:", error.message);
      }
    };

    fetchPosts();
  }, []);

  if (!latestPost) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading latest news...
      </div>
    );
  }

  const title = latestPost?.title || "Untitled Post";
  const excerpt = latestPost?.content || "No summary available for this post.";
  const source = latestPost.attributes?.source || "Source Unknown";
  const publishedDate =
    latestPost?.published_date || latestPost.attributes?.publishedAt;
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString()
    : "Unknown Date";
  const baseUrl = "http://localhost:1337";

  const image_main_url = latestPost?.cover_image?.url
    ? `${baseUrl}${latestPost.cover_image.url}`
    : "/assets/placeholder.jpg";

  const image_pipe_url = latestPost?.cover_image?.url
    ? `${baseUrl}${latestPost.cover_image.url}`
    : "/assets/placeholder.jpg";

  return (
    <div className="max-w-7xl mx-auto shadow-2xl overflow-hidden bg-white ">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-stretch text-white text-sm font-medium bg-indigo-700 shadow-lg">
        <div className="bg-indigo-900 px-4 sm:px-6 py-3 flex-shrink-0 flex items-center justify-center md:justify-start">
          Our Latest News
        </div>
        <div className="px-4 sm:px-6 py-3 flex-1 flex flex-wrap items-center space-x-2 text-black bg-white border-t md:border-t-0 md:border-l border-indigo-600/50">
          <span className="font-semibold">{formattedDate}</span>
          <span className="opacity-70 hidden sm:inline">|</span>
          <span className="truncate">{title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-20 sm:px-6 md:px-10 lg:px-40 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold text-gray-500 mb-1 flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-5 9a1 1 0 100 2h10a1 1 0 100-2H5z"></path>
            </svg>
            <span>{source}</span>
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mt-2 line-clamp-2">
            {title}
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-base sm:text-lg line-clamp-6">
            {excerpt}
          </p>

          <a
            href="#"
            className="inline-flex items-center font-semibold mt-6 transition duration-300 hover:text-amber-700 hover:underline"
          >
            <div className="h-11 w-11 rounded-full bg-amber-300 mr-2 flex items-center justify-center">
              <MoveUpRight />
            </div>
            See More
          </a>
        </div>

        {/* Images */}
        <div className="order-1 lg:order-2 flex flex-col space-y-4">
          <div className=" overflow-hidden lg:ml-20">
            <img
              src={image_main_url}
              alt={title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="md:self-start md:w-3/4 overflow-hidden transform md:-translate-y-10 border-20 border-white ">
            <img
              src={image_pipe_url}
              alt="Additional image"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
