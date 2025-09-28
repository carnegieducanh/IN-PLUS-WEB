import { useState } from "react";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const AccordionSection = ({ title, children, sectionKey }) => {
    const isOpen = openSections[sectionKey];

    return (
      <div className="border-b border-gray-600">
        <button
          className="flex w-full items-center justify-between py-4 text-left transition-colors duration-300 hover:bg-gray-700/20"
          onClick={() => toggleSection(sectionKey)}
        >
          <h4 className="text-base font-semibold text-white sm:text-lg">
            {title}
          </h4>
          <svg
            className={`h-5 w-5 text-white transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr] pb-0"
          }`}
        >
          <div className="min-h-0">
            <div
              className={`space-y-2 text-sm text-gray-300 transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1)] sm:text-base ${
                isOpen
                  ? "translate-y-0 transform opacity-100 delay-300"
                  : "translate-y-4 transform opacity-0 delay-0"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            {/* Mobile & Small Screen Layout (< xl) - Accordion Style */}
            <div className="xl:hidden">
              {/* Company Logo */}
              <div className="mb-8 hidden text-center">
                <img
                  src="https://www.in-plus.co.jp/wp-content/uploads/logo.png"
                  alt="Inplus Inc."
                  className="mx-auto h-12 w-auto brightness-0 invert filter sm:h-16"
                />
              </div>

              {/* Accordion Sections */}
              <div className="space-y-0">
                {/* Company Info */}
                <AccordionSection title="会社概要" sectionKey="company">
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      会社概要 TOP
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      Identity
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      Message
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      Outline
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      Recruitment
                    </a>
                  </div>
                </AccordionSection>

                {/* SIM Services */}
                <AccordionSection title="SIM" sectionKey="sim">
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN&GLOBAL UNLIMITED
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN&GLOBAL eSIM
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN&GLOBAL SIM
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      JAPAN TRAVEL SIM
                    </a>
                  </div>
                </AccordionSection>

                {/* Services */}
                <AccordionSection title="サービス" sectionKey="services">
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      【法人様専用】JAPAN&GLOBAL
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      【PoketWiFi】365PLUSWi-Fi
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      【WEB制作】多言語Web
                    </a>
                  </div>
                </AccordionSection>

                {/* Agent Recruitment */}
                <AccordionSection title="代理募集" sectionKey="recruitment">
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      代理店様募集専用サイト
                    </a>
                  </div>
                </AccordionSection>

                {/* Contact */}
                <AccordionSection title="お問い合わせ" sectionKey="contact">
                  <div>
                    <a
                      href="#"
                      className="block py-1 transition-colors duration-200 hover:text-pink-400"
                    >
                      お問い合わせフォーム
                    </a>
                  </div>
                  <div className="mt-3 text-xs text-gray-400 sm:text-sm">
                    <p>※お電話での受付はしておりません</p>
                    <p>※担当またはお問合せフォームよりご連絡下さいませ</p>
                  </div>
                </AccordionSection>

                {/* Collaborative projects */}
                <AccordionSection
                  title="協業している企画"
                  sectionKey="partnerships"
                >
                  <div className="flex justify-center space-x-4 pt-2">
                    <img
                      src="https://www.in-plus.co.jp/wp-content/uploads/type1.jpg"
                      alt="Smooth Biz"
                      className="h-10 w-auto sm:h-12"
                    />
                    <img
                      src="https://www.in-plus.co.jp/wp-content/uploads/jisabiz.png"
                      alt="jisabiz"
                      className="h-10 w-auto sm:h-12"
                    />
                  </div>
                </AccordionSection>
              </div>
            </div>

            {/* Desktop Layout (xl and larger) */}
            <div className="hidden grid-cols-6 gap-8 xl:grid">
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
                </ul>
                {/* Company Logo for Desktop */}
                <div className="hidden text-center xl:block">
                  <img
                    src="https://www.in-plus.co.jp/wp-content/uploads/logo.png"
                    alt="Inplus Inc."
                    className="mx-auto h-16 w-auto brightness-0 invert filter"
                  />
                </div>
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
                <div className="space-y-2">
                  <img
                    src="https://www.in-plus.co.jp/wp-content/uploads/type1.jpg"
                    alt="Smooth Biz"
                    className="h-8 w-auto sm:h-10"
                  />
                  <img
                    src="https://www.in-plus.co.jp/wp-content/uploads/jisabiz.png"
                    alt="jisabiz"
                    className="h-8 w-auto sm:h-10"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-8 border-t border-gray-700 pt-6 xl:mt-12 xl:pt-8">
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
