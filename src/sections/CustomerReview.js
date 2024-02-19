import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReview = () => {
  return (
    <section className="max-container flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-palanquin font-bold text-3xl">
          What Our <span className="text-coral-red">Customers </span>Say?
        </h1>
        <p className="text-slate-gray max-w-lg  m-auto font-palanquin text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-sm:flex-col">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
