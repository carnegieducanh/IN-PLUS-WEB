import React from "react";

const Messenger = () => {
  return (
    <section className="section" id="section7">
      {" "}
      {/* Top Section - Main Message with Background */}
      <div className="relative flex min-h-screen min-w-screen items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,79,79,0.6), rgba(79,79,79,0.6)), url('https://assets.st-note.com/production/uploads/images/65791757/rectangle_large_type_2_5df075c639127740bb13d9f27f9b3c4c.jpg?width=1200')",
          }}
        ></div>

        {/* Content */}
        <div className="animate-on-scroll relative z-10 flex flex-col items-center justify-center gap-10 px-4 text-left sm:px-6 md:px-8 xl:gap-0">
          <h1 className="text-2xl leading-tight font-bold text-white sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl">
            日本をもっと魅力的に、日本にワクワクを
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 sm:mb-7 sm:text-lg md:mb-8 md:text-xl">
            私たちインプラスは訪日外国人をはじめ日本在住の方にも
            <br />
            通信環境の提供を通じて「体験」を付加価値『＋(プラス)』で繋ぎます。
          </p>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 sm:mb-7 sm:text-lg md:mb-8 md:text-xl">
            日本の素晴らしい産業・文化・サービス・地域‥の魅力を伝えるプラットフォームを創り、{" "}
            <br />
            顧客体験クオリティをテクノロジーの活用でもっと元気でダイナミックな提供を目指します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Messenger;
