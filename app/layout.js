import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Import all CSS files from public/Images
import "../public/Images/bootstrap.min.css";
// import "../public/Images/all.min.css";
import "../public/Images/animate.css";
import "../public/Images/magnific-popup.css";
import "../public/Images/meanmenu.css";
import "../public/Images/nice-select.css";
import "../public/Images/main.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ReEnergy - Solar and Renewable Energy",
  description: "Powering the Future with Renewable Energy Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
