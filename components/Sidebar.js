import Link from "next/link";
import { Link as LinkS } from "react-scroll";

function Sidebar({ isOpen, toggle }) {
  return (
    <div
      isOpen={isOpen}
      onClick={toggle}
      className={`bg-white fixed text-black w-screen space-y-6 py-4 px-4  inset-y-0 right-0 transform  md:hidden -translate-x-full transition duration-500 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between pt-1 pb-4">
        <div className="flex pl-4">
          <Link href="/">
            <a>
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
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
          </svg> */}
              <h1 className="select-none h-10 w-10 font-mono font-black text-2xl cursor-pointer flex justify-center tracking-tighter items-center tracking-tightest">
                KS.
              </h1>
            </a>
          </Link>
        </div>
        <div className="justify-end">
          <button onClick={toggle} className="flex justify-end pr-8 w-20">
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
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6 items-center text-center pt-12 text-gray-600 tracking-widest font-medium text-lg">
        <Link href="about">
          <a className="col-start-2 col-span-3 transform duration-100 rounded-3xl p-4 cursor-pointer transition-colors hover:text-black">
            About
          </a>
        </Link>
        <Link href="work">
          <a className="col-start-2 col-span-3 transform duration-10 rounded-3xl p-4 cursor-pointer transition-colors hover:text-black">
            Work
          </a>
        </Link>
        <Link href="/">
          <a className="col-start-2 col-span-3 transform duration-100  rounded-3xl p-4  cursor-pointer transition-colors hover:text-black">
            Blog
          </a>
        </Link>
        <LinkS
          to="footer"
          delay={200}
          duration={500}
          onClick={toggle}
          spy={true}
          smooth={true}
          className="col-start-2 col-span-3 transform duration-100   rounded-3xl p-4 cursor-pointer transition-colors hover:text-black"
        >
          Contact
        </LinkS>
      </div>
    </div>
  );
}

export default Sidebar;
