import React from "react";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const PopularProduct = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="max-container flex-col justify-start gap-5">
        <h2 className="text-3xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg">
          Experience top-notch quality and style with out sought-after
          selections.Discover a world of comfort,design,and value.
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product) => (
            <div className="">
              <ProductCard key={product.name} {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
