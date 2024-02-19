import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <div
      className={`flex justify-center items-center font-montserrat rounded-full  text-lg  p-2  gap-2
    leading-none border 
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }  
    `}
    >
      <button>{label}</button>
      {iconURL && <img src={iconURL} alt="Arrow-Logo" />}
    </div>
  );
};

export default Button;
