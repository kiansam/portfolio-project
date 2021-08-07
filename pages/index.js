import Head from "next/head";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Body />
    </div>
  );
}
