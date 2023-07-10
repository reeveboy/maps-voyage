interface BtnProps {
  text: string;
  vairant?: "outlined" | "normal";
}

export default function Btn(props: BtnProps) {
  if (props.vairant === "outlined") {
    return (
      <button className="mt-4 border-2 border-primary px-12 py-3 text-lg uppercase text-primary shadow-md">
        {props.text}
      </button>
    );
  }
  return (
    <button className="mt-4 bg-primary px-12 py-3 text-lg uppercase text-light shadow-md">
      {props.text}
    </button>
  );
}
