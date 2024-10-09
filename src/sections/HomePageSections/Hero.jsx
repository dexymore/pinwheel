import homePageBanner from "../../assets/HomePageAssets/banner-img.png";
import bannerShape from "../../assets/HomePageAssets/banner-shape.svg";
import featureShape from "../../assets/HomePageAssets/feature-shape.svg";

const Hero = () => {
  return (
    <section className="relative h-[82vh]">
      {/* Background Shape Image */}
      <img
        src={bannerShape}
        className="absolute top-[-6rem] md:right-[-2rem] right-[0rem] md:w-[25%] w-[65%] object-cover z-0"
        alt="Background shape"
      />

      <div className="relative z-10 md:grid flex flex-col max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 md:text-6xl text-5xl font-extrabold tracking-tight leading-none">
            Scale design & dev <br /> operations with <br /> Avocode Enterprise
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            A fully integrated suite of authentication & authorization products,
            Stytch’s <br /> platform removes the headache of.
          </p>
          <a
            href="#"
            className="bg-[#fff] inline-flex items-center justify-center mr-3 text-base font-medium px-12 py-3 rounded-full shadow-sm hover:shadow-md"
          >
            Download The Theme
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img src={homePageBanner} alt="mockup" className="relative z-10" />
        </div>
      </div>
      <img src={featureShape}></img>
    </section>
  );
};

export default Hero;
