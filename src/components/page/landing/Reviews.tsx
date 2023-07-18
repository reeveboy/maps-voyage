import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

const REVIEWS = [
  {
    name: "Gabriel D'Souza",
    rating: 5,
    review:
      "Maps Voyage is a fantastic travel website that offers an extensive collection of detailed maps and guides. The interactive maps helped me navigate unfamiliar cities with ease, and the accompanying guides provided valuable insights into local attractions and hidden gems. The user-friendly interface and search functionality made it a breeze to find the information I needed. Highly recommended for travelers who want to explore new destinations like a pro!",
    date: "30 JUNE 2023",
    img: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Isabella Pereira",
    rating: 4,
    review:
      "I recently used Maps Voyage to plan my vacation, and I couldn't be happier with the experience. The website's destination recommendations were spot-on, and the curated itineraries gave me a perfect balance of must-visit attractions and off-the-beaten-path experiences. The maps were incredibly helpful, especially for exploring unfamiliar areas. Maps Voyage is now my go-to resource for trip planning, and I highly recommend it to fellow adventurers.",
    date: "23 JUNE 2023",
    img: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Aarav Patel",
    rating: 5,
    review:
      "Maps Voyage is a game-changer when it comes to travel planning. The website's vast collection of maps, including detailed city maps, hiking trails, and transportation routes, ensured I never got lost during my trip. The travel tips and suggestions provided valuable insights into local customs, cuisine, and cultural highlights. I appreciated the website's dedication to accuracy and up-to-date information. Maps Voyage is a must-have companion for any traveler seeking convenience and peace of mind.",
    date: "08 JULY 2023",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

export default function Reviews() {
  return (
    <div className="my-12 flex flex-col px-4 md:mx-auto md:max-w-5xl">
      <H3 title="INSIGHTFUL REVIEWS" />
      <H2>Listen to what people have to say about us!</H2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {REVIEWS.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

interface ReviewProps {
  name: string;
  rating: number;
  review: string;
  date: string;
  img: string;
}

const Review = ({ date, name, rating, review, img }: ReviewProps) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white px-8 py-6 shadow-lg md:max-w-xs">
      <div className="flex items-center">
        <Image
          className="mr-2 h-14 w-14 rounded-full object-cover"
          src={img}
          alt=""
          width={1000}
          height={1000}
        />
        <div className="flex flex-col">
          <p className="text-2xl text-primary">{name}</p>
          <div className="flex h-4 text-slate-600">
            {[...Array<number[]>(rating)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                className="mr-1 h-full"
                icon={faStar}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm font-light leading-tight text-slate-600">
          {review}
        </p>
      </div>
      <div className="mt-2 flex flex-row-reverse">
        <span className="text-sm font-light uppercase text-slate-600">
          {date}
        </span>
      </div>
    </div>
  );
};
