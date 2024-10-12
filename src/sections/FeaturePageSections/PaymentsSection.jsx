import checkmark from "../../assets/FeaturePageAssets/checkmark-circle.svg";
import featureImg1 from "../../assets/FeaturePageAssets/feature-img-1.png";
const PaymentsSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 flex md:flex-row flex-col-reverse py-8 mx-auto">
        <div className="flex w-[100%] mt-[3rem] flex-col text-start">
          <h1 className="max-w-2xl mb-4 text-4xl md:w-[22rem] font-extrabold md:leading-[2.5rem]">
            Accept payments any country in this whole universe
          </h1>
          <p className="max-w-2xl mb-4 mt-4 text-xl text-md md:w-[28rem] text-gray-400 md:leading-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.
          </p>

          <div className="flex flex-col">
            <h3 className="flex flex-row  py-1 text-xl text-start  ">
              <span className="mr-2 mt-1">
                <img src={checkmark} alt="checkmark" />
              </span>
              Supporting more than 119 country world
            </h3>
            <h3 className="flex flex-row  py-1 text-xl text-start  ">
              <span className="mr-2 mt-1">
                <img src={checkmark} alt="checkmark" />
              </span>
              Open transaction with more than currencies
            </h3>
            <h3 className="flex flex-row  py-1 text-xl text-start  ">
              <span className="mr-2 mt-1">
                <img src={checkmark} alt="checkmark" />
              </span>
              Customer Service with 79 languages
            </h3>
            <div className="flex flex-col md:flex-row w-full justify-start my-6">
              <a
                href="#"
                className="gradientOrangeBg my-3 text-center hover:shadow-[0_0_5px_rgba(255,255,0,0.4),_0_0_10px_rgba(255,255,0,0.2),_0_0_15px_rgba(255,255,0,0.1)] text-base font-medium px-10 md:mr-2 py-3 text-white rounded-full shadow-sm "
              >
                Download The Theme
              </a>
              <button className="bg-transparent text-base font-medium px-12 py-3 text-black rounded-full border-2 border-[#ff6700] shadow-sm hover:shadow-md hover:bg-[#ff6700] md:ml-2 my-3 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-[100%] mr-12">
          <div>
            <img
              src={featureImg1}
              className="w-[100%] h-[100%] object-cover"
              alt="Collabration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsSection;
