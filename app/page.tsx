"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ImgCarousel from "@/components/ImgCarousel";
import Topbar from "@/components/Topbar";
import Navbarr from "@/components/Navbarr";
import Card from "@/components/Card";
import Teamn from "@/components/Teamn";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import EventCard from "@/components/RecentEvents";
import Chairperson from "@/components/Chairperson";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Topbar />
      <Navbarr />
      <ImgCarousel />
      <Card />
      <Chairperson />
      <Feature />
      <Teamn />
      <EventCard />
      <Footer />

      {/* Go To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            bg-gray-900 text-white
            p-3 rounded-full shadow-lg
            transition-all duration-300
            hover:bg-gray-700 hover:scale-110
          "
          aria-label="Go to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
