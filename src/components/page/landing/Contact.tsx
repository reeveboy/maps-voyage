import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="my-12 flex w-full flex-col">
      <div className="relative w-full bg-black/60">
        <img
          className="absolute h-full w-full object-cover mix-blend-overlay"
          src="/images/diver.jpg"
          alt=""
        />
        <div className="relative flex flex-col px-8 py-16">
          <div className="flex flex-col">
            <p className="h-[2px] w-16 bg-amber-400"></p>
            <h3 className="text-lg uppercase tracking-wider text-amber-400">
              Contact Us
            </h3>
          </div>
          <h2 className="mt-4 text-5xl leading-[90%] text-light drop-shadow-md">
            Have any Question? Feel free to contact with us.
          </h2>
          <p className="text-md mt-4 font-light text-slate-300">
            Stay in touch and be a part of our community by travelling with MAPS
            Voyage
          </p>
          <div className="mt-4 flex">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-light/60 ">
              <FontAwesomeIcon className="h-6 text-dark" icon={faFacebook} />
            </div>
            <div className="ml-4 grid h-14 w-14 place-items-center rounded-full bg-light/60 ">
              <FontAwesomeIcon className="h-6 text-dark" icon={faInstagram} />
            </div>
            <div className="ml-4 grid h-14 w-14 place-items-center rounded-full bg-light/60 ">
              <FontAwesomeIcon className="h-6 text-dark" icon={faLinkedinIn} />
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col bg-white p-4">
        <input
          className="bg-slate-200 px-7 py-5 text-lg text-dark"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
          type="text"
          placeholder="Phone Number"
        />
        <input
          className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
          rows={4}
          placeholder="Your Message"
        />
        <button className="mt-2 bg-primary px-12 py-3 text-lg text-light shadow-md">
          Send Message
        </button>
      </form>
    </div>
  );
}
