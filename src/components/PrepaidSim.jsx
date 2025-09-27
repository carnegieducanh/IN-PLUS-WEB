import React from "react";
import Button from "./Button";

const PrepaidSim = () => {
  return (
    <section
      className="section overlay flex min-h-screen items-center justify-center"
      id="section3"
    >
      <div className="animate-on-scroll mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20 xl:max-w-none xl:px-12 2xl:px-20">
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:flex-row lg:gap-32">
          {/* Left Side - Layered Images */}
          <div className="relative order-2 flex w-full items-center justify-center lg:order-1 lg:w-1/2">
            <div className="relative w-full max-w-lg">
              {/* First Image - Background (Larger) */}
              <div className="relative z-10">
                <img
                  src="https://www.in-plus.co.jp/wp-content/uploads/2-2-min.png"
                  alt="PREPAID SIM Card Package"
                  className="h-64 w-48 -rotate-3 transform rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:rotate-1 sm:h-80 sm:w-60 md:h-96 md:w-72 lg:h-[28rem] lg:w-80 xl:h-[32rem] xl:w-96"
                />
              </div>

              {/* Second Image - Foreground (Smaller, Overlapped) */}
              <div className="absolute right-2 bottom-4 z-20 md:right-4 md:bottom-6">
                <img
                  src="https://www.in-plus.co.jp/wp-content/uploads/inplus-top-image-4-5-min.png"
                  alt="SIM Card Usage"
                  className="h-40 w-28 rotate-6 transform rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:rotate-3 sm:h-48 sm:w-36 md:h-56 md:w-40 lg:h-64 lg:w-48 xl:h-72 xl:w-52"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="order-1 w-full text-left lg:order-2 lg:w-1/2">
            <div className="mb-2 text-4xl font-bold text-pink-600 opacity-80 sm:mb-3 sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl">
              02
            </div>
            <h2 className="mb-4 text-xl leading-tight font-bold text-gray-800 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl">
              INPLUS PREPAID SIM
            </h2>
            <p className="mb-4 text-base font-semibold text-pink-600 sm:mb-5 sm:text-lg md:mb-6 md:text-xl">
              快適な通信で、快適な日本の旅を
            </p>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-7 sm:text-base md:mb-8 md:text-lg">
              国内唯一の「MNO(純正)回線」を使用。
              大手コンビニ、空港内などで展開中。
            </p>

            <Button variant="primary" size="medium">
              詳細ページ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepaidSim;
