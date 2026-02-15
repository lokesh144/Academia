/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j5wOJhNhE6O
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Topbar() {
  return (
    <nav className="bg-white">
      <div className="justify-end sm:flex">
      <div className="w-0 lg:w-1/3 h-11 hidden lg:block"></div>
      <div className="topbar w-2/3 h-11 bg-gray-200 flex justify-end space-x-10 px-8 text-sm sm:text-base">
        <div className="flex items-center space-x-4">
          <div className="contact flex items-center space-x-2">
          <PhoneIcon className="text-gray-600"/>
          <span className="text-md text-gray-600 font-semibold">071-538021</span>
          </div>
          <div className="email flex items-center space-x-2">
          <MailIcon className="text-gray-600"/>
          <span className="text-md text-gray-600 font-semibold">peacelandaca@gmail.com</span>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <Link className="text-md text-gray-600 hover:text-gray-800" href="/login">
            Login
          </Link>
          <span className="text-sm text-gray-400">|</span>
          <Link className="text-md text-gray-600 hover:text-gray-800" href="/register">
            Register
          </Link>
        </div> */}
      </div>
      </div>
    </nav>
  )
}

// function MailboxIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
//       <polyline points="15,9 18,9 18,11" />
//       <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
//       <line x1="6" x2="7" y1="10" y2="10" />
//     </svg>
//   )
// }
function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Envelope body */}
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />

      {/* Envelope flap */}
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}



function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
