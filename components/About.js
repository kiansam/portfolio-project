import Image from "next/image";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="w-screen py-6 bg-gray-50 justify-center">
      <div className="block justify-center">
        <div className="flex justify-center mb-12">
          <div className="mt-8 flex items-center justify-center bg-gradient-to-b from-purple-500 via-pink-500 to-blue-400 rounded-full w-[96px] h-[96px]">
            <div className="bg-white rounded-full p-[5px]">
              <img
                src="/images/1.png"
                className="rounded-full flex"
                alt="Me"
                width="80"
                height="80"
              />
            </div>
          </div>
          <span className="mx-auto absolute translate-y-[134px] text-center font-medium text-xl">
            Kian Sam
          </span>
        </div>
        <div className="px-8 sm:w-[568px] md:w-[748px] justify-center mx-auto mb-10">
          <p className="sm:text-center">
            I'm a Frontend web developer, Social Media Manager, and content
            creator. I've been coding for over 3 years now. I'm currently
            working part-time as a social media manager for a company. I know
            three languages, English, Persian, and Turkish professionally, and
            I'm learning Dutch right now.
          </p>
          <div className="flex justify-center mx-auto mt-6">
            <hr className="w-80 black" />
          </div>
        </div>
        <div className="flex justify-start ml-8 sm:ml-0 sm:justify-center">
          <div className="w-[60%] md:w-[44%] lg:w-[38%] h-[4px] bg-gray-300 z-10">
            <Fade left>
              <div className="w-[88%] h-[4px] bg-pink-500 z-0"></div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

//  border-8 border-white border-t-0 p-4
