interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <div className="flex flex-col p-4 text-lg font-light leading-[120%] text-slate-600">
      {description.split("\n").map((paragraph, index) => (
        <p key={index} className="mb-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
}