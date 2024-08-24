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
    <div className="relative h-screen w-screen">
<Carousel transition={{ type: "tween",duration: 1 }} autoplayDelay={3000} autoplay={true} infinite={true} loop={true}>
      <img
        src="/carousel1.jpg"
        alt="image 1"
        className="h-full w-full object-center"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-center"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-center"
      />
      {/* <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover object-center"
      /> */}
    </Carousel>
    </div>
  )
}

export default ImgCarousel