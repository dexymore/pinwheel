import React from "react";
import user1 from "../../assets/FeaturePageAssets/avatar-1.png";
import user2 from "../../assets/FeaturePageAssets/avatar-2.png";
import user3 from "../../assets/FeaturePageAssets/avatar-3.png";
import user4 from "../../assets/FeaturePageAssets/avatar-4.png";
import icon1 from "../../assets/FeaturePageAssets/feature-icon-1.svg";
import icon2 from "../../assets/FeaturePageAssets/feature-icon-8.svg";
import icon3 from "../../assets/FeaturePageAssets/feature-icon-9.svg";

const WorkspaceSection = () => {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        {/* Title */}
        <div className="w-full text-center ">
          <h2 className="mb-4 text-4xl md:text-4xl font-extrabold leading-tight md:w-[50%] mx-auto">
            Build collaborative workspaces for your team
          </h2>
          <p className=" mt-2 text-gray text-md md:w-[50%] my-6 text-gray-400 mx-auto ">
            Donec sollicitudin molestie malesda. Donec sollitudin molestie
            malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies
          </p>
        </div>

        <div className=" w-full grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 shadow-md bg-white rounded-2xl mx-auto">
          <div className="bg-[#FAFAFA] flex flex-col md:p-14  md:m-8 rounded-xl">
            <h2 className="text-2xl font-extrabold text-start my-3 ">
              Project Management
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="flex flex-col bg-white p-6 rounded-xl shadow-xl">
                <img
                  src={user1}
                  className="w-16 h-16 mx-auto rounded-full"
                  alt="user1"
                />
                <span className="w-[35%] h-[14px] shadow-3xl my-2 rounded-3xl bg-[#ECECEC] mx-auto"></span>
                <span className="w-[50%] h-[10px] shadow-3xl rounded-3xl my-2 bg-[#ECECEC] mx-auto"></span>
              </div>
              <div className="flex flex-col bg-white p-6 rounded-xl shadow-xl">
                <img
                  src={user2}
                  className="w-16 h-16 mx-auto   rounded-full"
                  alt="user1"
                />
                <span className="w-[35%] h-[14px] shadow-3xl my-2 rounded-3xl bg-[#ECECEC] mx-auto"></span>
                <span className="w-[50%] h-[10px] shadow-3xl rounded-3xl my-2 bg-[#ECECEC] mx-auto"></span>
              </div>
              <div className="flex flex-col bg-white p-6 rounded-xl shadow-xl">
                <img
                  src={user3}
                  className="w-16 h-16 mx-auto rounded-full"
                  alt="user1"
                />
                <span className="w-[35%] h-[14px] shadow-3xl my-2 rounded-3xl bg-[#ECECEC] mx-auto"></span>
                <span className="w-[50%] h-[10px] shadow-3xl rounded-3xl my-2 bg-[#ECECEC] mx-auto"></span>
              </div>
              <div className="flex flex-col bg-white p-6 rounded-xl shadow-xl">
                <img
                  src={user4}
                  className="w-16 h-16 mx-auto rounded-full"
                  alt="user1"
                />
                <span className="w-[35%] h-[14px] shadow-3xl my-2 rounded-3xl bg-[#ECECEC] mx-auto"></span>
                <span className="w-[50%] h-[10px] shadow-3xl rounded-3xl my-2 bg-[#ECECEC] mx-auto"></span>
              </div>
            </div>
            <a
              href="#"
              className="relative inline-flex items-center text-white text-xl mt-8 mx-3 md:mx-0 justify-center font-medium px-12 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:shadow-[0_0_5px_rgba(255,255,0,0.4),_0_0_10px_rgba(255,255,0,0.2),_0_0_15px_rgba(255,255,0,0.1)]  gradientOrangeBg"
            >
              View all tasks
            </a>
          </div>
          <div className="md:px-10 ">
            
          <div className="grid grid-cols-1 md:py-7 h-full ">
            <div>
              <div className="flex flex-row items-center md:my-1 my-3 bg-[#FAFAFA] md:p-14 p-8 mx-3 rounded-md ">
                <div className="mx-2">
                  <img src={icon1} alt="icon1" className="w-10 h-10 " />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl my-2 font-extrabold text-start">
                    Team Collaboration
                  </h2>
                  <p className="text-gray-400">
                    Donec sollicitudin molestie malesuada. Donec sol
                  </p>
                </div>
              </div>
            </div>
            <div>
            <div className="flex flex-row items-center bg-[#FAFAFA] md:my-1 my-3 md:p-14 p-8 mx-3   rounded-md ">
                <div className="mx-2">
                  <img src={icon2} alt="icon1" className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl my-2 font-extrabold text-start">
                    Team Collaboration
                  </h2>
                  <p className="text-gray-400 text-xl">
                    Donec sollicitudin molestie malesuada. Donec sol
                  </p>
                </div>
              </div>
            </div>
            <div>
            <div className="flex flex-row items-center bg-[#FAFAFA] md:my-1 my-3 md:p-14 p-8 mx-3  rounded-md ">
                <div className="mx-2">
                  <img src={icon3} alt="icon1" className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl my-2 font-extrabold text-start">
                    Team Collaboration
                  </h2>
                  <p className="text-gray-400">
                    Donec sollicitudin molestie malesuada. Donec sol
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;
