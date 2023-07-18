import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";
import type { Tour } from "~/pages/tour/[slug]";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import Link from "next/link";

export const TOURS: Tour[] = [
  {
    tourName: "The Sea Explorer",
    stars: 4.7,
    days: 3,
    description:
      "Exploring the jaw-dropping Andaman coast by foot and by boat.",
    groupSize: "25",
    cartegory: "adventure",
    location: "Andaman Sea",
    cardImage:
      "https://images.unsplash.com/photo-1621521089957-5c7b0cd9bf92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    images: [
      "https://images.unsplash.com/photo-1621521089957-5c7b0cd9bf92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1640618428217-30131ccdfd7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1640718835374-6116a99c6e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1641719320002-743bc0384e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1641918350386-023fe6d08047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1579317344982-256c49ab1e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    ],
    overview: `Join us on an extraordinary adventure, "The Sea Explorer," a captivating 3-day tour in the mesmerizing Andaman Sea. Brace yourself for an unforgettable journey as we explore the stunning islands and pristine waters that have captivated the hearts of adventurers and nature lovers alike.`,
    tourPlan: [
      {
        day: 1,
        title: "Island Paradise Arrival",
        description:
          "Upon arrival, you'll be warmly welcomed by our experienced guides who will whisk you away to your island paradise. Prepare to be enchanted as we set sail, cruising through the crystal-clear turquoise waters of the Andaman Sea. Our first destination is the picturesque Havelock Island, renowned for its white sandy beaches and vibrant coral reefs. Immerse yourself in the tranquil surroundings, take a dip in the inviting waters, or simply relax under swaying palm trees. As the day draws to a close, we'll witness a breathtaking sunset that paints the sky with hues of gold and pink.",
      },
      {
        day: 2,
        title: "Coral Paradise Exploration",
        description:
          "Get ready to dive into a world of vibrant marine life as we embark on a snorkeling adventure in some of the most pristine coral reefs. Equipped with snorkeling gear, we'll explore the underwater paradise, swimming alongside exotic fish and marveling at the kaleidoscope of colors that the coral reefs offer. Our knowledgeable guides will provide insights into the diverse marine ecosystem, ensuring an enriching experience for both novice and experienced snorkelers. We'll also visit the stunning Radhanagar Beach, known for its powdery white sand and azure waters, where you can soak up the sun and enjoy the idyllic surroundings.",
      },
      {
        day: 3,
        title: "Island Discovery and Farewell",
        description:
          "On our final day, we'll set out to explore more hidden gems of the Andaman Sea. Discover the ethereal beauty of Neil Island, known for its tranquility and natural wonders. Visit breathtaking viewpoints that offer panoramic vistas of the surrounding islands and marvel at the lush greenery that blankets the landscape. Delve into the local culture and indulge in delicious coastal cuisine, savoring the flavors of the region. As the tour comes to a close, we'll bid farewell to the Andaman Sea, leaving with memories of a lifetime and a deep appreciation for the natural wonders we've encountered.",
      },
    ],
  },
  {
    tourName: "The Himalayan Adventure Trek",
    stars: 4.3,
    days: 10,
    description:
      "Challenge yourself as you summit lofty peaks and witness panoramic views that will leave you awestruck.",
    groupSize: "15",
    cartegory: "adventure",
    location: "Himachal Pradesh",
    cardImage:
      "https://images.unsplash.com/photo-1573709814975-c1778ce12926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    images: [
      "https://images.unsplash.com/photo-1573709814975-c1778ce12926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
  },
  {
    tourName: "The Royal Rajput Expedition",
    stars: 4.0,
    days: 7,
    description:
      "Embark on a regal journey through the royal lands of Rajasthan. This 7-day expedition will immerse you in the rich cultural heritage and majestic splendor of the Rajput era.",
    groupSize: "10",
    cartegory: "culture",
    location: "Rajasthan",
    cardImage:
      "https://images.unsplash.com/photo-1655137029761-678a4a8da482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    images: [
      "https://images.unsplash.com/photo-1655137029761-678a4a8da482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    ],
  },
  {
    tourName: "The Coastal Odyssey",
    stars: 4.5,
    days: 5,
    description:
      "Discover the serene backwaters, tranquil beaches, and lush green landscapes that define this enchanting region.",
    groupSize: "20",
    cartegory: "culture",
    location: "Kerala",
    cardImage:
      "https://images.unsplash.com/photo-1610817201767-793a9130ce07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=762&q=80",
    images: [
      "https://images.unsplash.com/photo-1610817201767-793a9130ce07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=762&q=80",
    ],
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Tours() {
  return (
    <div className="my-12 flex flex-col px-4 md:mx-auto md:max-w-6xl">
      <H3 title="FEATURED TOURS" />
      <H2>Most Popular Tours</H2>
      <Carousel
        containerClass="mt-4"
        responsive={responsive}
        ssr
        partialVisbile
        infinite
      >
        {TOURS.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </Carousel>
    </div>
  );
}

interface TourCardProps {
  tour: Tour;
}

function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      href={"/tour/sea-explorer"}
      className="my-2 flex min-w-[300px] flex-col bg-white shadow-md md:w-80"
    >
      <Image
        className="w-full object-cover"
        src={tour.cardImage}
        alt={tour.tourName}
        width={1000}
        height={1000}
      />
      <div className="flex h-full flex-col p-4">
        <div className="flex items-end">
          <FontAwesomeIcon
            icon={faStar}
            className="h-4 w-4 text-primary md:h-5 md:w-5"
          />
          <p className="ml-1 text-xs font-light text-slate-500">
            {tour.stars} Superb
          </p>
        </div>
        <p className="mt-4 text-xl leading-[95%] text-dark">{tour.tourName}</p>
        <p className="text-md font-light text-slate-500">{tour.location}</p>
        {/* <p className="text-md mt-1 line-clamp-3 font-light leading-[120%] text-slate-500 md:mt-4 md:line-clamp-4">
          {tour.description}
        </p> */}
        <div className="mt-auto">
          <div className="mt-4 h-[1px] bg-slate-500"></div>
          <div className="mt-4 flex justify-center">
            <div className="mr-2 flex items-center text-slate-500 md:mr-3">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-1 h-4 w-4 text-primary"
              />
              <p className="text-xs font-light">{tour.days} Days</p>
            </div>

            <div className="mr-2 flex items-center text-slate-500 md:mr-3">
              <FontAwesomeIcon
                icon={faUser}
                className="mr-1 h-4 w-4 text-primary"
              />
              <p className="text-xs font-light">{tour.groupSize}</p>
            </div>

            <div className="mr-2 flex items-center capitalize text-slate-500 md:mr-3">
              <FontAwesomeIcon
                icon={faBookmark}
                className="mr-1 h-4 w-4 text-primary"
              />
              <p className="text-xs font-light">{tour.cartegory}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
