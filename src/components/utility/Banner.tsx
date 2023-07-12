interface BannerProps {
  title: string;
}

export default function Banner(props: BannerProps) {
  return (
    <div className="relative w-full bg-black/60">
      <img
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=903&q=80"
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
