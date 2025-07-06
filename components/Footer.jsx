"use client"
import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import Head from 'next/head';
const year = new Date().getFullYear();

const Footer=({ title, description, socials, menus, copyright }) =>{
  return (
    <>
    <footer className="relative px-4 pt-2 pb-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-left">
         
          <div className="mx-8 mt-12 grid lg:grid-cols-3 gap-x-32 lg:mt-0">
          <div className="w-full px-12 lg:w-96">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            {/* <Typography className="font-normal text-blue-gray-500 lg:w-56">
              {description}
            </Typography> */}
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 block font-bold uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    
                      // <Typography
                      //   as="a"
                      //   href={item.path}
                      //   target="_blank"
                      //   rel="noreferrer"
                      //   variant="paragraph"
                      //   className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      // >
                      <span key={item.name}><a href={item.path} key={item.name} variant="paragraph" className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700" >
                        {item.name}</a></span>
                      // </Typography>
                    
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="paragraph"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

Footer.defaultProps = {
  title: "Follow us on Socials",
  description:
    "Connect with us in these socials",
  socials: [
    // {
    //   color: "gray",
    //   name: "twitter",
    //   path: "https://www.twitter.com/creativetim",
    // },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/@ourpeacelandacademybutwal-8402",
    },
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/OurPeaceland",
    },
    // {
    //   color: "blue",
    //   name: "email",
    //   path: "https://www.instagram.com/creativetimofficial/",
    // },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "https://www.creative-tim.com/presentation" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        // {
        //   name: "Github",
        //   path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        // },
        {
          name: "Free Products",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        // {
        //   name: "MIT License",
        //   path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        // },
        // {
        //   name: "Contribute",
        //   path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        // },
        // {
        //   name: "Change Log",
        //   path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        // },
        {
          name: "Contact Us",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} | OPA |
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
