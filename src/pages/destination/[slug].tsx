import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Description from "~/components/page/destination-detail/Description";
import FeaturedTours from "~/components/page/destination-detail/FeaturedTours";
import ImageCarousel from "~/components/page/destination-detail/ImageCarousel";
import Banner from "~/components/utility/Banner";

const DESTINATION = {
  name: "Shimla",
  description: `
  Welcome to Shimla, the "Queen of the Hills" and a breathtaking gem nestled in the mighty Himalayas of India. Shimla is a destination that seamlessly blends natural beauty, colonial charm, and an enchanting mountain atmosphere, making it a favorite among travelers seeking a serene and unforgettable experience.

  As you set foot in Shimla, you'll be greeted by its crisp mountain air and panoramic vistas. The majestic snow-capped peaks that surround the city create a picturesque backdrop that will leave you in awe. Shimla's winding roads, lined with tall deodar trees, take you on a journey through its fascinating history and captivating landscapes.

  Shimla, with its timeless beauty and serene ambiance, promises an escape from the chaotic world into a realm of tranquility and natural splendor. Prepare to be captivated by the charm of this mountain retreat, leaving with a heart full of cherished memories and a longing to return again.
  `,
  images: [
    "https://images.unsplash.com/photo-1609948543911-7f01ff385be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80",
    "https://images.unsplash.com/photo-1609232530947-0aeb23338a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
  ],
};

export default function DestinationPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Maps Voyage</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner
          img="https://images.unsplash.com/photo-1626621326300-2841cc0b346b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1229&q=80"
          title={DESTINATION.name}
        />
        <Description description={DESTINATION.description} />
        <ImageCarousel images={DESTINATION.images} />
        <FeaturedTours />
        <Footer />
      </main>
    </>
  );
}