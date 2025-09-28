import Button from "./Button";
const Hero = () => {
  return (
    <section className="" id="section1">
      <div className="fixed top-[45px] left-0 h-1/3 w-full xl:top-[89px] xl:h-[calc(100vh-88px)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video w-screen object-fill"
        >
          <source
            src="https://www.in-plus.co.jp/wp-content/uploads/01_eSIM_v2-7_1205_1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Mobile/Tablet content overlay - only show on small screens */}
      <div className="fixed top-82 left-0 z-10 h-[70vh] w-full xl:hidden">
        {/* Content section - overlays on the lower 2/3 */}
        <div className="h-full w-full overflow-y-auto bg-white">
          <div className="h-full p-4 pb-8">
            {/* Three product images - smaller size */}
            <div className="mb-4 grid grid-cols-3 gap-2">
              <div className="text-center">
                <img
                  src="https://www.in-plus.co.jp/wp-content/uploads/1-13.png"
                  alt="JAPAN&GLOBAL UNLIMITED"
                  className="h-16 w-full rounded-lg object-cover shadow-md sm:h-20"
                />
                <h3 className="mt-1 text-xs font-bold text-gray-800 sm:text-sm">
                  UNLIMITED
                </h3>
              </div>
              <div className="text-center">
                <img
                  src="https://www.in-plus.co.jp/wp-content/uploads/2-14.png"
                  alt="JAPAN&GLOBAL SIM"
                  className="h-16 w-full rounded-lg object-cover shadow-md sm:h-20"
                />
                <h3 className="mt-1 text-xs font-bold text-gray-800 sm:text-sm">
                  SIM
                </h3>
              </div>
              <div className="text-center">
                <img
                  src="https://www.in-plus.co.jp/wp-content/uploads/3banner-1.png"
                  alt="JAPAN&GLOBAL eSIM"
                  className="h-16 w-full rounded-lg object-cover shadow-md sm:h-20"
                />
                <h3 className="mt-1 text-xs font-bold text-gray-800 sm:text-sm">
                  eSIM
                </h3>
              </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-pink-600 opacity-80 sm:text-4xl">
                  01
                </div>
                <h2 className="text-sm leading-tight font-bold text-gray-800 sm:text-base">
                  JAPAN & GLOBAL SIM・eSIM・UNLIMITED
                </h2>
              </div>

              <p className="text-sm font-semibold text-pink-600 sm:text-base">
                これまでにない通信シームレス世界を
              </p>

              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                日本でも世界でも、いつでも、何度でも、「日数」「容量」を選んで快適な通信を
              </p>

              <div className="grid grid-cols-3 gap-2">
                <Button variant="unlimited" size="small" className="w-full">
                  UNLIMITED
                </Button>
                <Button variant="primary" size="small" className="w-full">
                  SIM
                </Button>
                <Button variant="esim" size="small" className="w-full">
                  eSIM
                </Button>
              </div>

              {/* YouTube video */}
              <div className="mt-3">
                <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    width="100%"
                    height="160"
                    src="https://www.youtube.com/embed/hzcflkPRXi0"
                    title="ええじゃないか動画ご紹介"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
