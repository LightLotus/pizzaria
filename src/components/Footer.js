import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoFooter from "../assets/logo-footer.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-zinc-900 text-white p-10 flex justify-between items-center">
      <div>
        <img src={logoFooter} alt="logofooter" />
        <p className="mt-2">Copyright &#169; 2022</p>
      </div>

      <ul className="flex gap-6">
        <li>
          <Link className="hover:text-[#FFCC06] ease-in duration-300">
            Menu
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#FFCC06] ease-in duration-300">
            Book a party
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#FFCC06] ease-in duration-300">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#FFCC06] ease-in duration-300">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#FFCC06] ease-in duration-300">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <div>
        <p className="font-bold">
          Delivery Hotline:
          <span className="text-[#FFCC06] text-[2rem] block">1234-5678</span>
        </p>
        <div className="text-[1.5rem] flex gap-6 mt-4">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-[#FFCC06] ease-in duration-300"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-[#FFCC06] ease-in duration-300"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="cursor-pointer hover:text-[#FFCC06] ease-in duration-300"
            icon={faTwitter}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
