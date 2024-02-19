import React from "react";
import { star } from "../assets/icons";

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full">
      <img className="w-[282px] h-[282px]" src={imgURL}></img>
      <div className="flex pt-2">
        <img src={star} alt={name} className="w-[24px] h-[24px]"></img>
        <span>(4.5)</span>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-norma">
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
