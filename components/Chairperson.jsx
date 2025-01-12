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
const Chairperson = () => {
  return (
    <section className="bg-[#f3f3f3] w-full py-12 md:py-18 lg:py-24">
    <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="shadow-xl outer-circle">
          <img src="/chairperson.png" className="inner-circle"/>
          {/* <AvatarFallback>JD</AvatarFallback> */}
          
        </div>
        <div className="space-y-2 text-center">
          <Typography className="mt-4 text-3xl md:text-[2rem] font-bold" color="blue-gray">Mr. Kulananda Pandey</Typography>
          <Typography className="text-base md:text-xl" color="blue-gray">Chairperson</Typography>
        </div>
      </div>
      <div className="space-y-6">
          <Typography
                    variant="h2"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Message from Our Chairperson
                  </Typography>
        {/* <p className="text-muted-foreground md:text-xl">
          At Acme Inc., we are driven by a deep commitment to innovation, quality, and customer satisfaction. As the
          CEO, I am passionate about leading our team to new heights and continuously pushing the boundaries of
          what's possible.
        </p> */}
        <div className="prose prose-lg text-muted-foreground text-[0.9rem] md:text-base">
          <Typography className="text-[1.1rem] mb-8 font-normal text-blue-gray-700 leading-7">
          Our Peaceland Academy has been established with the sacred aim of imparting quality education to its children and to give strong support to fulfill the national goal of education. Having being established in 2059 B.S., OPA has gained remarkable academic achievements. It is known to all that OPA has been able to keep its identity as dynamic educational institution.<br/>Education is fact, enlightens the human mind and paves way for new insights. It fills a person with a kind of power and skills which makes him/her an able manpower.OPA believes that quality education counts a good school environment supported by appropriate home environment. 
          
          </Typography>
         
        </div>
        <button  className="px-6 py-2 border-2 border-black text-black rounded-full hover:bg-[#008acb] hover:text-white hover:border-[#008acb] transition font-semibold text-lg">
        Read More
      </button>
      </div>
    </div>
  </section>
  )
}

export default Chairperson