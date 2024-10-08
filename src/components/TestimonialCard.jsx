import React from "react";
import PropTypes from "prop-types";
import star from "../assets/HomePageAssets/star.svg";
import starWhite from "../assets/HomePageAssets/star-white.svg";

const TestimonialCard = ({ name, title, testimonial, image }) => {
  return (
    <div className="flex flex-col items-center border-[#fff]">
      <img
        src={image}
        alt={`${name}'s picture`}
        className="tranform  -translate-y-[-50%] w-20 h-20 rounded-full border-2 border-[#FF6700] shadow-md"
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      />

      <div className="bg-[#fff] w-full flex flex-col justify-center items-center text-center py-12 px-4 shadow-md rounded-lg">
        <h3 className="h2">{name}</h3>
        <h4 className="h2 text-gray-500">{title}</h4>
        <p className=" text-gray-600 text-xl ">{testimonial}</p>

        {/* Stars centered */}
        <div className="flex justify-center mt-4">
          <img src={star} alt="star" className="w-6 ml-1 mr-1 h-6" />
          <img src={star} alt="star" className="w-6 ml-1 mr-1 h-6" />
          <img src={star} alt="star" className="w-6 ml-1 mr-1 h-6" />
          <img src={star} alt="star" className="w-6 ml-1 mr-1 h-6" />
          <img src={starWhite} alt="star" className="w-6 ml-1 mr-1 h-6" />
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TestimonialCard;
