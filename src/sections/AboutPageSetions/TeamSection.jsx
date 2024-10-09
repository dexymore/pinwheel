import user1 from "../../assets/AboutPageAssets/user-1.png";
import user2 from "../../assets/AboutPageAssets/user-2.png";
import user3 from "../../assets/AboutPageAssets/user-3.png";
import user4 from "../../assets/AboutPageAssets/user-4.png";
import user5 from "../../assets/AboutPageAssets/user-5.png";
import user6 from "../../assets/AboutPageAssets/user-6.png";
import TeamCard from "../../components/TeamCard";

const TeamSection = () => {
  return (
    <section>
      <div className=" mx-auto max-w-screen-xl mt-8 px-4 py-8 grid grid-cols-1">
        {/* Title */}
        <div className="w-full text-center ">
          <h2 className="mb-4 text-4xl md:text-4xl font-extrabold leading-tight md:w-[50%] mx-auto">
            This Is Who We Are
          </h2>

          <p className=" text-gray-400  text-xl">
            Donec sollicitudin molestie malesda. Donec sollitudin mol estie
            ultricies ligula sed magna dictum
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-6 mt-12 gap-1">
          <TeamCard name="Eleanor Pena" position="Founder & CEO" img={user1}></TeamCard>
          <TeamCard name="Savannah Nguyen" position="Head of infrastructure" img={user2}></TeamCard>
          <TeamCard name="Courtney Henry" position="Head of Brand Marketing" img={user3}></TeamCard>
          <TeamCard name="Floyd Miles" position="Head of Infrastructure" img={user4}></TeamCard>
          <TeamCard name="Robert Fox" position="Head of Product Design" img={user5}></TeamCard>
          <TeamCard name="Darrell Steward" position="Head of People & HR" img={user6}></TeamCard>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
