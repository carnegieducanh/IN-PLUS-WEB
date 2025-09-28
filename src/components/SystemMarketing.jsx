import React from "react";
import Button from "./Button";

const SystemMarketingSection = () => {
  return (
    <section
      className="section overlay flex min-h-screen items-center justify-center"
      id="section4"
    >
      <div className="animate-on-scroll mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20 xl:max-w-none xl:px-12 2xl:px-20">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          {/* Left Side Content */}
          <div className="text-left">
            <div className="mb-2 text-5xl font-bold text-pink-600 opacity-80 sm:mb-3 sm:text-6xl md:mb-4 md:text-7xl lg:text-8xl">
              05
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-gray-800 sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
              System開発・marketing事業
            </h2>
            <p className="mb-4 text-lg font-semibold text-pink-600 sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
              日本と世界の「架け橋」で解決
            </p>
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:mb-7 sm:text-lg md:mb-8 md:text-xl">
              オフショア開発やテレワークを併用しながら
              時間・コスト・精度共に次に繋がる仕組みで提供
            </p>

            <Button variant="primary" size="medium">
              お問い合わせ
            </Button>
          </div>

          {/* Right Side - Product Image/Visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="https://www.in-plus.co.jp/wp-content/uploads/develop-marketing_332.png"
                alt="system開発・marketing事業"
                className="h-64 w-48 -rotate-3 transform rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:rotate-1 sm:h-80 sm:w-60 md:h-96 md:w-72 lg:h-[28rem] lg:w-80 xl:h-[32rem] xl:w-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemMarketingSection;
