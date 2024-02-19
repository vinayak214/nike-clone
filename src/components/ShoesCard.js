import React from "react";

const ShoesCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ml-4 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="bg-card bg-center flex justify-center sm:w-40 
        sm:h-40 rounded-xl items-center max-sm:p-4"
      >
        <img
          src={imgURL.thumbnail}
          width="127px"
          height="103px"
          className="object-contain"
        ></img>
      </div>
    </div>
  );
};

export default ShoesCard;
