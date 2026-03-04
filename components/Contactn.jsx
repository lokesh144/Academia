"use client";

import React, { useState } from "react";
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
import { supabase } from "@/lib/supabase";

function ContactSection14() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contacts").insert([
      {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      alert("Error submitting form");
      console.error(error);
    } else {
      alert("Message submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <Navbarr />

      <section className="px-8 py-8 lg:py-16 bg-gray-50">
        <div className="container mx-auto text-center">

          {/* Heading */}
          <Typography
            variant="h1"
            color="blue-gray"
            className="py-4 md:py-8 !text-3xl lg:!text-5xl"
          >
            CONTACT US
          </Typography>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-stretch mt-10">

            {/* ================= LEFT CARD ================= */}
            <Card className="shadow-lg h-full">
              <CardBody className="text-left space-y-6 flex flex-col h-full">

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPinIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography color="black" variant="h6">
                      Location
                    </Typography>
                    <Typography className="text-gray-600">
                      Butwal, Rupandehi, Nepal
                    </Typography>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography color="black" variant="h6">
                      Email
                    </Typography>
                    <Typography className="text-gray-600">
                      peacelandaca@gmail.com
                    </Typography>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <PhoneIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography color="black" variant="h6">
                      Phone
                    </Typography>
                    <Typography className="text-gray-600">
                      071-538021
                    </Typography>
                  </div>
                </div>

                {/* Map */}
                <div className="w-full h-72 rounded-lg overflow-hidden mt-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.949056064806!2d83.47616871063525!3d27.687969376094344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996869a41913d23%3A0x5b57759b59cecc4f!2sOur%20Peaceland%20Academy!5e0!3m2!1sen!2snp!4v1725423605230!5m2!1sen!2snp"
                    className="w-full h-full"
                    loading="lazy"
                    title="map"
                  />
                </div>

              </CardBody>
            </Card>

            {/* ================= RIGHT CARD ================= */}
            <Card className="shadow-lg h-full">
              <CardBody className="flex flex-col h-full">

                <p className="text-xl text-gray-900 font-semibold text-left mb-6">
                  Reach out to us by filling the form below.
                </p>

                <form
                  className="flex flex-col gap-6 flex-grow"
                  onSubmit={handleSubmit}
                >

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Input
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      label="First Name"
                      required
                    />
                    <Input
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      label="Last Name"
                      required
                    />
                  </div>

                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="Email"
                    required
                  />

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    label="Message"
                    rows={6}
                    required
                  />

                  <div className="flex justify-start mt-auto">
                    <Button type="submit" size="lg" color="gray">
                      {loading ? "Submitting..." : "Submit"}
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