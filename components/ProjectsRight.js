import Link from "next/link";
import Image from "next/image";

function ProjectsRight({ name, src, desc, color, hover, border }) {
  return (
    <div className="w-[70%] xs:w-[65%] sm:w-[50%] py-5 border-[1px] border-black border-r-0 px-6 shadow-md rounded-lg translate-x-[2px] md:translate-x-0  hover:shadow-2xl bg-white">
      <h1 className="flex-1 text-lg mx-auto justify-center font-medium pb-1">
        {name}
      </h1>
      <div className="flex m-1">
        <div className="flex flex-col">
          <Image
            className="justify-start"
            src={`${src}`}
            alt="Project"
            height={220}
            width={360}
          />
        </div>
        <p
          className="items-center my-auto
         justify-end p-[4px] pl-[12px] text-sm"
        >
          {desc}
        </p>
      </div>
      {/* <div className="flex justify-start ml-[20px] mt-1 xs:mt-1 sm:mt-3">
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

export default ProjectsRight;
