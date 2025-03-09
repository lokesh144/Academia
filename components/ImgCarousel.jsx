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
        src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3gljXBMkQkzAp8roHmD3Yd9XQlbiwqVh6FTKR"
        alt="School Building"
        className="h-full w-full object-center"
      />
      <img
        src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3MXFgBvM09KecC8DjQtFNr7PwV5AxBHJbgRuE"
        alt="Montessori"
        className="h-full w-full object-center"
      />
      <img
        src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3iHIJtFO4mdib58lSzfTZa70KkBps2euLAngU"
        alt="Computer Lab"
        className="h-full w-full object-center"
      />
      <img
        src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3kv9aCilMIUy6au25qgHiYPt8JhlRrG9FN3VL"
        alt="Library"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3Ctf1Dsp5O7e1ugcEXvaV02lmGFB9xRWNhyj8"
        alt="Attending COFAS"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>
    </div>
  )
}

export default ImgCarousel