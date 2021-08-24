import link from "next/link";
import Blogcomponent from "./Blogcomponent";

function Blog() {
  return (
    <div className="flex my-12 items-center">
      <div className="blog justify-center mx-auto">
        <h1 className="flex justify-center text-center text-4xl font-bold font-mono mb-12">
          Blog
        </h1>
        <div className="mb-8">
          <Blogcomponent
            title={"Road to become a Web Developer"}
            desc={
              "HTML, CSS, and Javascript are the musts in Web Developement. So every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. When you feel... "
            }
            link={"blog/first"}
          />
        </div>
        <div>
          <Blogcomponent
            title={"Road to become a Web Developer"}
            desc={
              "HTML, CSS, and Javascript are the musts in Web Developement. So every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. When you feel... "
            }
            link={"blog/second"}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
