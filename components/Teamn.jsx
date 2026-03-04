"use client"
import React,{useRef,useEffect} from 'react'
import {
  Card,
  CardBody,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function TeamCard({ img, name, title }) {
  return (
    <Card className="rounded-lg w-56 shadow-xl">
      <CardBody className="text-center pr-0 pt-0 pl-0 pb-3">
        <img
          src={img}
          alt={name}
          style={{ height: "12rem", width: "20rem" }}
          className="mb-6 rounded-tl-lg rounded-tr-lg"
        />
        <Typography variant="h4" color="blue-gray" className="!font-medium text-lg">
          {name}
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-2 !text-base !font-semibold text-gray-600"
        >
          {title}
        </Typography>
        <div className="flex items-center justify-center gap-1.5">
          <IconButton variant="text" color="gray">
            <i className="fa-brands fa-facebook text-lg" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
}

const members = [
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3kPRpYrlMIUy6au25qgHiYPt8JhlRrG9FN3VL", name: "Salina Pun", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3s4TcnagSYoVlxbXDuLFUq1BzA487wKMcgvR5", name: "Homkali Pun Shreesh", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3mTxDZGHMOYJBSRjTwp2taUcNkoEiV7fQ0sIb", name: "Kala Adhikari", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3sHndYrgSYoVlxbXDuLFUq1BzA487wKMcgvR5", name: "Ganga Bhandari", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3JMKiIOesdzUDNaqbrMulL8k4e3CVjAG6y5gR", name: "Rita Nepal", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS32K7jDwGRTAh60R5JIlKn8mcbXyiwYatBLOjF", name: "Sabita Poudel", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3XLh8GEm5D4qQdKiIPwVxHlNn7pA3hWvSousz", name: "Deepa Karki", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS39H4Tz8yXsIMNv5UbkC4epGRgHc82nOdjltow", name: "Kamal Pandey", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3F7JSc2er4dECjxf1Qanp6glomUreDwRIVHyM", name: "Romanch Pun", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3XWvs7Gim5D4qQdKiIPwVxHlNn7pA3hWvSous", name: "Tulsa Rana Shreenet", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3JmgD4iesdzUDNaqbrMulL8k4e3CVjAG6y5gR", name: "Rabina Khatri", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3dlQVWkJA0acClsx9hjqMpoOTtiG7EWJeUH6S", name: "Laxmi Bhandari", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS36phNhhwBURl0bm35tYDKsSqQg8oXrW4unEO7", name: "Sanjana Roka", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3dslont9JA0acClsx9hjqMpoOTtiG7EWJeUH6", name: "Sandeep Khatri", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS31jMYhPGWRgiI3a5MrcApjOVfeYZq4N9kx0Gn", name: "Sushmita Kunwar", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3UJ2wNHIWpeYBnwKamGSyufR2bZTq7z4cxj0X", name: "Pushpa Bhusal", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS37PoOwZqveoPZg2BTClA4NuXsqzndD6tSh1mJ", name: "Sunita Bhattarai", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3xqXeI2MN3Kk5mueI6LHnpcwCG7WTE8zi1bFl", name: "Himal Pachhai", title: "Teacher" },
  { img: "https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS33KCvUYh8RYw1KpnAzTsjqELWraul6h0O7CQI", name: "Dipesh Charti", title: "Teacher" },
];

const Teamn = () => {
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const router = useRouter();

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX.current;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mousemove", handleMouseMove);
    carousel.addEventListener("mouseup", stopDrag);
    carousel.addEventListener("mouseleave", stopDrag);

    return () => {
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mousemove", handleMouseMove);
      carousel.removeEventListener("mouseup", stopDrag);
      carousel.removeEventListener("mouseleave", stopDrag);
    };
  }, []);

  const scrollLeftBtn = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRightBtn = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-white h-[33rem] pt-16 px-8 relative">
      <div className="container mx-auto">
        <div className="mb-4 text-center lg:mb-14">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-4xl md:text-[2.8rem] font-bold my-6"
          >
            OUR TEAM
          </Typography>
        </div>

        <IconButton
          onClick={scrollLeftBtn}
          className="!absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </IconButton>

        <IconButton
          onClick={scrollRightBtn}
          className="!absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </IconButton>

        <div className="flex overflow-x-hidden gap-16 group pb-12" ref={carouselRef}>
          <div className="flex animate-loop-scroll gap-12 group-hover:paused">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
          <div
            className="flex animate-loop-scroll gap-12 group-hover:paused"
            aria-hidden="true"
          >
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </div>

        {/* ✅ ADDED BUTTON BELOW CAROUSEL */}
        <div className="flex justify-center ">
          <Button
            color="gray"
            size="lg"
            onClick={() => router.push("/team")}
          >
            All Team
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Teamn;