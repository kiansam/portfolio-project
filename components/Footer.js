import Link from "next/link";
import Jello from "react-reveal/Jello";
// import config from "react-reveal/globals";

// config({ ssrFadeout: true });

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-gray-400 w-screen border-white border-l-8 border-r-8 p-4 pt-24 block bottom-0"
    >
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-5 md:mx-auto  flex my-auto">
        <div className="hidden sm:flex">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex h-10 w-10 bg-gradient-to-l from-yellow-400 via-pink-500 to-blue-500 rounded-full text-gray-800 ml-2"
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
          <h1 className="select-none h-10 w-10 font-mono font-black cursor-default flex justify-center tracking-tighter items-center tracking-tightest text-white text-2xl">
            KS.
          </h1>
        </div>

        <ul className="grid xs:grid-cols-1 sm:grid-cols-2 sm:mx-auto">
          {/* <li className="flex space-y-5 row-span-8 pb-6"> */}

          {/* </li> */}
          <li className="space-y-5 row-span-2 pb-12 pr-2">
            <h2 className="text-xs font-semibold tracking-wide text-white uppercase">
              Links
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="about">
                  <a className="hover:text-white hover:underline transition-colors duration-200">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="work">
                  <a className="hover:text-white hover:underline transition-colors duration-200">
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="blog">
                  <a className="hover:text-white hover:underline transition-colors duration-200">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          {/* contact */}
          <li className="space-y-5 row-span-2 sm:pl-4">
            <h2 className="text-xs font-semibold tracking-wide text-white uppercase">
              Social Links
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="https://www.instagram.com/kiansamadani/">
                  <a
                    className="hover:text-white hover:underline transition-colors duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/kiansam/">
                  <a
                    className="hover:text-white hover:underline transition-colors duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linked In
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/KianSamadani">
                  <a
                    className="hover:text-white hover:underline transition-colors duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/kiansam">
                  <a
                    className="hover:text-white hover:underline transition-colors duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="group flex mx-auto text-center justify-center items-center py-2 mt-16 mb-8">
        <Jello ssrFadeout>
          <h3 className="text-white text-xs select-none">Made With love </h3>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 flex-shrink-0 px-1 text-white group-hover:text-red-600 flex"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-white text-xs select-none">
            by <i>KianSam</i>.
          </h3>
        </Jello>
      </div>
    </footer>
  );
}

export default Footer;
