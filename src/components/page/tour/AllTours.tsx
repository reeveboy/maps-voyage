import TourCard, { Tour } from "~/components/utility/TourCard";

const TOURS: Tour[] = [
  {
    tourName: "The Sea Explorer",
    stars: 4.7,
    days: 3,
    description: "Exploring the jaw-dropping Andaman coast by foot and by boat",
    groupSize: "25",
    location: "Andaman Sea",
    imgUrl:
      "https://images.unsplash.com/photo-1538826421747-8fc0690ae387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    tourName: "Shimla Mountain Tour",
    stars: 4.4,
    days: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus",
    groupSize: "12",
    location: "Himachal Pradesh",
    imgUrl:
      "https://images.unsplash.com/photo-1593183981460-e9276b5a5587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=951&q=80",
  },
  {
    tourName: "Goan Beach Adventure",
    stars: 4.9,
    days: 3,
    description: "ullam- ut elit tellus, luctus nec ullam elit tellpus.",
    groupSize: "20",
    location: "Goa",
    imgUrl:
      "https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

export default function AllTours() {
  return (
    <div className="my-8 flex flex-col px-4">
      <p className="text-3xl font-light capitalize text-dark">
        {TOURS.length} tours found
      </p>
      <div className="mt-4 flex flex-col justify-center">
        {TOURS.map((tour, idx) => (
          <TourCard tour={tour} key={idx} />
        ))}
      </div>
    </div>
  );
}
