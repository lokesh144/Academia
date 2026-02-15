"use client"
import React,{useState} from 'react'
import {
    Card,
    Typography,
    Button,
    Input,
    Textarea,
    Checkbox,
  } from "@material-tailwind/react";
  import { PageTitle } from "./ui/page-title";
  import contactData  from "@/app/data/contact-data";
const Feature = () => {
    console.log(contactData);
    // const [contactData, setContactData] = useState([]);
    const [hovered, setHovered] = useState(false);
    const [hoveredCards, setHoveredCards] = useState({});
    const handleMouseEnter = (title) => {
      setHoveredCards((prevHoveredCards) => ({
          ...prevHoveredCards,
          [title]: true,
      }));
      setHovered((prevHoveredCards) => ({
          ...prevHoveredCards,
          [title]: true,
      }));
  };

  const handleMouseLeave = (title) => {
      setHoveredCards((prevHoveredCards) => ({
          ...prevHoveredCards,
          [title]: false,
      }));
      setHovered((prevHoveredCards) => ({
          ...prevHoveredCards,
          [title]: false,
      }));
  };
  // const onEnter = () => {
  //   setHovered(true);
  // };

  // const onLeave = () => {
  //   setHovered(false);
  // };

  return (
    <section className="relative bg-white py-5 px-4 md:px-10">
        <div className="feature-container mx-6 p-1">
          {/* <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle> */}
          <div className="m-4 p-4 grid border rounded border-white no-background-image grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 px-8 pt-8"
            //     onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={() => handleMouseLeave(title)}
              >
                <div className={`mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20 ${hoveredCards[title] ? 'animate-shake' : ''}`}>
                  {React.createElement(icon, {
                    // className: "w-5 h-5 text-white animate-shake"
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="text-base font-normal text-blue-gray-500">
                  {description}
                </Typography>
                <div className="flex items-center justify-center ">
    {/* Placeholder for additional content or button  */}
    <button className={`flex items-center justify-center mt-6 mb-[-25px] h-12 w-12 ${hovered[title] ? 'bg-[#407561]' : 'bg-white'} rounded-full text-black hover:text-white outline outline-[15px] outline-[#f4f6fa]`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
export default Feature