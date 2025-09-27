import { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to scroll to home section
  const scrollToHome = () => {
    // Try to find the container and scroll to first section
    const container = document.querySelector('.sections-container');
    if (container) {
      const firstSection = container.children[0];
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Fallback to top of page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Also try to trigger section change via custom event
    window.dispatchEvent(new CustomEvent('scrollToHome'));
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#194352] shadow-lg transition-all duration-300">
      <div className="mx-auto flex max-w-screen flex-row flex-wrap items-center justify-between px-10 py-4">
        {/* Logo */}
        <div
          onClick={scrollToHome}
          className="flex items-center space-x-3 text-4xl rtl:space-x-reverse cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/simdata.png"
            className="h-14 rounded-tl-2xl transition-transform duration-300 hover:rotate-3"
            alt="In-plus SIM Logo"
          />
          <span className="self-center font-semibold whitespace-nowrap text-white transition-colors duration-300 hover:text-pink-300">
            In-plus
          </span>
        </div>

        {/* Nút mở menu mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
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

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="mt-4 flex flex-col items-center rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:text-white rtl:space-x-reverse">
            <li className="group relative">
              <a
                href="#"
                className="block rounded-sm px-3 py-2 md:bg-transparent md:p-0 md:hover:text-[#dd007f]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                SIM
              </a>

              {/* Dropdown menu khi hover */}
              <div className="absolute -left-4 z-10 hidden divide-y overflow-hidden rounded-lg pt-2 font-normal text-white shadow-sm group-hover:block">
                <ul className="overflow-hidden rounded-lg border border-[hsla(0,0%,100%,0.6)] bg-[rgba(76,101,114,0.4)] px-4 py-3 backdrop-blur-[10px] transition-all duration-500">
                  <li>
                    <a
                      href="#"
                      className="block py-2 whitespace-nowrap md:hover:text-[#dd007f]"
                    >
                      JAPAN&GLOBAL UNLIMITED
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      JAPAN&GLOBAL eSIM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      JAPAN&GLOBAL SIM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      JAPAN TRAVEL SIM
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Dropdown hover */}
            <li className="group relative">
              <a
                href="#"
                className="block rounded-sm px-3 py-2 md:bg-transparent md:p-0 md:hover:text-[#dd007f]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                サービス
              </a>

              {/* Dropdown menu khi hover */}
              <div className="absolute -left-4 z-10 hidden divide-y overflow-hidden rounded-lg pt-2 font-normal text-white shadow-sm group-hover:block">
                <ul className="overflow-hidden rounded-lg border border-[hsla(0,0%,100%,0.6)] bg-[rgba(76,101,114,0.4)] px-4 py-3 backdrop-blur-[10px] transition-all duration-500">
                  <li>
                    <a
                      href="#"
                      className="block py-2 whitespace-nowrap md:hover:text-[#dd007f]"
                    >
                      【法人様専用】JAPAN&GLOBAL
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      【PoketWiFi 】365PLUSWi-Fi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      【 WEB制作 】多言語Web
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative">
              <a
                href="#"
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#dd007f]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                代理募集
              </a>
              <div className="absolute -left-4 z-10 hidden divide-y overflow-hidden rounded-lg pt-2 font-normal text-white shadow-sm group-hover:block">
                <ul className="overflow-hidden rounded-lg border border-[hsla(0,0%,100%,0.6)] bg-[rgba(76,101,114,0.4)] px-4 py-3 backdrop-blur-[10px] transition-all duration-500">
                  <li>
                    <a
                      href="#"
                      className="block py-2 whitespace-nowrap md:hover:text-[#dd007f]"
                    >
                      代理店様募集専用サイト
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#dd007f]"
              >
                ブログ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#dd007f]"
              >
                会社概要
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-2xl text-[#1d9bf0] hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-2xl text-[#1d9bf0] hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="group relative">
              <button
                className="flex flex-row items-center gap-1 rounded-2xl border px-3 py-2 md:bg-transparent md:py-0.5"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <GrLanguage />
                <p>JP</p>
                <RiArrowDropDownLine />
              </button>

              {/* Dropdown menu khi hover */}
              <div className="absolute -left-4 z-10 hidden divide-y overflow-hidden rounded-lg pt-2 font-normal text-white shadow-sm group-hover:block">
                <ul className="overflow-hidden rounded-lg border border-[hsla(0,0%,100%,0.6)] bg-[rgba(76,101,114,0.4)] px-4 py-3 backdrop-blur-[10px] transition-all duration-500">
                  <li>
                    <a
                      href="#"
                      className="block py-2 whitespace-nowrap md:hover:text-[#dd007f]"
                    >
                      JAPANESE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      ENGLISH
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      CHINESE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 md:hover:text-[#dd007f]">
                      KOREAN
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
