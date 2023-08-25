import { splitText } from "~/utils/splitText";

interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <div className="flex flex-col">
      <p className="mb-1 text-4xl text-dark">Overview</p>

      {splitText(description).map((paragraph, index) => (
        <p
          key={index}
          className="mb-2 text-lg font-light leading-[120%] text-slate-600"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
