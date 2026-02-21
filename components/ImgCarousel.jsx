"use client";
import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImgCarousel = () => {
  return (
    <div className="relative md:h-screen h-[45vh] overflow-x-hidden">
      <Carousel
        transition={{ type: "tween", duration: 1 }}
        autoplay
        autoplayDelay={3000}
        loop
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="filled"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 text-black shadow-lg hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="filled"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 text-black shadow-lg hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </IconButton>
        )}
      >
        <img
          src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3gljXBMkQkzAp8roHmD3Yd9XQlbiwqVh6FTKR"
          alt="School Building"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3MXFgBvM09KecC8DjQtFNr7PwV5AxBHJbgRuE"
          alt="Montessori"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3iHIJtFO4mdib58lSzfTZa70KkBps2euLAngU"
          alt="Computer Lab"
          className="h-full w-full object-cover object-center"
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
  );
};

export default ImgCarousel;
