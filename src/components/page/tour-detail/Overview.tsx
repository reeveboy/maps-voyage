import type { TourWithDestinationAndDays } from "~/types";

interface OverviewProps {
  tour: TourWithDestinationAndDays;
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

      <div className="mt-4 flex flex-col gap-8">
        {tour.tourDays?.map((plan, index) => (
          <div key={index} className="flex gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="text-md grid h-12 w-12 place-items-center rounded-full bg-primary font-light text-light">
                {parseInt(plan.dayNumber).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                })}
              </div>
              <div className="mt-2 w-[2px] grow bg-slate-300"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-light text-dark">
                Day {plan.dayNumber}: {plan.dayTitle}
              </p>
              <ul className="text-md mt-3 font-light text-slate-600">
                {plan.description.split("/n").map((text, index) => (
                  <li className="inline" key={index}>
                    {" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
