import Image from "next/image";
// import HeadShake from "react-reveal/HeadShake";
import Jello from "react-reveal/Jello";

function Body() {
  return (
    <div className="flex min-h-screen bg-gradient-to-t lg:bg-gradient-to-r from-green-400 to-blue-500">
      <div className="inline-flex justify-center align-middle w-screen h-auto items-center border-8 border-white p-4 md:p-8 text-left">
        <h1 className="text-left md:text-center text-black text-6xl xs:text-7xl font-extrabold sm:text-8xl -translate-y-4 cursor-default">
          <Jello>Hi There, Welcome!</Jello>
        </h1>
      </div>
    </div>
  );
}

export default Body;

// style={{ textIndent: `-3em;`, maxWidth: `5em;` }}
// translate-x-8 md:translate-x-12
