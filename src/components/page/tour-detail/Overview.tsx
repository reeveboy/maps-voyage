import type { Tour } from "~/pages/tour/[slug]";

interface OverviewProps {
  tour: Tour;
}

export default function Overview({ tour }: OverviewProps) {
  return (
    <div className="mt-4 flex flex-col">
      <div className="">
        <p className="text-4xl text-dark">Overview</p>
        <p className="mt-1 text-lg font-light leading-snug text-slate-600">
          {tour.overview}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {tour.tourPlan?.map((plan, index) => (
          <div key={index} className="flex gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-xl text-light">
                {plan.day.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
              </div>
              <div className="mt-2 w-[2px] grow bg-slate-500"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-light text-dark">
                Day {plan.day}: {plan.title}
              </p>
              <p className="text-md mt-2 font-light leading-snug text-slate-600">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
