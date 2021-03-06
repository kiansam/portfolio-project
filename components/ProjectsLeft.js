import Image from "next/image";
import Link from "next/link";

function ProjectsLeft({ name, src, desc, color, hover, border }) {
  return (
    <div className="w-[70%] xs:w-[65%] sm:w-[50%] py-4 border-[1px] border-black border-l-0 px-4 shadow-md rounded-lg -translate-x-[2px] transition-all duration-75 ease-in-out hover:shadow-2xl bg-white">
      <h1 className="flex-1 text-lg mx-auto justify-center font-medium pb-1">
        {name}
      </h1>
      <div className="flex m-1">
        <p
          className="items-center my-auto
         justify-start p-[4px] pr-[6px] text-sm"
        >
          {desc}
        </p>
        <div className="flex flex-col">
          <Image
            className="justify-end"
            src={`${src}`}
            alt="Project"
            height={220}
            width={360}
          />
        </div>
      </div>
      {/* <div className="flex justify-end mr-[20px] mt-2 xs:mt-1 sm:mt-3">
        <Link href="https://github.com/kiansam">
          <a target="_blank" rel="noreferrer">
            <button
              className={`transition-colors w-28 h-8 rounded-xl text-sm border-[1px] ${border} ${color} ${hover}`}
            >
              Code
            </button>
          </a>
        </Link>
      </div> */}
    </div>
  );
}

export default ProjectsLeft;
