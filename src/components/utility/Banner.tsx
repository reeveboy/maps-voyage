import Image from "next/image";

interface BannerProps {
  title: string;
  img: string;
}

export default function Banner(props: BannerProps) {
  return (
    <div className="relative w-full bg-black/60">
      <Image
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src={props.img}
        alt=""
        width={1920}
        height={1080}
        quality={100}
      />
      <div className="relative flex items-center justify-center px-4 py-12">
        <div className="h-[2px] w-12 bg-light"></div>
        <h2 className="mx-4 font-cursive text-4xl text-light">{props.title}</h2>
        <div className="h-[2px] w-12 bg-light"></div>
      </div>
    </div>
  );
}
