import { faComments, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

export default function Blogs() {
  return (
    <div className="my-12 flex flex-col px-6">
      <H3 title="LATEST BLOGS & ARTICLES" variant="centered" />
      <H2>Latest News & Articles</H2>
      <div className="mt-4 flex">
        <BlogCard />
      </div>
    </div>
  );
}

const BlogCard = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Image
          src="https://images.unsplash.com/photo-1538826421747-8fc0690ae387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col bg-white p-4">
        <div className="flex">
          <div className="flex items-end">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-primary">
              <FontAwesomeIcon className="h-3 text-light" icon={faUserTie} />
            </div>
            <p className="ml-2 text-sm font-light text-slate-600">Admin</p>
          </div>
          <div className="ml-4 flex items-end">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-primary">
              <FontAwesomeIcon className="h-3 text-light" icon={faComments} />
            </div>
            <p className="ml-2 text-sm font-light text-slate-600">2 Comments</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-lg font-light leading-tight text-dark">
            14 Things to see and do when visiting japan
          </p>
        </div>
        <div className="mt-2 flex">
          <p className="text-sm font-light uppercase text-slate-600">
            30 JUNE 2023
          </p>
        </div>
      </div>
    </div>
  );
};
