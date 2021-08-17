import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Wave from "react-wavify";

function Skills({ title, color, width }) {
  return (
    <Fade bottom ssrFadeout duration={2000}>
      <div className="w-[70%] md:w-[60%] mx-auto shadow-md rounded-lg bg-gray-100 p-6 my-8 hover:shadow-xl transform transition-all duration-200 z-50">
        <div className="flex flex-col my-auto mx-auto">
          <span className="pb-2">{title}</span>
          <footer className="w-[90%] md:w-[80%] h-[5px] bg-gray-300 rounded-md">
            <div className={`h-[5px] rounded-l-md ${color} ${width}`} />
          </footer>
        </div>
      </div>
    </Fade>
  );
}

export default Skills;

// <div className="w-[70%] md:w-[60%] lg:w[40%] h-[100px] bg-gray-100 shadow-xl mt-4 rounded-xl hover:shadow-2xl mx-auto">
//   <div className="flex flex-col items-center justify-start ml-8 sm:ml-0 sm:justify-center h-full my-auto">
//     <span className="">Frontend</span>
//     <div className="w-[80%] md:w-[66%] h-[4px] bg-gray-300">
//       <div className="w-[88%] h-[4px] bg-pink-500"></div>
//     </div>
//   </div>
// </div>
