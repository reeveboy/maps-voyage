import { splitText } from "~/utils/SplitText";

interface DescriptionProps {
  description: string | null;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <div className="flex flex-col text-lg font-light leading-[120%] text-slate-600">
      {splitText(description).map((paragraph, index) => (
        <p key={index} className="mb-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
