import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import WorkComponent from "../components/Work";

function work() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="overflow-hidden">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <WorkComponent />
      <Footer />
    </div>
  );
}

export default work;
