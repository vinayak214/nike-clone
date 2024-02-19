import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <div className=" flex flex-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          <ServiceCard key={service.label} {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
