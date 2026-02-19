"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Menu,MenuHandler,MenuList,MenuItem
  } from "@material-tailwind/react";
const Navbarr = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 10; // Adjust this threshold as needed
        setIsScrolled(scrollPosition > threshold);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(() => {
      const makeScroll = () => {
        if (window.scrollY > 50) {
            setIsExpanded(true);
        } else {
            setIsExpanded(false);
        }
      };
  
      // Add scroll event listener
      window.addEventListener('scroll', makeScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', makeScroll);
      };
    }, [isExpanded]);
    const navList=(
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-tas">
    <Typography
      as="li"
      variant=""
      color="blue-gray"
      className="p-1 font-tas text-[1.08rem] font-bold"
    >
      <Link href="/" className="flex items-center">
        Home
      </Link>
    </Typography>
    <Typography
      as="li"
      variant=""
      color="blue-gray"
      className="p-1 font-tas text-[1.08rem] font-bold"
    >
      <Link href="/gallery" className="flex items-center">
        Gallery
      </Link>
    </Typography>
    <Typography
      as="li"
      variant=""
      color="blue-gray"
      className="p-1 font-tas text-[1.08rem] font-bold"
    >
      <Link href="/event" className="flex items-center">
        Events
      </Link>
    </Typography>
    
    {/* <Menu allowHover='true'  animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}> */}
      <Typography
      as="li"
      variant=""
      color="blue-gray"
      className="p-1 font-tas text-[1.08rem] font-bold"
    >
      <Link href="/notices" className="flex items-center">
        Notices
      </Link>
    </Typography>
      
    <Typography
      as="li"
      variant=""
      color="blue-gray"
      className="p-1 font-tas text-[1.08rem] font-bold"
    >
      <a href="/contact" className="flex items-center">
        Contact
      </a>
    </Typography>
  </ul>
);
  return (
    // <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
    <Navbar className={`sticky border-none top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-20 lg:pb-2 ${isScrolled ? 'bg-opacity-60' : 'custom-navbar'} ${isExpanded ? 'expand' : ''}`}>
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-tas text-lg"
        >
          OPA
        </Typography> */}
        <Image
      src="/OPAlogo.png"
      width={55}
      height={55}
      alt="OPA Logo"
    />
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block uppercase font-tas">{navList}</div>
          <div className="flex items-center gap-x-3">
                 <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block font-tas text-[0.95rem] rounded-2xl"
                  >
                       <Link href="/teacherlogin">
                            Be a Teacher
                       </Link>
                  </Button>
        </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        {/* <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div> */}
      </MobileNav>
    </Navbar>
        );
    }

export default Navbarr