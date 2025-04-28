"use client"
import React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
    Checkbox,
  } from "@material-tailwind/react";
  import { FingerPrintIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
//   import { PageTitle, Footer } from "@/widgets/layout";
//   import { FeatureCard, TeamCard } from "@/widgets/cards";
//   import { featuresData, teamData, contactData } from "@/data";
import Image from 'next/image';
const secCard = () => {
  return (
    <section className="-mt-18 md:-mt-32 bg-white px-4 pt-4">
    <div className="container mx-auto">
      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map(({ color, title, icon, description }) => (
          <FeatureCard
            key={title}
            color={color}
            title={title}
            icon={React.createElement(icon, {
              className: "w-5 h-5 text-white",
            })}
            description={description}
          />
        ))}
      </div> */}
      <div className="mt-32 flex flex-wrap items-center">
        <div className="mx-auto -mt-8 w-full md:w-5/12">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
            <AcademicCapIcon className="h-8 w-8 text-white " />
          </div>
          <Typography
            variant="h2"
            className="mb-3 font-bold text-3xl md:text-4xl"
            color="blue-gray"
          >
            Your only destiny to Bright Academic Future
          </Typography>
          <Typography className="text-[1.1rem] mb-8 font-normal text-blue-gray-700 leading-8">
          &quot;Our Peaceland Academy&quot; is located at Butwal Sub-Metropolitan City in quiet and peaceful environment. With the motto to provide quality education to children for global challenges, it has almost all facilities for all-round development of the students. Our Peaceland Academy has appropriate environment for learning and reading. We have qualified and dedicated teaching faculties.
          </Typography>
          {/* <button  className="px-6 py-2 border-2 border-black text-black rounded-full hover:bg-[#008acb] hover:text-white hover:border-[#008acb] transition font-semibold text-lg">
        Read More
      </button> */}
        </div>
        <div className="mx-auto flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          {/* <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Card Image"
                src="/img/teamwork.png"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 mt-2 font-bold"
              >
                Top Notch Services
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                The Arctic Ocean freezes every winter and much of the
                sea-ice then thaws every summer, and that process will
                continue whatever happens.
              </Typography>
            </CardBody>
          </Card> */}
          <Image src="/girl.png" width={500} height={500} alt="Picture of the author" className="w-[300px] h-auto md:max-w-[400px] lg:w-[700px]"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default secCard