import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoFooter from "../assets/logo-footer.svg";
import { Link } from "react-router-dom";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-zinc-900 text-white p-10 md:flex md:justify-between md:items-center text-center md:text-left">
      <div>
        <img src={logoFooter} alt="logofooter" />
        <div className="flex items-center mt-4">
          <FontAwesomeIcon className="text-[2rem]" icon={faLocationArrow} />
          <p className="ml-4">Borromeo St., Surigao City 8400</p>
        </div>
      </div>

      <ul className="leading-10 my-6 md:my-0">
        <li>
          <Link to="/menu" className="hover:text-[#FFCC06] ease-in duration-300">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/bookaparty" className="hover:text-[#FFCC06] ease-in duration-300">
            Book a party
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="hover:text-[#FFCC06] ease-in duration-300">
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="leading-10 ">
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
        <li>Copyright &#169; 2022</li>
      </ul>
      <div>
        <p className="font-bold mt-6 md:mt-0">
          Delivery Hotline:
          <span className="text-[#FFCC06] text-[2rem] block">1234-5678</span>
        </p>
        <div className="text-[1.5rem] flex gap-6 mt-4 justify-center md:justify-start">
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
