import React from "react";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section
      className="section overlay flex min-h-screen items-center justify-center"
      id="section10"
    >
      <div className="animate-on-scroll mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20 xl:max-w-none xl:px-12 2xl:px-20">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          {/* Left Side Content */}
          <div className="text-left">
            <div className="mb-2 text-4xl font-bold text-pink-600 opacity-80 sm:mb-3 sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl">
              ABOUT US
            </div>
            <h2 className="mb-4 text-xl leading-tight font-bold text-gray-800 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl">
              体験を、最高の感動に
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-7 sm:text-base md:mb-8 md:text-lg">
              いかに将来へ貢献できるのかを常に考え、
              人々と社会に新たな価値を提供し続けます。
            </p>

            <Button variant="primary" size="medium">
              詳細ページ
            </Button>
          </div>

          {/* Right Side - Product Image/Visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="https://www.in-plus.co.jp/wp-content/uploads/S__15122434.jpg"
                alt="About Us Visual"
                className="h-64 w-48 transform rounded-2xl object-cover shadow-2xl transition-transform duration-300 sm:h-80 sm:w-60 md:h-96 md:w-72 lg:h-[28rem] lg:w-80 xl:h-[32rem] xl:w-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
