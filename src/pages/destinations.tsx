import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import AllDestinations from "~/components/page/destination/AllDestinations";
import Hero from "~/components/page/destination/Hero";

export default function Destinations() {
  return (
    <>
      <Head>
        <title>Maps Voyage</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <AllDestinations />
        <Footer />
      </main>
    </>
  );
}