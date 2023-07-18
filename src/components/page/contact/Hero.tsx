import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-black/60">
      <Image
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src="https://images.unsplash.com/photo-1682687981807-35e55307a7bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt=""
        width={1920}
        height={1080}
      />
      <div className="relative flex max-w-md flex-col gap-6 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-2">
          <p className="h-[2px] w-16 bg-amber-400"></p>
          <h3 className="text-lg uppercase tracking-wider text-amber-400">
            Reach Us At
          </h3>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center rounded-lg bg-white/20 px-6 py-4">
            <div>
              <FontAwesomeIcon
                className="h-8 w-8 text-light"
                icon={faLocationDot}
              />
            </div>
            <div className="ml-4 flex flex-col">
              <p className="text-lg text-light">Local Address</p>
              <p className="text-sm font-light leading-[120%] text-slate-300">
                123, Sunshine Avenue, Moonlight Nagar, Mumbai, Maharashtra
                400001, India.
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center rounded-lg bg-white/20 px-6 py-4">
            <div>
              <FontAwesomeIcon className="h-8 w-8 text-light" icon={faPhone} />
            </div>
            <div className="ml-4 flex flex-col">
              <p className="text-lg text-light">Phone Number</p>
              <p className="text-sm font-light leading-[120%] text-slate-300">
                +91 28741 13292
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center rounded-lg bg-white/20 px-6 py-4">
            <div>
              <FontAwesomeIcon
                className="h-8 w-8 text-light"
                icon={faEnvelope}
              />
            </div>
            <div className="ml-4 flex flex-col">
              <p className="text-lg text-light">Email Address</p>
              <p className="text-sm font-light leading-[120%] text-slate-300">
                info@mapsvoyage.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
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
  );
}
