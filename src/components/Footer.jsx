import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faSkype,
  faSquareFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* <NewsTeller/> */}
      <footer className="z-20  w-full p-4 border-t shadow-lg bg-slate-[#F0F0F0] custom-shadow-top  md:flex md:flex-col md:items-center md:justify-between md:p-16">
        <div className="w-full max-w-screen-xl flex md:flex-row flex-col">
          <div className="flex-1">
            <h1 className="self-center  text-2xl font-semibold whitespace-nowrap">
              pinwheel
            </h1>
            <p className="mt-3 text-md w-[18rem] font-medium text-gray-400 dark:text-gray-400">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut .
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-xl">Socials</h2>
            <ul className="flex-col flex-wrap items-center mt-3 text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
              <li>
                <p className="mt-3 text-md font-medium text-gray-400 dark:text-gray-400">
                  themefisher@gmail.com
                </p>
              </li>
              <li>
                <div className="w-[25%] flex flex-row justify-between mt-3">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faSkype}
                      size="2xl"
                      className="hover:text-[#ff6700]  mr-2"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faSquareFacebook}
                      size="2xl"
                      className="hover:text-[#ff6700] ml-2 mr-2"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                      className="hover:text-[#ff6700] ml-2 mr-2"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="2xl"
                      className="hover:text-[#ff6700] ml-2 mr-2"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-xl mb-3">quick Links</h2>
            <ul className="flex-col  flex-wrap items-center  text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 hover:text-[#ff6700]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 hover:text-[#ff6700]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 hover:text-[#ff6700]"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#ff6700]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="text-xl">Policy</h2>
            <p className="mt-3 text-md font-medium text-gray-400 dark:text-gray-400">
              2118 Thornridge Cir. Syracuse, Connecticut 35624 (704) 555-0127
            </p>
          </div>
        </div>
        <div className="w-full mt-8 ">
          <h4 className="text-center text-gray-400">
            Designed And Developed by Themefisher | Distributed by ThemeWagon
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
