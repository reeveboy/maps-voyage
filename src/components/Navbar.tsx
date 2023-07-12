import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-dark px-4 py-3">
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
