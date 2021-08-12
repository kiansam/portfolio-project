import Head from "next/head";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Body />
      <Footer />
    </div>
  );
}
