import React from "react";
import Button from "./Button";

const WiFiSection = () => {
  return (
    <section
      className="section overlay flex min-h-screen items-center justify-center"
      id="section4"
    >
      <div className="animate-on-scroll mx-auto max-w-6xl xl:max-w-none px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20 xl:px-12 2xl:px-20">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          {/* Left Side Content */}
          <div className="text-left">
            <div className="mb-2 text-4xl font-bold text-pink-600 opacity-80 sm:mb-3 sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl">
              03
            </div>
            <h2 className="mb-4 text-xl leading-tight font-bold text-gray-800 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl">
              365plusWiFi
            </h2>
            <p className="mb-4 text-base font-semibold text-pink-600 sm:mb-5 sm:text-lg md:mb-6 md:text-xl">
              日本も世界も、これ1台で
            </p>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-7 sm:text-base md:mb-8 md:text-lg">
              テレワークや旅行、日常利用でも。あらゆるシーンで活躍する大容量ポケットWiFi
            </p>

            <Button variant="primary" size="medium">
              詳細ページ
            </Button>
          </div>

          {/* Right Side - Product Image/Visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="https://www.in-plus.co.jp/wp-content/uploads/inplus-1-min.png"
                alt="365plusWiFi"
                className="h-64 w-48 sm:h-80 sm:w-60 md:h-96 md:w-72 lg:h-[28rem] lg:w-80 xl:h-[32rem] xl:w-96 -rotate-3 transform rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WiFiSection;
