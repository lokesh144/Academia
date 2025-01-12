  "use client"
  import React,{useRef,useEffect,useState} from 'react'
  import {
      Card,
      CardBody,
      Avatar,
      IconButton,
      Typography,
    } from "@material-tailwind/react";
  function TeamCard({ img, name, title }) {
      return (
        <Card className="rounded-lg w-56 shadow-xl">
          <CardBody className="text-center pr-0 pt-0 pl-0 pb-3">
            <img
              src={img}
              alt={name}
              style={{height:"12rem",width:"20rem"}}
              className="mb-6 rounded-tl-lg rounded-tr-lg"
            />
            <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
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
              {/* <IconButton variant="text" color="gray">
                <i className="fa-brands fa-linkedin text-lg" />
              </IconButton> */}
             
            </div>
          </CardBody>
        </Card>
      );
    }
    
    
    const members = [
      {
        img: `https://dkw5e4ooeb.ufs.sh/f/QoBGn9AkhKS3kPRpYrlMIUy6au25qgHiYPt8JhlRrG9FN3VL`,
        name: "Ryan Samuel",
        title: "Co-Founder",
      },
      {
        img: `https://www.material-tailwind.com/img/avatar2.jpg`,
        name: "Ryan Samuel",
        title: "Co-Founder",
      },
      {
        img: `https://www.material-tailwind.com/img/avatar5.jpg`,
        name: "Nora Hazel",
        title: "UI/UX Designer",
      },
      {
        img: `https://www.material-tailwind.com/img/avatar4.jpg`,
        name: "Otto Gonzalez",
        title: "Marketing Specialist",
      },
      {
        img: `https://www.material-tailwind.com/img/avatar6.jpg`,
        name: "Emma Roberts",
        title: "UI Designer",
      },
      {
        img: `https://www.material-tailwind.com/img/avatar3.jpg`,
        name: "William Pearce",
        title: "Web Developer",
      },
      {
        img: "https://www.material-tailwind.com/image/avatar7.svg",
        name: "Bruce Mars",
        title: "UI/UX Designer",
      },
      {
        img: "https://www.material-tailwind.com/image/avatar8.svg",
        name: "Annie Sprrat",
        title: "Marketing Specialist",
      },
    ];

  const Teamn = () => {
    const carouselRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
  
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
  
    const handleMouseUp = () => {
      isDragging.current = false;
    };
  
    const handleMouseLeave = () => {
      isDragging.current = false;
    };
  
    useEffect(() => {
      const carousel = carouselRef.current;
      carousel.addEventListener("mousedown", handleMouseDown);
      carousel.addEventListener("mousemove", handleMouseMove);
      carousel.addEventListener("mouseup", handleMouseUp);
      carousel.addEventListener("mouseleave", handleMouseLeave);
  
      return () => {
        carousel.removeEventListener("mousedown", handleMouseDown);
        carousel.removeEventListener("mousemove", handleMouseMove);
        carousel.removeEventListener("mouseup", handleMouseUp);
        carousel.removeEventListener("mouseleave", handleMouseLeave);
      };

      
    }, []);
    
    return (
      <section className="bg-white h-[33rem] pt-16 px-8">
      <div className="container mx-auto">
        <div className="mb-4 text-center lg:mb-14">
          {/* <Typography
            variant="h6"
            color="blue-gray"
            className="text-lg"
          >
            Meet the Team
          </Typography> */}
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-2xl md:text-4xl font-black"
          >
            OUR TEAM
          </Typography>
          {/* <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
          >
            Lorem ipsum dolor sit amet.
          </Typography> */}
        </div>
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"> */}
        <div className='flex overflow-x-hidden gap-16 group pb-12' ref={carouselRef}>
        <div className="flex animate-loop-scroll gap-12 group-hover:paused">
          {members.map((props, key) => (
            <TeamCard key={key} {...props}/>
          ))}
        </div>
        <div className="flex animate-loop-scroll gap-12 group-hover:paused" aria-hidden="true">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
      </div>
    </section>
    )
  }

  export default Teamn