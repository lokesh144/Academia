"use client"
import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Navbarr from "./Navbarr";

export function ContactSection14() {
  return (
    <>
    <Navbarr/>
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Get in Touch With Us
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="h-[50vh] grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start m-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.949056064806!2d83.47616871063525!3d27.687969376094344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996869a41913d23%3A0x5b57759b59cecc4f!2sOur%20Peaceland%20Academy!5e0!3m2!1sen!2snp!4v1725423605230!5m2!1sen!2snp"
            alt="map"
            className="w-full h-full lg:max-h-[510px]"
          />
          <form
            action="#"
            className="max-w-sm flex flex-col gap-6 lg:max-w-md"
          >
            <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 gap-x-8">
              {/* <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div> */}
              <Input type="text" variant="outlined" size="lg" label="First Name" crossOrigin={undefined} />
              <Input type="text" variant="outlined" size="lg" label="Last Name" crossOrigin={undefined} />
              
              {/* <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div> */}
            </div>
            {/* <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div> */}
            {/* <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div> */}
             <div className="col-span-2">
    <Input type="email" variant="outlined" size="lg" label="Email" crossOrigin={undefined} className="col-span-2" />
  </div>
  <div className="col-span-2">
    <Textarea variant="outlined" size="lg" label="Message" crossOrigin={undefined} className="col-span-2" />
  </div>
  <Button size="lg" className="w-full col-span-2" color="gray">
    Submit
  </Button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}

export default ContactSection14;