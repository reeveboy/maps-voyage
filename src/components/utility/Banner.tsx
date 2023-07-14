interface BannerProps {
  title: string;
  img: string;
}

export default function Banner(props: BannerProps) {
  return (
    <div className="relative w-full bg-black/60">
      <img
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src={props.img}
        alt=""
      />
      <div className="relative flex items-center justify-center px-4 py-12">
        <div className="h-[2px] w-12 bg-light"></div>
        <h2 className="mx-4 font-cursive text-4xl text-light">{props.title}</h2>
        <div className="h-[2px] w-12 bg-light"></div>
      </div>
    </div>
  );
}
