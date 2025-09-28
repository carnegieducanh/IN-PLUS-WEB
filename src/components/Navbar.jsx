import { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/navigation.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to scroll to home section
  const scrollToHome = () => {
    // Try to find the container and scroll to first section
    const container = document.querySelector(".sections-container");
    if (container) {
      const firstSection = container.children[0];
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Fallback to top of page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Also try to trigger section change via custom event
    window.dispatchEvent(new CustomEvent("scrollToHome"));
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#194352] shadow-lg transition-all duration-300">
      <div className="mx-auto flex max-w-screen flex-row flex-wrap items-center justify-between px-4 py-2 sm:px-6 sm:py-3 xl:px-10 xl:py-4">
        {/* Logo */}
        <div
          onClick={scrollToHome}
          className="flex cursor-pointer items-center space-x-2 text-2xl transition-transform duration-300 hover:scale-105 sm:space-x-3 sm:text-3xl xl:text-4xl rtl:space-x-reverse"
        >
          <img
            src="/simdata.png"
            className="h-8 rounded-tl-lg transition-transform duration-300 hover:rotate-3 sm:h-10 xl:h-14 xl:rounded-tl-2xl"
            alt="In-plus SIM Logo"
          />
          <span className="self-center font-semibold whitespace-nowrap text-white transition-colors duration-300 hover:text-pink-300">
            In-plus
          </span>
        </div>

        {/* Nút mở menu mobile với hiệu ứng */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg p-1 text-white transition-all duration-300 sm:h-10 sm:w-10 sm:p-2 xl:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <div className="hamburger-menu">
            <span
              className={`hamburger-line transition-all duration-300 ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`hamburger-line transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`hamburger-line transition-all duration-300 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            ></span>
          </div>
        </button>

        {/* Menu mobile overlay */}
        <div
          className={`${
            isMenuOpen ? "animate-slideInDown block" : "hidden"
          } fixed inset-0 top-[48px] z-40 w-full bg-[#194352]/95 backdrop-blur-md sm:top-[58px] xl:static xl:inset-auto xl:top-auto xl:z-auto xl:block xl:w-auto xl:bg-transparent xl:backdrop-blur-none`}
        >
          <ul className="mt-4 flex flex-col items-start space-y-4 px-4 py-6 font-medium text-white sm:mt-6 sm:space-y-6 sm:px-6 sm:py-8 xl:mt-0 xl:flex-row xl:space-y-0 xl:space-x-8 xl:border-0 xl:p-0 rtl:space-x-reverse">
            <li
              className={`group relative w-full transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "100ms" : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-base transition-colors duration-300 hover:text-[#dd007f] sm:text-lg xl:bg-transparent xl:p-0 xl:text-left xl:text-base"
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
            <li
              className={`group relative w-full transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-base transition-colors duration-300 hover:text-[#dd007f] sm:text-lg xl:bg-transparent xl:p-0 xl:text-left xl:text-base"
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

            <li
              className={`group relative w-full transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "300ms" : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-base transition-colors duration-300 hover:text-[#dd007f] sm:text-lg xl:border-0 xl:p-0 xl:text-left xl:text-base xl:hover:bg-transparent"
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
            <li
              className={`w-full transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-base transition-colors duration-300 hover:text-[#dd007f] sm:text-lg xl:border-0 xl:p-0 xl:text-left xl:text-base xl:hover:bg-transparent"
              >
                ブログ
              </a>
            </li>
            <li
              className={`w-full transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "500ms" : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-base transition-colors duration-300 hover:text-[#dd007f] sm:text-lg xl:border-0 xl:p-0 xl:text-left xl:text-base xl:hover:bg-transparent"
              >
                会社概要
              </a>
            </li>
            <li
              className={`w-full transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "600ms" : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-center text-xl text-[#1d9bf0] transition-colors duration-300 hover:text-blue-300 sm:text-2xl xl:border-0 xl:p-0 xl:text-left xl:hover:bg-transparent"
              >
                <FaFacebook />
              </a>
            </li>
            <li
              className={`w-full transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "700ms" : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-center text-xl text-[#1d9bf0] transition-colors duration-300 hover:text-blue-300 sm:text-2xl xl:border-0 xl:p-0 xl:text-left xl:hover:bg-transparent"
              >
                <FaTwitter />
              </a>
            </li>
            <li
              className={`group relative transition-all duration-300 xl:w-auto xl:translate-y-0 xl:opacity-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: isMenuOpen ? "800ms" : "0ms" }}
            >
              <button
                className="flex w-full flex-row items-center justify-center gap-1 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:bg-white/10 xl:w-auto xl:bg-transparent xl:py-0.5"
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
