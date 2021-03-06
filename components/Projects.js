import Link from "next/link";
import Image from "next/image";

function Projects({ name, src, desc, color, hover, border }) {
  return (
    <div className="w-[350px] xl:w-[450px] py-4 border-[1px] border-black  px-4 shadow-md rounded-lg transition-all duration-75 ease-in-out hover:shadow-2xl bg-white">
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
        <Image
          className="justify-end"
          src={`${src}`}
          alt="Project"
          height={220}
          width={360}
        />{" "}
      </div>
      <div className="flex justify-end mr-[8px] xl:mr-[28px] mt-1 xs:mt-1 sm:mt-3">
        <Link href="https://github.com/kiansam">
          <a target="_blank" rel="noreferrer">
            <button
              className={`transition-colors w-28 h-8 rounded-xl text-sm border-[1px] ${border} ${color} ${hover}`}
            >
              Code
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
