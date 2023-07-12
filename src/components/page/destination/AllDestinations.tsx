import DestinationCard from "~/components/utility/DestinationCard";

const DESTINATIONS = [
  {
    destinationName: "Jaipur",
    tours: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=364&q=80",
  },
  {
    destinationName: "Shimla",
    tours: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
  },
  {
    destinationName: "Goa",
    tours: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    destinationName: "Andaman & Nicobar",
    tours: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1579317344982-256c49ab1e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    destinationName: "Leh Ladakh",
    tours: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    destinationName: "Kerala",
    tours: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1665849867282-37a9cb071d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    destinationName: "Mumbai",
    tours: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1552133457-ce1d2d33cdfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    destinationName: "Sikkim",
    tours: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1562413181-9013f9846bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=364&q=80",
  },
];

export default function AllDestinations() {
  return (
    <div className="flex flex-col p-4">
      {DESTINATIONS.map((destination, idx) => (
        <DestinationCard
          destinationName={destination.destinationName}
          imgUrl={destination.imgUrl}
          tours={destination.tours}
          key={idx}
        />
      ))}
    </div>
  );
}
