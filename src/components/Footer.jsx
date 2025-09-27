import React from "react";

const Footer = () => {
  return (
    <section className="overlay" id="section11">
      <div className="w-full pt-0 xl:pt-10">
        {/* Map Section */}
        <div className="h-[32vh] xl:h-[45vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477985330865!2d139.70025815!3d35.658581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca89b0c9f7f%3A0x1c4c9d9f9f9f9f9f!2z44CSMTU0LTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC35LiJ5LiB55uu77yV4oiS77yR77yW44CA5riL6LC35LiJ5LiB55uu44K544Kv44Ko44Ki44OT44Or!5e0!3m2!1sja!2sjp!4v1648000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="INPLUS Inc. - 渋谷三丁目スクエアビル 2F"
          ></iframe>
        </div>

        {/* Footer Section */}
        <div className="bg-[#194352] py-8 sm:py-12 md:py-16">
          <div className="animate-on-scroll mx-auto max-w-7xl px-4 sm:px-6 md:px-8 xl:max-w-none xl:px-12 2xl:px-20">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 md:gap-8 lg:grid-cols-6">
              {/* Company Info*/}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">
                  会社概要
                </h4>
                <ul className="space-y-1 text-xs text-gray-300 sm:text-sm">
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      会社概要 TOP
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      Identity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      Message
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      Outline
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      Recruitment
                    </a>
                  </li>
                  <li>
                    <img
                      src="https://www.in-plus.co.jp/wp-content/uploads/logo.png"
                      alt="Inplus Inc."
                      className="h-8 w-auto brightness-0 invert filter sm:h-10"
                    />
                  </li>
                </ul>
              </div>

              {/* SIM Services */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">
                  SIM
                </h4>
                <ul className="space-y-1 text-xs text-gray-300 sm:text-sm">
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN&GLOBAL UNLIMITED
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN&GLOBAL eSIM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN&GLOBAL SIM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN TRAVEL SIM
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">
                  サービス
                </h4>
                <ul className="space-y-1 text-xs text-gray-300 sm:text-sm">
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      【法人様専用】JAPAN&GLOBAL
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      【PoketWiFi】365PLUSWi-Fi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      【WEB制作】多言語Web
                    </a>
                  </li>
                </ul>
              </div>

              {/* Agent Recruitment */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">
                  代理募集
                </h4>
                <ul className="space-y-1 text-xs text-gray-300 sm:text-sm">
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      代理店様募集専用サイト
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">
                  お問い合わせ
                </h4>
                <ul className="space-y-1 text-xs text-gray-300 sm:text-sm">
                  <li>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-pink-400"
                    >
                      お問い合わせフォーム
                    </a>
                  </li>
                </ul>
                <div className="mt-2 text-xs text-gray-400">
                  <p>※お電話での受付はしておりません</p>
                  <p>※担当またはお問合せフォームよりご連絡下さいませ</p>
                </div>
              </div>

              {/* Collaborative projects */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-white sm:mb-3 sm:text-base">
                  協業している企画
                </h4>
                <ul className="w-2/3vw space-y-2 text-xs text-gray-300 sm:text-sm">
                  <li>
                    <img
                      src="https://www.in-plus.co.jp/wp-content/uploads/type1.jpg"
                      alt="Smooth Biz"
                      className="h-8 w-auto sm:h-10"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.in-plus.co.jp/wp-content/uploads/jisabiz.png"
                      alt="jisabiz"
                      className="h-8 w-auto sm:h-10"
                    />
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-gray-700">
              <div className="text-center">
                <p className="text-xs text-gray-400 sm:text-sm">
                  Copyright © INPLUS Inc. All Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
