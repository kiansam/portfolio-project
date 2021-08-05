import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
    </div>
  );
}
