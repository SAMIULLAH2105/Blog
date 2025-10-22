// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Blog Website",
//   description: "Great Website built with Next.js and Strapi",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <Navbar />
//         {/* <HeroSection /> */}
//         {children}
//         <ContactForm />
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { Rubik } from "next/font/google"; // 1. Import Rubik
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

// 2. Define the Rubik font
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-rubik",
});

// Remove Geist imports and definitions if you no longer need them
// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({ ... });
// const geistMono = Geist_Mono({ ... });

export const metadata = {
  title: "Blog Website",
  description: "Great Website built with Next.js and Strapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. Apply the Rubik font class to the body */}
      <body className={rubik.variable}>
        <Navbar />
        {/* <HeroSection /> */}
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
