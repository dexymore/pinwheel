import CoresCard from "../../components/CoresCard";

const CoresSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="flex w-full mx-auto justify-between md:flex-row flex-col md:mt-1 mt-24 text-center md:text-start">
          <h1 className="max-w-2xl mb-4 text-4xl md:w-[22rem] font-extrabold md:leading-[4rem]">
            The six core work drive everything we do
          </h1>
          <div className=" flex items-center ml-auto mb-8">
            <a
              href="#"
              className="gradientOrangeBg font-medium text-xl text-white rounded-full shadow-sm  px-12 py-3 flex items-center justify-center hover:shadow-[0_0_5px_rgba(255,255,0,0.4),_0_0_10px_rgba(255,255,0,0.2),_0_0_15px_rgba(255,255,0,0.1)]"
            >
              Download The Theme
            </a>
          </div>
        </div>


        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-6 gap-6">
        <CoresCard title="Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." number={1}></CoresCard>
        <CoresCard title="Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " number={2}></CoresCard>
        <CoresCard title="Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " number={3}></CoresCard>
        <CoresCard title="Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " number={4}></CoresCard>
        <CoresCard title="Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " number={5}></CoresCard>
        <CoresCard title="Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. " number={6}></CoresCard>

        </div>
      </div>
    </section>
  );
};

export default CoresSection;
