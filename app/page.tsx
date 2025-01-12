import Image from "next/image";
import ImgCarousel from "@/components/ImgCarousel"
import Topbar from "@/components/Topbar";
import Navbarr from "@/components/Navbarr";
import Card from "@/components/Card";
import Teamn from "@/components/Teamn";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import EventCard from "@/components/RecentEvents";
import Chairperson from "@/components/Chairperson"

export default function Home() {
  return (
    <>
    <Topbar/>
    <Navbarr/>
    <ImgCarousel/>
    <Card/>
    <Chairperson/>
    <Feature/>
    <Teamn/>
    <EventCard/>
    <Footer/>
    </>
  );
}
