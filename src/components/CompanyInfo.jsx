import React from "react";
import Button from "./Button";

const CompanyInfo = () => {
  const companyData = [
    {
      label: "会社名",
      value: "イン・プラス株式会社",
      valueEn: "Inplus Inc.",
    },
    {
      label: "設立",
      value: "2018年1月",
    },
    {
      label: "代表",
      value: "木村 幸太郎",
    },
    {
      label: "所在地",
      value: ["東京都渋谷区渋谷3-5-16 スクエアビル2F", "[Googleマップ]"],
    },

    {
      label: "FAX",
      value: [
        "050-3588-4208",
        "※お電話での受付はしておりません。",
        "※担当またはお問合せフォームよりご連絡下さいませ。",
      ],
    },
    {
      label: "事業内容",
      value: [
        "1.グローバル通信事業",
        "2.情報通信サービス事業",
        "3.広告代理店事業",
      ],
    },
  ];

  return (
    <section
      className="section overlay flex min-h-screen items-center justify-center"
      id="section11"
    >
      <div className="flex h-full w-full items-center justify-center pt-15">
        <div className="animate-on-scroll mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full flex-col items-center justify-center gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Left Side - Company Data Table */}
            <div className="flex w-full flex-col items-center justify-center">
              <div className="w-full max-w-lg">
                <div className="overflow-hidden rounded-lg border-2 border-gray-300 bg-white shadow-lg">
                  <table className="w-full border-collapse">
                    <tbody>
                      {companyData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b-2 border-gray-200 last:border-b-0"
                        >
                          <td className="w-1/3 border-r-2 border-gray-300 bg-gray-100 px-3 py-3 text-sm font-medium text-gray-700 sm:px-4 sm:py-4 sm:text-base">
                            {item.label}
                          </td>
                          <td className="bg-white px-3 py-3 text-sm text-gray-800 sm:px-4 sm:py-4 sm:text-base">
                            {Array.isArray(item.value) ? (
                              <ul className="space-y-1">
                                {item.value.map((business, idx) => (
                                  <li key={idx} className="leading-relaxed">
                                    {business}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div>
                                <div className="leading-relaxed">
                                  {item.value}
                                </div>
                                {item.valueEn && (
                                  <div className="mt-1 text-xs text-gray-600 sm:text-sm">
                                    {item.valueEn}
                                  </div>
                                )}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Side - Company Information Title & Description */}
            <div className="flex flex-col items-start justify-center gap-3 text-left sm:gap-4">
              <h2 className="text-lg font-bold text-pink-600 sm:text-xl md:text-2xl lg:text-3xl">
                COMPANY INFORMATION
              </h2>
              <div className="max-w-lg space-y-3 sm:space-y-4">
                <p className="text-xs leading-relaxed text-gray-700 sm:text-sm md:text-base">
                  インプラスの会社概要、企業理念、
                  メッセージ、採用情報を掲載しています。
                  資料請求・お問い合わせはフォームよりお気軽にお送りください。
                </p>
                <Button
                  variant="primary"
                  size="medium"
                  className="hidden xl:block"
                >
                  詳細ページ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
