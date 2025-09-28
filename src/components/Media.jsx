const Media = () => {
  const mediaNews = [
    {
      date: "2025.07.22",
      title:
        "【プレスリリース】セキュアリンク株式会社と高齢化による地域社会における高齢者の居場所づくりや、見守り体制の強化を目指し、包括業務提携を締結致しました。",
    },
    {
      date: "2024.11.24",
      title:
        "【プレスリリース】日経新聞掲載。セブンイレブン、スマホ「eSIM」で訪日客取り込みで当社とセブン-イレブン様との取組みを記載頂きました。",
    },
    {
      date: "2024.10.04",
      title:
        "【プレスリリース】海外渡航時などにおける一括通信手配が可能な 法人向けeSIM通信サービス「JAPAN&GLOBAL BUSINESS」提供開始！",
    },
    {
      date: "2024.9.12",
      title:
        "【プレスリリース】JAPAN&GLOBALeSIM がヨドバシカメラで販売提供開始！",
    },
    {
      date: "2023.12.25",
      title:
        "【プレスリリース】インバウンド獲得に向けた自社サイトの多言語翻訳サービス「エドマルチ」提供開始！",
    },
    {
      date: "2023.05.02",
      title:
        "【プレスリリース】こだわり楽しむ、モノ選び【Picky's】にてご紹介頂きました",
    },
    {
      date: "2023.01.16",
      title:
        "【プレスリリース】「JAPAN&GLOBAL SIM」をファミリーマート店舗で販売開始！",
    },
    {
      date: "2023.01.05",
      title: "代表電話番号変更のお知らせ",
    },
    {
      date: "2022.12.14",
      title: "年末年始営業のご案内",
    },
    {
      date: "2022.10.24",
      title: "サイトリニューアルのお知らせ",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="animate-on-scroll mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-start justify-center gap-2 sm:gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
          {/* Left Side - MEDIA/NEWS Title */}
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <h2 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
              MEDIA / NEWS
            </h2>
            <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-pink-600 sm:text-sm md:text-base">
              インプラスに関するプレスリリースやニュース、紹介記事をピックアップしてご紹介します。
              取材・掲載のお問い合わせ、ご相談はお問い合わせフォームよりお送りください。
            </p>
          </div>

          {/* Right Side - Media News Content with Scrollbar */}
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
                  {mediaNews.map((item, index) => (
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
                          <div className="flex-shrink-0">
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
                                d="M9 5l7 7-7 7"
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

export default Media;
