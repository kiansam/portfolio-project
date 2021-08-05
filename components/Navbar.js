// import { emojihappy } from "@heroicons/react/outline";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 px-5  md:py-4 shadow-md">
      {/* Left Side */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:h-9 md:w-9 transition duration-600 ease-in-out md:hover:text-yellow-400"
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
      <div className="justify-end flex-grow hidden sm:flex  md:px-3">
        <div className="block space-x-6 md:space-x-8">
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
    </header>
  );
}

export default Navbar;
