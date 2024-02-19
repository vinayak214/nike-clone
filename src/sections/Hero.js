import React, { useState } from "react";
import Button from "../components/Button";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { shoes } from "../constants";
import ShoesCard from "../components/ShoesCard";

const Hero = () => {
  const [bgImg, setBgImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
      min-h-screen gap-10 max-container items-center px-20 justify-start
       "
    >
      <div className="relative  xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red ">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm p-0">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" icon={arrowRight} />
        <div className="flex justify-start items-center flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((items) => (
            <div className="py-4">
              <p className="text-3xl font-palanquin font-bold">{items.value}</p>
              <p className="text-3xl font-palanquin font-bold">{items.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative justify-center items-center xl:min-h-screen flex flex-1 
      max-xl:py-40 bg-primary bg-cover bg-center"
      >
        <img
          width="600px"
          height="500px"
          className="object-contain 
          relative z-10"
          src={bgImg}
        ></img>
        <div className="flex sm:gap:6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoesCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBgImg(shoe)}
                bigShoeImg={bgImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
