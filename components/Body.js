import Image from "next/image";

function Body() {
  return (
    <div className="flex z-30 min-h-screen bg-gradient-to-t lg:bg-gradient-to-r from-green-400 to-blue-500">
      <div className="inline-flex justify-center align-middle w-screen h-auto items-center border-8 border-white p-4">
        <h1 className="text-left sm:text-center text-6xl font-extrabold sm:text-8xl -translate-y-12 ">
          Hi There, Welcome!
        </h1>
      </div>
    </div>
  );
}

export default Body;

// style={{ textIndent: `-3em;`, maxWidth: `5em;` }}
// translate-x-8 md:translate-x-12
