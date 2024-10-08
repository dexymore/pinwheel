import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent relative z-20 w-full  border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src="/"
            className="h-8"
         
          /> */}
          <span className="self-center text-2xl  whitespace-nowrap font-meduim">
            Pinwheel
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black bg-[#fff]  px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:text-[#FF6700]"
          >
            Sign up now
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden "
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8  font-medium  ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-[#FF6700]  "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-[#FF6700]  "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-[#FF6700]  "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-[#FF6700]  "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-[#FF6700]  "
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-[#FF6700]  "
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 hover:text-[#FF6700]  "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;