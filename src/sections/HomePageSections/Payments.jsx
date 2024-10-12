import collabration from "../../assets/HomePageAssets/collaboration.png";
import checkmark from "../../assets/HomePageAssets/checkmark-circle.svg";
const Payments = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 flex md:flex-row-reverse flex-col-reverse py-8 mx-auto">
        <div className="flex w-[100%] mt-[3rem] flex-col text-start">
          <h1 className="max-w-2xl mb-4 text-4xl md:w-[22rem] font-extrabold md:leading-[2.5rem]">
            Accept payments any country in this whole universe
          </h1>
          <p className="max-w-2xl mb-4 mt-4 text-lg md:w-[28rem] text-gray-400 md:leading-[2rem]">
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
          </div>
        </div>

        <div className="flex w-[100%] mr-12">
          <div>
            <img
              src={collabration}
              className="w-[100%] h-[100%] object-cover"
              alt="Collabration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
