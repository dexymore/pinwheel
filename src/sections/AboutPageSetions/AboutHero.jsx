import bannerShape from "../../assets/GlobalAssets/banner-shape.svg";
import featureShape from "../../assets/GlobalAssets/feature-shape.svg";
import CountUp from "react-countup";

const AboutHero = () => {
  return (
    <section className="relative h-auto flex flex-col items-center justify-center text-center">
      {/* Background Shape Image */}
      <img
        src={bannerShape}
        className="absolute top-[-6rem] right-0 md:right-[-2rem] w-[65%] md:w-[25%] object-cover z-0"
        alt="Background shape"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        <h1 className="mb-4 text-5xl md:text-6xl font-extrabold leading-tight">
          About our company
        </h1>
        <p className="mb-6 font-light text-gray-400 md:text-lg lg:text-xl">
          Donec sollicitudin molestie malesuada. Donec sollicitudin molestie
          malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies
          ligula sed magna dictum porta. Lorem ipsum dolor sit amet.
        </p>
        {/* Buttons - stack on mobile, row on larger screens */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="#"
            className="gradientOrangeBg hover:shadow-[0_0_5px_rgba(255,255,0,0.4),_0_0_10px_rgba(255,255,0,0.2),_0_0_15px_rgba(255,255,0,0.1)] text-base font-medium px-12 py-3 text-white rounded-full shadow-sm "
          >
            Download The Theme
          </a>
          <button className="bg-transparent text-base font-medium px-12 py-3 text-black rounded-full border-2 border-[#ff6700] shadow-sm hover:shadow-md hover:bg-[#ff6700] hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-16 w-[75%] mx-auto mb-10">
        <div className="flex md:flex-row flex-col justify-center mx-0 rounded-[20px] bg-white px-18 shadow-lg lg:py-10">
          <div className="border-border text-2xl text-bold px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0">
            <h2>
              <CountUp end={25} suffix="M" duration={3} />
              <span className="text-[#A3A1FB] font-extrabold">+</span>
            </h2>
            <p className="text-gray-400">Customers</p>
          </div>
          <div className="border-border px-10 py-10 text-2xl text-bold text-center sm:col-6 lg:col-3 lg:border-r lg:py-0">
            <h2>
              <CountUp end={440} suffix="M" duration={3} />
              <span className="text-[#5EE2A0] font-extrabold">+</span>
            </h2>
            <p className="text-gray-400">Products sold</p>
          </div>
          <div className="border-border text-bold px-10 py-10 text-center sm:col-6 lg:col-3 text-2xl lg:border-r lg:py-0">
            <h2>
              <CountUp end={50} suffix="K" duration={3} />
              <span className="text-primary font-extrabold">+</span>
            </h2>
            <p className="text-gray-400">Online stores</p>
          </div>
          <div className="px-10 py-10 text-center sm:col-6 lg:col-3 lg:py-0 text-2xl text-bold">
            <h2>
              <CountUp end={20} suffix="K" duration={3} />
              <span className="text-[#FEC163] font-extrabold">+</span>
            </h2>
            <p className="text-gray-400">Transactions</p>
          </div>
        </div>
      </div>

      <img
        src={featureShape}
        alt="Feature shape"
        className="absolute bottom-0 left-0 z-[-1] "
      />
    </section>
  );
};

export default AboutHero;
