/* eslint-disable @typescript-eslint/no-unsafe-return */
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Combobox } from "@headlessui/react";
import type { Destination } from "@prisma/client";
import classNames from "classnames";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

interface SearchBoxProps {
  destinations: Destination[];
  selectedDestination: Destination | null;
  setSelectedDestination: Dispatch<SetStateAction<Destination | null>>;
}

export default function SearchBox({
  destinations,
  selectedDestination,
  setSelectedDestination,
}: SearchBoxProps) {
  const [query, setQuery] = useState<string>("");

  const filteredDestinations =
    query === ""
      ? destinations.slice(0, 5)
      : destinations
          .filter((destination) => {
            return destination.place
              .toLowerCase()
              .includes(query.toLowerCase());
          })
          .slice(0, 5);

  return (
    <div className="mt-8 px-4">
      <div className="flex flex-col bg-white p-8">
        <p className="text-2xl font-light text-dark">Search Tours</p>
        <div className="flex flex-col font-light">
          <Combobox
            value={selectedDestination}
            onChange={setSelectedDestination}
          >
            <Combobox.Input
              className="text-md mt-2 bg-slate-200 px-5 py-3 text-slate-600"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Where to?"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              displayValue={(destination) => destination?.place}
            />
            <Combobox.Options className="mt-2 bg-slate-200">
              {filteredDestinations.map((destination) => (
                <Combobox.Option key={destination.id} value={destination}>
                  {({ active, selected }) => (
                    <li
                      className={classNames(
                        "text-md mb-2 flex cursor-pointer items-center justify-between px-5 py-2 hover:bg-primary hover:text-light",
                        active
                          ? "bg-primary text-light"
                          : "bg-slate-200 text-slate-600"
                      )}
                    >
                      {destination.place}
                      {selected && (
                        <FontAwesomeIcon className="h-3 w-3" icon={faCheck} />
                      )}
                    </li>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
          <button className="text-md mt-2 bg-primary py-3 text-light shadow-md transition-colors hover:bg-primaryDark focus:bg-primaryDark">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
