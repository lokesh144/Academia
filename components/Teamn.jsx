  "use client"
  import React,{useRef,useEffect} from 'react'
  import {
      Card,
      CardBody,
      Avatar,
      IconButton,
      Typography,
    } from "@material-tailwind/react";
  function TeamCard({ img, name, title }) {
      return (
        <Card className="rounded-lg bg-[#FAFAFA] px-6" shadow={false}>
          <CardBody className="text-center">
            <Avatar
              src={img}
              alt={name}
              variant="circular"
              size="xxl"
              className="mx-auto mb-6 object-top"
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
                <i className="fa-brands fa-twitter text-lg" />
              </IconButton>
              <IconButton variant="text" color="gray">
                <i className="fa-brands fa-linkedin text-lg" />
              </IconButton>
              <IconButton variant="text" color="gray">
                <i className="fa-brands fa-dribbble text-lg" />
              </IconButton>
            </div>
          </CardBody>
        </Card>
      );
    }
    
    
    const members = [
      {
        img: `https://www.material-tailwind.com/img/avatar1.jpg`,
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
    return (
      <section className="bg-white min-h-screen pt-16 px-8">
      <div className="container mx-auto">
        <div className="mb-10 text-center lg:mb-28">
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
            className="my-2 text-2xl md:text-4xl"
          >
            OUR TEAM
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
          >
            Lorem ipsum dolor sit amet.
          </Typography>
        </div>
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"> */}
        <div className='flex overflow-hidden gap-16 group'>
        <div className="flex gap-16 animate-loop-scroll group-hover:paused">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
        <div className="flex gap-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
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