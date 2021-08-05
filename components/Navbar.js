// import { emojihappy } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-40 bg-white flex items-center p-4 px-5  md:py-4 shadow-md">
        {/* Left Side */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-9 md:w-9 transition duration-400 ease-in-out md:hover:text-yellow-400"
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
        <div className="justify-end flex-grow flex md:px-3">
          <div className="hidden md:flex">
            <div className="block space-x-6 md:space-x-8 items-center">
              <Link href="/">
                <a className="py-3 md:py-5 text-gray-600 transition duration-200 ease-in-out md:hover:text-blue-500">
                  About Me
                </a>
              </Link>
              <Link href="/">
                <a className="py-3 md:py-5 text-gray-600 transition duration-200 ease-in-out md:hover:text-blue-500">
                  My Work
                </a>
              </Link>
              <Link href="/">
                <a className="py-3 md:py-5 text-gray-600 transition duration-200 ease-in-out md:hover:text-blue-500">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>

          <div className="flex justify-end md:hidden pr-4">
            <button onClick={showSidebar} className="p-1">
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
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* <div
        className={`sidebar bg-blue-400 bg-opacity-50 text-blue-600 w-64 space-y-6 py-7 px-2 absolute inset-y-0 right-0 transform sm:relative sm:hidden translate-x-full transition duration-200 ease-in-out z-50 ${({
          isOpen,
        }) => (isOpen ? "translate-x-full" : "translate-x-0")}`}
      > */}
      <div
        className={`bg-white text-black w-screen space-y-6 py-4 px-4 absolute inset-y-0 right-0 transform  md:hidden -translate-y-full transition duration-500 ease-in-out z-50 ${
          sidebar ? "-translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between pt-4">
          <div className="flex-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          <div className="justify-end sm:pt-[4px]">
            <button
              onClick={showSidebar}
              className="flex justify-end pr-6 w-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black delay-500 sm:animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
