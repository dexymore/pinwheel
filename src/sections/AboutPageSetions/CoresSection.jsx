import CoresCard from "../../components/CoresCard";

const CoresSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="flex w-full justify-between md:flex-row flex-col md:mt-1 mt-24 text-center md:text-start">
          <h1 className="max-w-2xl mb-4 text-4xl md:w-[22rem] font-extrabold md:leading-[4rem]">
            The six core work drive everything we do
          </h1>
          <div className=" flex items-center">
            <a
              href="#"
              className="gradientOrangeBg font-medium text-xl text-white rounded-full shadow-sm hover:shadow-md px-12 py-3 flex items-center justify-center"
            >
              Download The Theme
            </a>
          </div>
        </div>


        <div className="grid md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-6">
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
