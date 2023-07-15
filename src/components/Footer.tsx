import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LINKS = ["Home", "Destinations", "Tours", "About Us", "Contact"];

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-white px-4 py-12">
        <div className="flex max-w-xs flex-col">
          <span className="text-5xl font-black leading-[85%] text-dark">
            <p>Maps</p>
            <p>Voyage</p>
          </span>
          <p className="mt-2 text-sm font-light text-slate-600">
            Come, let us navigate the world together.{" "}
          </p>
        </div>

        <div className="mt-8 font-light">
          <p className="text-3xl text-primary">Links</p>
          <div className="mt-2 flex flex-col">
            {LINKS.map((link, idx) => (
              <a key={idx} className="text-lg text-slate-600" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 font-light">
          <p className="text-3xl text-primary">Subscribe</p>
          <p className="text-md mt-2 font-light leading-tight text-slate-600">
            Sign Up to receive news, updates and offers on our tours{" "}
          </p>
          <div className="mt-2 flex font-light">
            <input
              className="grow border-2 border-slate-200 px-4 py-4 text-lg text-dark"
              type="text"
              placeholder="Your Name"
            />
            <button className="text-md ml-2 bg-primary px-4 uppercase text-light shadow-md">
              Sign Up Now!
            </button>
          </div>
        </div>

        <div className="mt-8 font-light">
          <p className="text-3xl text-primary">Follow Us</p>
          <div className="mt-2 flex">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary ">
              <FontAwesomeIcon className="h-6 text-light" icon={faFacebook} />
            </div>
            <div className="ml-4 grid h-14 w-14 place-items-center rounded-full bg-primary ">
              <FontAwesomeIcon className="h-6 text-light" icon={faInstagram} />
            </div>
            <div className="ml-4 grid h-14 w-14 place-items-center rounded-full bg-primary ">
              <FontAwesomeIcon className="h-6 text-light" icon={faLinkedinIn} />
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
