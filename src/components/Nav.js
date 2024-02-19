import React from "react";
import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-8  justify-between py-2 items-center fixed top-0 z-10 w-full border shadow-sm">
      <nav className="flex max-container items-center ">
        <Link to="/">
          <img width="130px" height="29px" src={headerLogo}></img>
        </Link>
        <div className="flex-grow flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <ul>
              <li className="font-montserrat leading-normal text-lg text-slate-gray">
                <Link to={item.href}>{item.label}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="flex flex-1 justify-end mr-4 items-center flex-nowrap">
          <span className="text-slate-gray font-montserrat">
            Sign in/Explore now
          </span>
        </div>
        <div className="hidden max-lg:block">
          <img width={25} height={25} src={hamburger} alt="Ham"></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
