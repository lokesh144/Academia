"use client";
import React from "react";
import {
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function TeamCard({ img, name, title }) {
  return (
    <Card className="rounded-lg h-full flex flex-col overflow-hidden border border-gray-200">
      <CardBody className="text-center p-0 flex flex-col flex-grow">

        {/* Image */}
        <div className="h-52 w-full overflow-hidden bg-gray-100">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow justify-between px-4 py-4">
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="font-semibold text-base"
            >
              {name}
            </Typography>

            <Typography className="text-sm font-medium text-gray-600 mt-1">
              {title}
            </Typography>
          </div>

          {/* Social */}
          <div className="flex items-center justify-center mt-4">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
          </div>
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
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto">
        <div className="mb-14 text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-4xl md:text-[2.8rem] font-bold"
          >
            OUR TEAM
          </Typography>
        </div>

        <div
          className="grid gap-x-6 gap-y-12 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          items-stretch"
        >
          {members.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teamn;