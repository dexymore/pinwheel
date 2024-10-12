import React, { useState } from "react";
import img2 from "../../assets/FeaturePageAssets/feature-img-2.png";
import img1 from "../../assets/FeaturePageAssets/feature-img-1.png";

const BusinessGrowth = () => {
  const [activeParagraph, setActiveParagraph] = useState("p1");
  const [activeImg, setActiveImg] = useState("img1");
  return (
    <section className="">
      <h2 className="max-w-2xl mb-4 text-4xl  font-extrabold md:leading-[2.5rem] text-center mx-auto">
        Payment gateway for every stage of your business growth
      </h2>

      <div className="max-w-screen-xl px-4 flex md:flex-row flex-col py-8 mx-auto">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-full h-auto object-cover"
            src={activeImg === "img1" ? img1 : img2}
          />
        </div>

        <div className="w-full md:w-1/2 md:h-1/2 flex py-12 flex-col">
          <div className="py-2 px-4 my-4 border-black border-l-2">
            <button
              className="text-start text-xl font-extrabold my-3 text-[#999999] focus:text-black w-[75%]"
              onClick={() => {
                setActiveImg("img1");
                setActiveParagraph("p1");
              }}
            >
              Transaction from Anyone with a world to Anywhere
            </button>

            <p
              className={`${
                activeParagraph === "p1" ? "block" : "hidden"
              } text-gray-400 text-md w-[75%]`}
            >
              Donec sollicitudin molestie malesda. Donec sollicitudin molestie
              malesuada. Mauris pellentesque nec, egestas non nisi. Cras
              ultricies ligula sed.
            </p>
          </div>

          <div className="py-2 px-4 mt-4 border-black border-l-2">
            <button
              className="text-start text-xl font-extrabold my-3 text-[#999999] focus:text-black w-[75%]"
              onClick={() => {
                setActiveImg("img2");
                setActiveParagraph("p2");
              }}
            >
              Transaction from Anyone with a world to Anywhere
            </button>

            <p
              className={`${
                activeParagraph === "p2" ? "block" : "hidden"
              } text-gray-400 text-md w-[75%]`}
            >
              Donec sollicitudin molestie malesda. Donec sollicitudin molestie
              malesuada. Mauris pellentesque nec, egestas non nisi. Cras
              ultricies ligula sed.
            </p>
          </div>

          <div className="py-2 px-4 mt-4 border-black border-l-2">
            <button
              className="text-start text-xl font-extrabold my-3 text-[#999999] focus:text-black w-[75%]"
              onClick={() => {
                setActiveImg("img1");
                setActiveParagraph("p3");
              }}
            >
              Transaction from Anyone with a world to Anywhere
            </button>

            <p
              className={`${
                activeParagraph === "p3" ? "block" : "hidden"
              } text-gray-400 text-md w-[75%]`}
            >
              Donec sollicitudin molestie malesda. Donec sollicitudin molestie
              malesuada. Mauris pellentesque nec, egestas non nisi. Cras
              ultricies ligula sed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;
