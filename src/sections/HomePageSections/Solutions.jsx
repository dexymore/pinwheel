import SolutionsCard from "../../components/SolutionsCard";
import icon1 from "../../assets/HomePageAssets/feature-icon-1.svg";
import icon2 from "../../assets/HomePageAssets/feature-icon-2.svg";
import icon3 from "../../assets/HomePageAssets/feature-icon-3.svg";
import icon4 from "../../assets/HomePageAssets/feature-icon-4.svg";
import icon5 from "../../assets/HomePageAssets/feature-icon-5.svg";
import icon6 from "../../assets/HomePageAssets/feature-icon-6.svg";
import icon7 from "../../assets/HomePageAssets/feature-icon-7.svg";
import icon8 from "../../assets/HomePageAssets/feature-icon-8.svg";
import icon9 from "../../assets/HomePageAssets/feature-icon-9.svg";
import icon10 from "../../assets/HomePageAssets/feature-icon-10.svg";

const Solutions = () => {
  return (
    <section className="contianer">
      <div className=" max-w-screen-xl px-4 py-8 mx-auto ">
        <div className="flex w-[100%] justify-between md:flex-row flex-col md:mt-1 mt-24 text-center md:text-start">
          <h1 className="max-w-2xl mb-4 text-4xl md:w-[22rem] font-extrabold md:leading-[4rem]">
            {" "}
            The Highlighting Part Of Our Solution
          </h1>
          <p className="max-w-2xl mb-4 mt-4 text-2xl text-md md:w-[28rem] text-gray-400 md:leading-[2rem]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin
            .
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 md:gap-8 gap-6 mt-8 md:grid-cols-4 ">
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon1}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon2}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon3}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon4}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon5}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon6}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon7}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon8}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon9}
            ></SolutionsCard>
            <SolutionsCard
              title="Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              imageUrl={icon10}
            ></SolutionsCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
