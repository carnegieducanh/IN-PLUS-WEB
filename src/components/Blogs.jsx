const Blogs = () => {
  const blogs = [
    {
      date: "2025.07.17",
      title:
        "eSIMマイスター様の「JAPAN&GLOBAL eSIMの評判・口コミはいい？メリットや使い方を徹底解説！」にてご紹介いただきました。",
    },
    {
      date: "2025.05.19",
      title:
        "Wi-Fiのセカイ様のJAPAN&GLOBALeSIMの評判は？｜実際に使って感じたメリット&デメリットのご紹介をいただきました。",
    },
    {
      date: "2025.05.19",
      title:
        "Wi-Fiのセカイ様の【旅行前に】海外旅行でeSIMを使うならコレ！おすすめ8選のご紹介をいただきました。",
    },
    {
      date: "2025.04.02",
      title:
        "ぼーぺブログ様の『海外旅行におすすめのeSIMを紹介｜使い方やメリット・デメリットについても解説！』にて『JAPAN&GLOBAL eSIM』のご紹介をいただきました。",
    },
    {
      date: "2025.03.06",
      title:
        "モバイルWi-Fiのリアル様の『海外旅行におすすめのeSIMランキング！楽に使えてコスパが良いのは？【2025年最新版】』の記事にて、弊社の『JAPAN&GLOBAL eSIM』が【海外旅行におすすめのeSIM厳選ランキング9選】でご紹介いただきました。",
    },
    {
      date: "2025.03.05",
      title:
        "OZSANS, INC様の『ヨーロッパ旅行のおすすめeSIM【10選】周遊や電話番号付きも徹底比較』の記事にて、弊社の『JAPAN&GLOBAL eSIM』がヨーロッパ旅行におすすめのeSIM【10選】において、【第1位】でご紹介いただきました。",
    },
    {
      date: "2025.03.05",
      title:
        "OZSANS, INC様の『【徹底比較】海外旅行のeSIMおすすめ10選！購入時の注意点やWiFiとの違いも』の記事にて、弊社の『JAPAN&GLOBAL eSIM』が『海外旅行・世界一周のeSIMおすすめ10選』において、【第1位】でご紹介いただきました。",
    },
    {
      date: "2025.03.05",
      title:
        "OZSANS, INC様の『台湾旅行のeSIMおすすめ【6選】料金比較や実名認証不要のeSIMも紹介』の記事にて、弊社の『JAPAN&GLOBAL eSIM』をご紹介いただきました。",
    },
    {
      date: "2025.03.05",
      title:
        "OZSANS, INC様の『インドネシア・バリのeSIMおすすめ【6選】料金比較と使い方の注意点も』の記事にて、弊社の『JAPAN&GLOBAL eSIM』をご紹介いただきました。",
    },
    {
      date: "2025.03.05",
      title:
        "OZSANS, INC様の『オーストラリアのワーホリにおすすめのSIM！現地格安SIM・つなぎのeSIMも紹介』の記事にて、弊社の『JAPAN&GLOBAL eSIM』をご紹介いただきました。",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="animate-on-scroll mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-start justify-center gap-2 sm:gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
          {/* Left Side - BLOGS Title */}
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <h2 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
              BLOGS
            </h2>
            <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed sm:text-sm md:text-base">
              インプラスの商品についてBlogで取り上げられた実績をピックアップしてご紹介します。
              Blogでの掲載を希望される場合、お問い合わせフォームよりお送りください。
            </p>
          </div>

          {/* Right Side - Blogs Content with Scrollbar */}
          <div className="flex h-[200px] w-full flex-col items-center justify-center lg:h-1/3 2xl:h-[350px]">
            <div
              className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500 h-full w-full overflow-y-scroll rounded-lg border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#9CA3AF #F3F4F6",
              }}
              onWheel={(e) => {
                e.stopPropagation();
              }}
            >
              <table className="w-full border-collapse">
                <tbody>
                  {blogs.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b-2 border-gray-200 last:border-b-0"
                    >
                      <td className="p-1.5 sm:p-2 md:p-3">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <div className="min-w-0 flex-shrink-0">
                            <span className="block font-mono text-xs font-medium text-gray-600">
                              {item.date}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="line-clamp-2 text-xs leading-relaxed font-medium text-gray-900 transition-colors duration-200 group-hover:text-pink-600 sm:text-sm">
                              {item.title}
                            </h4>
                          </div>
                          <div className="hidden flex-shrink-0 sm:block">
                            <svg
                              className="h-3 w-3 text-gray-500 transition-colors duration-200 group-hover:text-pink-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
