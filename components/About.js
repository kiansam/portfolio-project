import Image from "next/image";
import Skills from "./Skills";

function AboutComponent() {
  return (
    <div className="w-screen py-6 bg-gray-50 justify-center">
      <div className="block justify-center">
        <div className="flex justify-center mb-16">
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
          <span className="mx-auto absolute translate-y-[134px] text-center font-medium text-xl mt-1">
            Kian Sam
          </span>
        </div>
        <div className="px-8 xs:w-[468px] sm:w-[568px] md:w-[728px] justify-center mx-auto mb-10">
          <p className="text-center">
            I'm a Frontend web developer, Social Media Manager, and content
            creator. I've been coding for over 3 years now. I'm currently
            working part-time as a social media manager for a HVAC company. I know
            three languages, English, Persian, and Turkish professionally, and
            I'm learning Dutch right now.
          </p>
          <div className="flex justify-center mx-auto mt-6">
            <hr className="w-80 black" />
          </div>
        </div>
        <div className="flex items-center justify-center w-screen mx-auto my-10">
          <h2 className="font-medium text-3xl select-none">Skills</h2>
        </div>
        <Skills title={"Frontend"} color={"bg-yellow-400"} width={"w-[85%] "} />
        <Skills title={"ReactJS"} color={"bg-pink-500"} width={"w-[90%] "} />
        <Skills title={"Adobe"} color={"bg-blue-500"} width={"w-[58%] "} />
      </div>
    </div>
  );
}

export default AboutComponent;

//  border-8 border-white border-t-0 p-4
