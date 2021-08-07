import Link from "next/link";
function Sidebar({ isOpen, toggle }) {
  return (
    <div
      isOpen={isOpen}
      onClick={toggle}
      className={`bg-white text-black w-screen space-y-6 py-4 px-4 absolute inset-y-0 right-0 transform  md:hidden -translate-y-full transition duration-500 ease-in-out z-50 ${
        isOpen ? "-translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between pt-4 pb-4">
        <div className="flex-start">
          <svg
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
          </svg>
        </div>
        <div className="justify-end">
          <button onClick={toggle} className="flex justify-end pr-9 w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black delay-500 sm:hover:animate-bounce"
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
      <div className="grid grid-cols-5 gap-6 items-center text-center pt-12">
        <Link href="/">
          <a className="col-start-2 col-span-3 transform duration-100 sm:hover:bg-gray-100 sm:hover:-translate-y-1 rounded-3xl p-4 motion-reduce:transition-none motion-reduce:transform-none cursor-pointer">
            About Me
          </a>
        </Link>
        <Link href="/">
          <a className="col-start-2 col-span-3 transform duration-100 sm:hover:bg-gray-100 sm:hover:-translate-y-1 rounded-3xl p-4 motion-reduce:transition-none motion-reduce:transform-none cursor-pointer">
            My Work
          </a>
        </Link>
        <Link href="/">
          <a className="col-start-2 col-span-3 transform duration-100 sm:hover:bg-gray-100 sm:hover:-translate-y-1 rounded-3xl p-4 motion-reduce:transition-none motion-reduce:transform-none cursor-pointer">
            Contact Me
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
