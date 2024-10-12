import React from "react";
import bannerShape from "../../assets/GlobalAssets/banner-shape.svg";
import featureShape from "../../assets/GlobalAssets/feature-shape.svg";
import featuresBanner from "../../assets/FeaturePageAssets/features-banner-img.png";

const FeatureHero = () => {
  return (
    <section className="relative ">
      {/* Background Shape Image */}
      <img
        src={bannerShape}
        className="absolute top-[-6rem] md:right-[-2rem] right-[0rem] md:w-[25%] w-[65%] object-cover z-0"
        alt="Background shape"
      />

      <div className="relative z-10 md:grid flex flex-col-reverse max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4  md:text-5xl text-4xl font-extrabold tracking-tight leading-none mt-4">
            Connects with all your other tools to create a smooth experience.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg text-xl">
            A fully integrated suite of authentication & authorization products,
            Stytch’s <br /> platform removes the headache of.
          </p>
          <a
            href="#"
            className="relative inline-flex items-center text-white justify-center mr-3 text-base font-medium px-12 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:shadow-[0_0_5px_rgba(255,255,0,0.4),_0_0_10px_rgba(255,255,0,0.2),_0_0_15px_rgba(255,255,0,0.1)]  gradientOrangeBg"
          >
            Download The Theme
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img src={featuresBanner} alt="mockup" className="relative z-10" />
        </div>
      </div>
      <img src={featureShape} className="z-[-1] absolute left-0 bottom-0"></img>
    </section>
  );
};

export default FeatureHero;
