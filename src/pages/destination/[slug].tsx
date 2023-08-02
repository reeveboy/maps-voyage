import type { Destination } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Description from "~/components/page/destination-detail/Description";
import FeaturedTours from "~/components/page/destination-detail/FeaturedTours";
import ImageCarousel from "~/components/page/destination-detail/ImageCarousel";
import Banner from "~/components/utility/Banner";

interface DestinationPageProps {
  destination: Destination;
  images: string[];
}

export default function DestinationPage({
  destination,
  images,
}: DestinationPageProps) {
  return (
    <>
      <Head>
        <title>Maps Voyage</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner img={destination.banner} title={destination.place} />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-4 md:grid-cols-3">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Description description={destination.description} />
            <ImageCarousel images={images} />
          </div>
          <FeaturedTours />
        </div>
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.slug;

  if (id == null) throw new Error("Id undefined");

  const prisma = new PrismaClient();

  const destination = await prisma.destination.findUnique({
    where: { id: id as string },
  });

  await prisma.$disconnect();

  const images = destination?.images.split(";");

  return {
    props: { destination, images },
  };
};
