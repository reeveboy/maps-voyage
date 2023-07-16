import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigation } from "./Navbar";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 bg-white px-4 py-12 md:grid-cols-4 ">
        <div className="flex max-w-xs flex-col">
          <span className="text-5xl font-black leading-[85%] text-dark">
            <p>Maps</p>
            <p>Voyage</p>
          </span>
          <p className="mt-2 text-sm font-light text-slate-600">
            Come, let us navigate the world together.{" "}
          </p>
        </div>

        <div className="font-light">
          <p className="text-3xl text-primary">Links</p>
          <div className="mt-2 flex flex-col">
            {navigation.map((link, idx) => (
              <Link
                key={idx}
                className="text-lg text-slate-600"
                href={link.href}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="font-light">
          <p className="text-3xl text-primary">Subscribe</p>
          <p className="text-md mt-2 font-light leading-tight text-slate-600">
            Sign Up to receive news, updates and offers on our tours{" "}
          </p>
          <div className="mt-2 flex font-light">
            <input
              className="text-md grow border-2 border-slate-200 px-2 py-2 text-slate-600"
              type="text"
              placeholder="Your Name"
            />
            <button className="ml-2 bg-primary p-2 text-xs uppercase text-light shadow-md">
              Sign Up Now!
            </button>
          </div>
        </div>

        <div className="font-light">
          <p className="text-3xl text-primary">Follow Us</p>
          <div className="mt-2 flex">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary ">
              <FontAwesomeIcon
                className="h-4 w-4 text-light"
                icon={faFacebook}
              />
            </div>
            <div className="ml-4 grid h-10 w-10 place-items-center rounded-full bg-primary ">
              <FontAwesomeIcon
                className="h-4 w-4 text-light"
                icon={faInstagram}
              />
            </div>
            <div className="ml-4 grid h-10 w-10 place-items-center rounded-full bg-primary ">
              <FontAwesomeIcon
                className="h-4 w-4 text-light"
                icon={faLinkedinIn}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark p-4">
        <p className="text-center text-xs font-light text-slate-300">
          Copyright © 2023 Maps Voyage. All rights reserveds
        </p>
      </div>
    </>
  );
}
