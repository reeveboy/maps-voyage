import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-dark px-4 py-3">
      <div className="text-center ">
        <span className="text-3xl font-black leading-5 text-light">
          <p>Maps</p>
          <p>Voyage</p>
        </span>
      </div>
      <div>
        <FontAwesomeIcon className="h-8 text-white" icon={faBars} />
      </div>
    </nav>
  );
}
