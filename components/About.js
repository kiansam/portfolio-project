import Image from "next/image";

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
        <div className="flex px-8 sm:w-[480px] md:w-[560px] justify-center mx-auto mb-5">
          <p>
            I'm Kian, a Frontend web developer, and content creator. I've been
            coding for over 3 years now. I'm currently working part-time as a
            social media manager for a company. I know three languages, English,
            Persian, and Turkish professionally, and I'm learning Dutch right
            now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

//  border-8 border-white border-t-0 p-4
