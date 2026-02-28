"use client"
import React from "react";
import {
  Button,
  Input,
  Textarea,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Navbarr from "./Navbarr";

function ContactSection14() {
  return (
    <>
      <Navbarr />
      <section className="px-8 py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl"
          >
            Contact us
          </Typography>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start mt-10">

            {/* LEFT SIDE - CONTACT INFO + MAP */}
            <Card className="shadow-lg">
              <CardBody className="text-left space-y-6">

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <MapPinIcon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <Typography variant="h6">Location</Typography>
                    <Typography className="text-gray-600">
                      Butwal, Rupandehi, Nepal
                    </Typography>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <EnvelopeIcon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <Typography variant="h6">Email</Typography>
                    <Typography className="text-gray-600">
                      info@ourpeacelandacademy.edu.np
                    </Typography>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <PhoneIcon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <Typography variant="h6">Phone</Typography>
                    <Typography className="text-gray-600">
                      071-538021
                    </Typography>
                  </div>
                </div>

                {/* Map */}
                <div className="w-full h-72 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.949056064806!2d83.47616871063525!3d27.687969376094344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996869a41913d23%3A0x5b57759b59cecc4f!2sOur%20Peaceland%20Academy!5e0!3m2!1sen!2snp!4v1725423605230!5m2!1sen!2snp"
                    className="w-full h-full"
                    loading="lazy"
                    title="map"
                  />
                </div>
              </CardBody>
            </Card>

            {/* RIGHT SIDE - FORM CARD */}
            <Card className="shadow-lg">
              <CardBody>
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Input
                      type="text"
                      variant="outlined"
                      size="lg"
                      label="First Name"
                    />
                    <Input
                      type="text"
                      variant="outlined"
                      size="lg"
                      label="Last Name"
                    />
                  </div>

                  <Input
                    type="email"
                    variant="outlined"
                    size="lg"
                    label="Email"
                  />

                  <Textarea
                    variant="outlined"
                    size="lg"
                    label="Message"
                    rows={6}
                  />

                  <div className="flex justify-start">
  <Button size="lg" color="gray">
    Submit
  </Button>
</div>
                </form>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection14;