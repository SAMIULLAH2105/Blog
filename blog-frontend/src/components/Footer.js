import React from "react";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Image above footer */}
      <div className="w-full ">
        <img
          src="/assets/footer-image.png"
          alt="footer cover"
          className="w-full h-[200px] md:h-[220px] object-cover"
        />
      </div>

      <div className="bg-gradient-to-b from-[#414198] to-[#151532] px-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
          {/* Column 1 - Explore */}
          <div>
            <h4 className="font-semibold mb-3 text-sm inline-block border-b-2 border-yellow-400 pb-1">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Blog Posts</li>
              <li>Categories</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 2 - Resources */}
          <div>
            <h4 className="font-semibold mb-3 text-sm inline-block border-b-2 border-yellow-400 pb-1">
              RESOURCES
            </h4>

            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>JavaScript Guides</li>
              <li>MERN Stack Projects</li>
              <li>Career Advice</li>
              <li>Open Source</li>
            </ul>
          </div>

          {/* Column 3 - About + Newsletter */}
          <div>
            <h4 className="font-semibold mb-3 text-sm inline-block border-b-2 border-yellow-400 pb-1">
              NEWSLETTER
            </h4>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to get the latest blogs and updates delivered straight
              to your inbox.
            </p>

            <form className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email*"
                className="w-full px-3 py-2 bg-transparent border border-white/20 text-white placeholder-gray-300 focus:outline-none"
              />
              <button className="px-3 py-2 bg-yellow-400 text-black font-semibold">
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-4 mt-4 text-gray-300">
              <a
                href="https://linkedin.com/in/shaikhsamiullah"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                Twitter
              </a>
              <a
                href="https://github.com/SAMIULLAH2105"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* thin gradient divider */}
        <div className="h-[2px] bg-gradient-to-r from-[#a7b3ff] to-[#2d2e57]"></div>

        {/* bottom copyright */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 text-gray-300 text-sm text-center">
          © {new Date().getFullYear()}. All Rights Reserved by{" "}
          <span className="font-semibold text-white">Code Chronicles</span>
        </div>
      </div>
    </footer>
  );
}
