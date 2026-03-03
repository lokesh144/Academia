"use client";
import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

const Footer = ({ title, description, socials, menus, copyright }) => {
  return (
    <>
      <footer className="relative bg-orange-500 pt-32 pb-6 text-white overflow-hidden">

        {/* Big Top Curve */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 200"
            className="relative block w-full h-40"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,200 C480,0 960,0 1440,200 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap pt-10 text-left">
            <div className="mx-8 mt-12 grid lg:grid-cols-3 gap-x-32 lg:mt-0">

              {/* Social Section */}
              <div className="w-full px-12 lg:w-96">
                <Typography variant="h4" className="mb-4 text-white">
                  {title}
                </Typography>

                <div className="mx-auto mt-6 mb-8 flex justify-center gap-3 md:mb-0 lg:justify-start">
                  {socials.map(({ color, name, path }) => (
                    <a
                      key={name}
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        color="white"
                        className="rounded-full bg-white/20 hover:bg-white/30 text-white shadow-none"
                      >
                        <i className={`fa-brands fa-${name}`} />
                      </IconButton>
                    </a>
                  ))}
                </div>
              </div>

              {/* Menu Sections */}
              {menus.map(({ name, items }) => (
                <div key={name}>
                  <Typography
                    variant="h5"
                    className="mb-3 font-bold uppercase text-white"
                  >
                    {name}
                  </Typography>
                  <ul className="mt-3 space-y-2">
                    {items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.path}
                          className="text-white/90 hover:text-white transition"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-8 border-white/30" />

          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center">
              <Typography
                variant="paragraph"
                className="text-white/80"
              >
                {copyright}
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  title: "Follow us on Socials",
  description: "Connect with us in these socials",
  socials: [
    {
      color: "white",
      name: "youtube",
      path: "https://www.youtube.com/@ourpeacelandacademybutwal-8402",
    },
    {
      color: "white",
      name: "facebook",
      path: "https://www.facebook.com/OurPeaceland",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "#" },
        { name: "Blog", path: "#" },
        { name: "Free Products", path: "#" },
      ],
    },
    {
      name: "other resources",
      items: [
        { name: "Contact Us", path: "#" },
      ],
    },
  ],
  copyright: (
    <>
      © Copyright {year} | OPA | All Rights Reserved
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