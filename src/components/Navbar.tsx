import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours", href: "/tours" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure>
      <nav
        className={classNames(
          "flex items-center justify-between px-4 py-3 transition-transform duration-300",
          router.pathname === "/" || router.pathname === "/about"
            ? "absolute left-0 right-0 top-0 z-30"
            : "bg-dark/95"
        )}
      >
        <Link href={"/"} className="text-center ">
          <span className="text-3xl font-black leading-5 text-light">
            <p>Maps</p>
            <p>Voyage</p>
          </span>
        </Link>

        <div className="hidden items-center md:flex">
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              className={classNames(
                "ml-8 text-lg uppercase",
                router.pathname === item.href
                  ? "font-normal text-light"
                  : "font-light text-slate-200"
              )}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Disclosure.Button className="md:hidden">
          <FontAwesomeIcon className="h-6 w-6 text-white" icon={faBars} />
        </Disclosure.Button>
        <Transition
          className="fixed right-0 top-0 z-40 h-screen w-[60%] rounded bg-dark/95 p-6 shadow-sm md:hidden"
          enter="transition duration-250 ease-in"
          enterFrom="transform translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition duration-250 ease-out"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform translate-x-full opacity-0"
        >
          <Disclosure.Panel className="h-full">
            <Disclosure.Button className="w-full text-right">
              <FontAwesomeIcon
                icon={faX}
                className="ml-auto w-8 text-slate-200"
              />
            </Disclosure.Button>
            <div className="flex h-full flex-col items-center justify-center">
              {navigation.map((item, idx) => (
                <Link key={idx} className="mt-6 text-center" href={item.href}>
                  <p className="text-sm text-primary">0{idx + 1}.</p>
                  <p className="text-lg font-black uppercase text-slate-200">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </Transition>
      </nav>
    </Disclosure>
  );
}
