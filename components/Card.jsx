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
  import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
//   import { PageTitle, Footer } from "@/widgets/layout";
//   import { FeatureCard, TeamCard } from "@/widgets/cards";
//   import { featuresData, teamData, contactData } from "@/data";
import Image from 'next/image';
const secCard = () => {
  return (
    <section className="-mt-32 bg-white px-4 pt-4">
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
            <FingerPrintIcon className="h-8 w-8 text-white " />
          </div>
          <Typography
            variant="h2"
            className="mb-3 font-bold"
            color="blue-gray"
          >
            Your only destiny to Bright Academic Future
          </Typography>
          <Typography className="text-base mb-8 font-normal text-blue-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, architecto porro? Fugiat ducimus reiciendis, officiis tempora earum libero id voluptate.
            <br />
            <br />
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to
            go. Just make sure you enable them first via JavaScript.
          </Typography>
          <Button variant="filled">read more</Button>
        </div>
        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
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
          <Image src="/girl.png" width={500} height={500} alt="Picture of the author" className="w-10px h-auto sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default secCard