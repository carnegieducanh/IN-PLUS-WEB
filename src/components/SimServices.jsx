import React, { useState, useEffect } from "react";
import Button from "./Button";

const SimServices = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth >= 1280); // xl breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="section overlay" id="section2">
      <div className="w-full">
        <div className="animate-on-scroll mx-auto max-w-7xl px-8 py-20 2xl:max-w-none 2xl:px-16 2xl:py-32">
          {/* Top 3 Product Images/Buttons */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 2xl:mb-16 2xl:gap-12">
            <div className="cursor-pointer text-center transition-transform duration-300 hover:-translate-y-2">
              <img
                src="https://www.in-plus.co.jp/wp-content/uploads/1-13.png"
                alt="JAPAN&GLOBAL UNLIMITED"
                className="mb-4 h-48 w-full rounded-2xl object-fill shadow-xl"
              />
              <h3 className="text-xl font-bold text-gray-800">
                JAPAN&GLOBAL UNLIMITED
              </h3>
            </div>
            <div className="cursor-pointer text-center transition-transform duration-300 hover:-translate-y-2">
              <img
                src="https://www.in-plus.co.jp/wp-content/uploads/2-14.png"
                alt="JAPAN&GLOBAL SIM"
                className="mb-4 h-48 w-full rounded-2xl object-fill shadow-xl"
              />
              <h3 className="text-xl font-bold text-gray-800">
                JAPAN&GLOBAL SIM
              </h3>
            </div>
            <div className="cursor-pointer text-center transition-transform duration-300 hover:-translate-y-2">
              <img
                src="https://www.in-plus.co.jp/wp-content/uploads/3banner-1.png"
                alt="JAPAN&GLOBAL eSIM"
                className="mb-4 h-48 w-full rounded-2xl object-fill shadow-xl"
              />
              <h3 className="text-xl font-bold text-gray-800">
                JAPAN&GLOBAL eSIM
              </h3>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 2xl:mt-20 2xl:gap-24">
            {/* Left Side Content */}
            <div className="flex flex-col justify-center text-left">
              <div className="mb-4 flex items-center gap-4 text-left">
                <div className="mb-4 text-6xl font-bold text-pink-600 opacity-80 md:text-7xl">
                  01
                </div>
                <h2 className="mb-4 text-xl leading-tight font-bold text-gray-800 sm:mb-5 sm:text-2xl md:text-3xl lg:text-4xl">
                  JAPAN & GLOBAL SIM・eSIM・UNLIMITED
                </h2>
              </div>
              <p className="mb-4 text-base font-semibold text-pink-600 sm:mb-5 sm:text-lg md:text-xl">
                これまでにない通信シームレス世界を
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                日本でも世界でも、いつでも、何度でも、「日数」「容量」を選んで快適な通信を
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="unlimited" size="xlarge">
                  UNLIMITED
                </Button>
                <Button variant="primary" size="xlarge">
                  SIM
                </Button>
                <Button variant="esim" size="xlarge">
                  eSIM
                </Button>
              </div>
            </div>

            {/* Right Side Video */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/hzcflkPRXi0"
                  title="ええじゃないか動画ご紹介"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimServices;
