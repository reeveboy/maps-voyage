import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="my-12 grid w-full grid-cols-1 gap-4 md:mx-auto md:max-w-5xl md:grid-cols-3">
      <div className="relative w-full bg-black/60 md:col-span-1">
        <Image
          className="absolute h-full w-full object-cover mix-blend-overlay"
          src="/images/diver.jpg"
          alt=""
          width={1920}
          height={1080}
        />
        <div className="relative flex flex-col px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <p className="h-[2px] w-16 bg-amber-400"></p>
            <h3 className="text-lg uppercase tracking-wider text-amber-400">
              Contact Us
            </h3>
          </div>
          <h2 className="mt-4 text-5xl leading-[85%] text-light drop-shadow-md md:text-4xl md:leading-[90%]">
            Have any Question? Feel free to contact with us.
          </h2>
          <p className="text-md mt-4 font-light text-slate-300">
            Stay in touch and be a part of our community by travelling with MAPS
            Voyage
          </p>
          <div className="mt-4 flex">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-light/60 ">
              <FontAwesomeIcon
                className="h-5 w-5 text-dark"
                icon={faFacebook}
              />
            </div>
            <div className="ml-4 grid h-12 w-12 place-items-center rounded-full bg-light/60 ">
              <FontAwesomeIcon
                className="h-5 w-5 text-dark"
                icon={faInstagram}
              />
            </div>
            <div className="ml-4 grid h-12 w-12 place-items-center rounded-full bg-light/60 ">
              <FontAwesomeIcon
                className="h-5 w-5 text-dark"
                icon={faLinkedinIn}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 md:col-span-2 md:flex md:items-center md:justify-center md:px-8">
        <form className="grid w-full grid-cols-1 gap-2 font-light md:grid-cols-2">
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600 md:col-span-2"
            rows={5}
            placeholder="Your Message"
          />
          <button className="mt-4 bg-primary py-3 text-light transition-colors hover:bg-primaryDark focus:bg-primaryDark">
            Send Message!
          </button>
        </form>
      </div>
    </div>
  );
}
