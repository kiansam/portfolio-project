import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function about() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default about;
