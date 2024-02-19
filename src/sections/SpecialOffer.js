import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="text-3xl font-bold font-montserrat">
          <span className="text-coral-red text-3xl">Special</span> Offer
        </h1>
        <p className="text-slate-gray mt-6 font-palanquin">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-slate-gray mt-2 font-palanquin">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className=" flex">
          <div className="w-[150px] mt-6 flex">
            <Button iconURL={arrowRight} label="Shop now" />
          </div>
          <div className="w-[150px] mt-6 flex">
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
