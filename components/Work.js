import ProjectsLeft from "./ProjectsLeft";
import ProjectsRight from "./ProjectsRight";
import Fade from "react-reveal/Fade";

function WorkComponent() {
  return (
    <div className="w-screen py-6 bg-gray-50 justify-center">
      <div className="block justify-center">
        <div className="my-10">
          <h1 className="text-center text-4xl font-bold font-mono">
            My Recent Projects
          </h1>
        </div>
      </div>
      <div className="md:hidden my-12">
        <Fade left ssrFadeout duration={1000}>
          <div className="pb-10">
            <ProjectsLeft
              name={"Spotify Home-page Clone"}
              desc={
                "Responsive Spotify home-page clone, using Nextjs, and Styled-components"
              }
              src={"/images/Spotify.png"}
              color={"bg-transparent"}
              hover={"hover:bg-pink-500 hover:text-white"}
              border={"border-pink-500"}
            />
          </div>
        </Fade>
        <Fade right ssrFadeout duration={1000}>
          <div className="flex justify-end pb-10">
            <ProjectsRight
              name={"Hulu/Imdb Clone"}
              desc={
                "Responsive Hulu/Imdb Clone, made using Nextjs, and tailwindcss. (themoviedb)"
              }
              src={"/images/Hulu.png"}
              color={"bg-transparent"}
              hover={"hover:bg-yellow-500 hover:text-white"}
              border={"border-yellow-500"}
            />
          </div>
        </Fade>
        <Fade left ssrFadeout duration={1000}>
          <div className="pb-10">
            <ProjectsLeft
              name={"Disney-Plus Clone"}
              desc={
                "Responsive Disney plus clone, using Reactjs, Styled-components, and Firebase"
              }
              src={"/images/Disney.png"}
              color={"bg-transparent"}
              hover={"hover:bg-blue-500 hover:text-white"}
              border={"border-blue-500"}
            />
          </div>
        </Fade>
        {/* <Fade right ssrFadeout duration={1000}>
          <div className="flex justify-end">
            <ProjectsRight />
          </div>
        </Fade> */}
      </div>
    </div>
  );
}

export default WorkComponent;
