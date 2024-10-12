import { useState } from "react";
import SalesByCountry from "../../assets/HomePageAssets/sells-by-country.png";
import collabration from "../../assets/HomePageAssets/collaboration.png";
import timer from "../../assets/HomePageAssets/timer.svg";
import brain from "../../assets/HomePageAssets/brain.svg";
import drop from "../../assets/HomePageAssets/drop.svg";

const Failure = () => {
  // State to track which div to display
  const [activeDiv, setActiveDiv] = useState("div1");

  return (
    <section>
      <div className="max-w-screen-xl px-4 flex md:flex-row flex-col-reverse py-8 mx-auto">
        <div className="flex w-[100%] mt-6 flex-col text-start">
          <h1 className="max-w-2xl mb-4 text-4xl md:w-[22rem] font-extrabold md:leading-[4rem]">
            The Highlighting Part Of Our Solution
          </h1>
          <p className="max-w-2xl mb-4 mt-4 text-2xl text-md md:w-[28rem] text-gray-400 md:leading-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.
          </p>

          <div className="flex flex-row">
            <nav className="mb-4 flex flex-col w-[28rem]">
              <button
                onClick={() => setActiveDiv("div1")}
                className="flex flex-row px-4 py-2 text-xl text-start rounded hover:bg-[#FCBCA0] focus:bg-[#FCBCA0]"
              >
                <span className="mr-2 mt-1">
                  <img src={drop} alt="timer" />
                </span>
                Habit building essential choose habit
              </button>
              <button
                onClick={() => setActiveDiv("div2")}
                className="flex flex-row px-4 py-2 text-xl text-start rounded hover:bg-[#FCBCA0] focus:bg-[#FCBCA0]"
              >
                <span className="mr-2 mt-1">
                  <img src={brain} alt="brain"></img>
                </span>
                Get an overview of Habit Calendars.
              </button>
              <button
                onClick={() => setActiveDiv("div3")}
                className="flex flex-row px-4 py-2 text-xl rounded text-start hover:bg-[#FCBCA0] focus:bg-[#FCBCA0]"
              >
                <span className="mr-2 mt-1">
                  <img src={timer} alt="timer" />
                </span>
                Start building with Habitify platform
              </button>
            </nav>
          </div>
        </div>

        <div className="flex w-[100%]">
          {/* Conditional rendering of the divs */}
          <div
            id="div1"
            className={`content-div ${
              activeDiv === "div1" ? "block" : "hidden"
            }`}
          >
            <img src={SalesByCountry} alt="Sales by country" />
          </div>

          <div
            id="div2"
            className={`content-div ${
              activeDiv === "div2" ? "block" : "hidden"
            }`}
          >
            <img src={collabration} alt="Collaboration" />
          </div>

          <div
            id="div3"
            className={`content-div ${
              activeDiv === "div3" ? "block" : "hidden"
            }`}
          >
            <img src={SalesByCountry} alt="Sales by country" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Failure;
