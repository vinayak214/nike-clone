import React from "react";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { products } from "../constants";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-start flex-col gap-4">
        <img
          alt="logo"
          width={150}
          height={46}
          className="m-0"
          src={footerLogo}
        ></img>
        <p className="font-montserrat text-white max-w-sm ">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon) => (
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((links) => (
            <div>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {links.title}
              </h4>
              <ul>
                {links.links.map((items) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={items.name}
                  >
                    <a href={items.link}>{items.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
