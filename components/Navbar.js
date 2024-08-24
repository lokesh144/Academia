import React from 'react'
import Link from "next/link"
import { Button } from "./ui/button"
const Navbar = () => {
  return (
    <nav className="bg-white px-20 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          alt="Logo"
          className="h-16 w-16"
          height="40"
          src="/OPAlogo.png"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
        <span className="font-bold text-4xl text-black">OPA</span>
      </div>
      <div className="flex items-center space-x-7 text-md">
        <Link className="text-gray-700 hover:text-gray-900" href="/">
          HOME
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          PAGES
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          COURSES
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          EVENTS
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          BLOG
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="/contact">
          CONTACT
        </Link>
        <SearchIcon className="text-gray-700 h-5 w-5" />
        <Button className="bg-green-700 text-white px-4 py-2 rounded-full">BE TEACHER</Button>
      </div>
    </nav>
  )
}

export default Navbar

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      // width="10"
      // height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}