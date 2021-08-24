import Link from "next/link";

function Blogcomponent({ link, title, desc }) {
  return (
    <div className="flex px-6 py-8 border-[1px] border-black shadow-sm rounded-md hover:shadow-xl">
      <div>
        <Link href="blog/first">
          <a className="text-left">
            <h1 className="underline hover:text-blue-500 text-blue-800 text-xl pb-2">
              {title}
            </h1>
          </a>
        </Link>
        <p className="overflow-ellipsis max-w-sm sm:max-w-md text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default Blogcomponent;
