import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  faBars,
  faCartShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <>
      {/* desktop navbar */}
      <nav className="md:flex justify-between items-center py-6 px-10 fixed bg-white left-0 top-0 w-full z-[999] hidden">
        <Link to="/">
          <img src={logo} alt="logo" className="10rem" />
        </Link>
        <ul className="uppercase flex gap-10">
          <li>
            <Link to="/" className="hover:text-[#FFCC06] ease-in duration-300">
              home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#FFCC06] ease-in duration-300"
              to="/menu"
            >
              menu
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#FFCC06] ease-in duration-300"
              to="/bookaparty"
            >
              book a party
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-10 uppercase">
          <Link to="/cart" className="text-[1.5rem]">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <div className="flex items-center gap-5">
            <Link
              className="hover:text-[#FFCC06] ease-in duration-300"
              to="/login"
            >
              Login
            </Link>
            <span>|</span>
            <Link
              className="hover:text-[#FFCC06] ease-in duration-300"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className="bg-white fixed top-0 left-0 w-[100vw] p-4 z-[999] md:hidden flex justify-between items-center">
        <Link to="/">
          <img src={logo} className="w-3/5" alt="" />
        </Link>
        <div className="absolute z-10 right-0 pr-6" onClick={handleMenu}>
          {!menu ? (
            <FontAwesomeIcon className="text-[1.8rem]" icon={faBars} />
          ) : (
            <FontAwesomeIcon className="text-[1.8rem]" icon={faClose} />
          )}
        </div>
        <ul
          className={
            !menu
              ? "animate-[popout_0.3s_linear] hidden"
              : "absolute top-0 right-0 h-screen w-3/4 bg-amber-50 drop-shadow-xl px-10 pt-24 uppercase animate-[popin_0.3s_linear]"
          }
        >
          <li>
            <Link to="/" className="hover:text-[#FFCC06] ease-in duration-300">
              home
            </Link>
          </li>
          <li className="my-6">
            <Link
              className="hover:text-[#FFCC06] ease-in duration-300"
              to="/menu"
            >
              menu
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#FFCC06] ease-in duration-300"
              to="/bookaparty"
            >
              book a party
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
