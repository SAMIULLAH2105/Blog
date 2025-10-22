import { getPosts } from "@/lib/api";
import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/HeroSection";
import CustomerService from "@/components/CustomerService";
import LatestNews from "@/components/LatestNews";
import CurrentProjects from "@/components/CurrentProjects";
import Work from "@/components/Work";

export default async function Home() {
  let posts = [];

  try {
    // Fetch all posts with populate for images, relations, etc.
    posts = await getPosts();
  } catch (error) {
    console.error("Error loading posts:", error.message);
  }

  const baseUrl = "http://localhost:1337";

  // Sort by published date descending
  const latestPosts = posts?.data
    ?.sort(
      (a, b) =>
        new Date(b.published_date || b.publishedAt) -
        new Date(a.published_date || a.publishedAt)
    )
    .slice(0, 8); // only 8 latest

  // Filter featured posts (assuming you have a field `is_featured`)
  const featuredPosts = posts?.data?.filter((post) => post.Featured);

  return (
    <>
      <HeroSection />
      <CustomerService />
      <LatestNews />
      <CurrentProjects />
      <Work />
      {/* <main className="p-8 flex flex-col items-center mt-10 mb-10">
        <h1 className="text-4xl font-bold text-center mb-5 bg-gradient-to-r from-[#343A63] via-[#A3ABE4] to-[#343A63] bg-clip-text text-transparent relative inline-block">
          Featured
          <span className="relative text-transparent bg-gradient-to-r from-[#343A63] via-[#A3ABE4] to-[#343A63] bg-clip-text drop-shadow-[0_0_6px_rgba(167,179,255,0.1)] mx-2"></span>
          Posts
        </h1>
        <div className="w-full h-[1.5px] bg-gradient-to-r from-[#d5d5d6] to-[#d5d5d6] mx-auto mb-10 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.length ? (
            featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} baseUrl={baseUrl} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No featured posts found.
            </p>
          )}
        </div>

        <h1 className="text-4xl font-bold text-center mb-5 bg-gradient-to-r from-[#343A63] via-[#A3ABE4] to-[#343A63] bg-clip-text text-transparent relative inline-block">
          Our
          <span className="relative text-transparent bg-gradient-to-r from-[#343A63] via-[#A3ABE4] to-[#343A63] bg-clip-text drop-shadow-[0_0_6px_rgba(167,179,255,0.1)] mx-2">
            Latest
          </span>
          Updates
        </h1>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#d5d5d6] to-[#d5d5d6] mx-auto mb-10 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.length ? (
            latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} baseUrl={baseUrl} />
            ))
          ) : (
            <p className="text-gray-500">No posts found.</p>
          )}
        </div>
      </main> */}
    </>
  );
}
