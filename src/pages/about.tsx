import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Hero from "~/components/page/about/Hero";
import Message from "~/components/page/about/Message";
import Virtures from "~/components/page/about/Virtures";

export default function About() {
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
        <div className="mx-auto max-w-6xl">
          <Virtures />
          <Message />
        </div>
        <Footer />
      </main>
    </>
  );
}
