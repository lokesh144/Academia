"use client";
import React,{useRef,useEffect} from 'react'
// import { Carousel, Typography, Button } from "@/node_modules/@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
const ImgCarousel = () => {
    // const carouselRef = useRef(null);
  
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     // Check if carousel is mounted and has next slide
    //     if (carouselRef.current && carouselRef.current.nextSlide) {
    //       carouselRef.current.nextSlide(); // Go to the next slide
    //     }
    //   }, 1000); // Change slide every 5 seconds
  
    //   return () => clearInterval(intervalId); // Cleanup interval on unmount
    // }, []);
  return (
    <div className="relative h-screen">
<Carousel transition={{ type: "tween",duration: 1 }} autoplayDelay={3000} autoplay={true} infinite={true} loop={true}>
      <img
        src="https://utfs.io/f/QoBGn9AkhKS3ptN8bR3GYtWhMgf2HkXDaw1nbxNZFq9u4jTo"
        alt="image 1"
        className="h-full w-full object-center"
      />
      <img
        src="https://utfs.io/f/QoBGn9AkhKS3t6xxIrPo2DneFWpShsEQkA5O3BR869MlmgKa"
        alt="image 2"
        className="h-full w-full object-center"
      />
      <img
        src="https://utfs.io/f/QoBGn9AkhKS3bzTAQCfFoy0NrzbY71Ak2qv3xC6h9KinVIuL"
        alt="image 3"
        className="h-full w-full object-center"
      />
      <img
        src="https://utfs.io/f/QoBGn9AkhKS3CYskTPp5O7e1ugcEXvaV02lmGFB9xRWNhyj8"
        alt="image 3"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
    </div>
  )
}

export default ImgCarousel