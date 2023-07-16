import TourCard from "~/components/utility/TourCard";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";
import { Tour } from "~/pages/tour/[slug]";

const TOURS: Tour[] = [
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
      "https://images.unsplash.com/photo-1538826421747-8fc0690ae387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    images: [
      "https://images.unsplash.com/photo-1538826421747-8fc0690ae387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
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
      "https://images.unsplash.com/photo-1658816849623-57ff49aee765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1658816849623-57ff49aee765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
];

export default function Tours() {
  return (
    <div className="my-12 flex flex-col px-4 md:mx-auto md:max-w-6xl">
      <H3 title="FEATURED TOURS" />
      <H2>Most Popular Tours</H2>
      <div className="mt-4 flex gap-2 overflow-hidden">
        {TOURS.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
}
