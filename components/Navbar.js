// import { emojihappy } from "@heroicons/react/outline";
import Link from "next/link";
// import { useState } from "react";
import Fade from "react-reveal/Fade";

function Navbar({ toggle }) {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    // <div className="relative min-h-screen">

    <header className="sticky w-full top-0 z-40 lg:z-50 bg-white flex-none flex items-center p-4 px-8 md:py-4 lg:px-16 xl:px-24 shadow-sm">
      {/* Left Side */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:h-9 md:w-9 transition duration-400 ease-in-out bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Right Side */}
      <div className="justify-end flex-grow flex md:px-1">
        <Fade right ssrFadeout>
          <div className="hidden md:flex">
            <div className="block space-x-6 lg:space-x-0.5 items-center select-none">
              <Link href="/">
                <a className="py-3 md:py-5 text-gray-500 transition duration-200 ease-in-out lg:hover:text-black lg:px-5 font-semibold">
                  About Me
                </a>
              </Link>
              <Link href="/">
                <a className="py-3 md:py-5 text-gray-500 transition-colors duration-200 ease-in-out lg:hover:text-black lg:px-5 font-semibold">
                  My Work
                </a>
              </Link>
              <Link href="/">
                <a className="py-3 md:py-5 text-gray-500 transition-colors duration-200 ease-in-out lg:hover:text-black lg:px-5  font-semibold">
                  Blog
                </a>
              </Link>
              <Link href="/">
                <a className="py-3 md:py-5 text-gray-500 transition duration-200 ease-in-out lg:hover:text-black lg:px-5 font-semibold">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </Fade>

        <div className="flex justify-end md:hidden pr-2">
          <button onClick={toggle} className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
