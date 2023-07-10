export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[url('/images/hero.jpg')] bg-cover">
      <p className="w-3/4 text-center text-6xl font-black leading-[85%] text-light drop-shadow-lg">
        Explore the World with Our Tours
      </p>
      <button className="mt-6 bg-primary px-8 py-3 text-light">
        Check out Destinations
      </button>
    </div>
  );
}
