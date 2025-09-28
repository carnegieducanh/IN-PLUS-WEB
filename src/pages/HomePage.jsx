import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import "../style.css";
import BannerVid from "../components/BannerVid";
import NavigationDots from "../components/NavigationDots";

// Lazy load components for better performance
const Hero = lazy(() => import("../components/Hero"));
const SimServices = lazy(() => import("../components/SimServices"));
const PrepaidSim = lazy(() => import("../components/PrepaidSim"));
const WiFiSection = lazy(() => import("../components/WiFiSection"));
const MultilingualWeb = lazy(() => import("../components/MultilingualWeb"));
const SystemMarketingSection = lazy(
  () => import("../components/SystemMarketing"),
);
const CompanyInfo = lazy(() => import("../components/CompanyInfo"));
const Footer = lazy(() => import("../components/Footer"));
const Messenger = lazy(() => import("../components/Messenger"));
const News = lazy(() => import("../components/News"));
const AboutUs = lazy(() => import("../components/AboutUs"));

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="section-loader flex h-full items-center justify-center">
    <div className="animate-pulse text-blue-500">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-200 border-t-pink-600"></div>
    </div>
  </div>
);

const sections = [
  "ホーム",
  "SIM・eSIM",
  "PREPAID SIM",
  "365plusWiFi",
  "多言語 WEB",
  "開発・Marketing",
  "メッセージ",
  "ニュース",
  "会社概要",
  "会社概要-2",
  "アクセス",
];

const HomePage = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef([]);
  const totalSections = sections.length;

  const handleSectionChange = (newSection) => {
    if (
      isScrolling ||
      newSection === activeSection ||
      newSection < 0 ||
      newSection >= totalSections
    )
      return;

    // Skip SimServices (index 1) on small screens
    const isSmallScreen = window.innerWidth < 1280; // xl breakpoint
    if (isSmallScreen && newSection === 1) {
      // If scrolling down from Hero (0), go to PrepaidSim (2)
      if (activeSection === 0) {
        newSection = 2;
      }
      // If scrolling up from PrepaidSim (2), go to Hero (0)
      else if (activeSection === 2) {
        newSection = 0;
      }
    }

    setIsScrolling(true);
    setActiveSection(newSection);

    // Reset scrolling after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  };

  useEffect(() => {
    const sections = containerRef.current?.children;
    if (sections) {
      sectionsRef.current = Array.from(sections);
    }

    // Scroll hijacking
    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling) return;

      const isSmallScreen = window.innerWidth < 1280; // xl breakpoint
      const delta = e.deltaY;

      if (delta > 0) {
        // Scroll down
        let nextSection = activeSection + 1;
        // Skip SimServices on small screens
        if (isSmallScreen && nextSection === 1) {
          nextSection = 2;
        }
        handleSectionChange(nextSection);
      } else {
        // Scroll up
        let prevSection = activeSection - 1;
        // Skip SimServices on small screens
        if (isSmallScreen && prevSection === 1) {
          prevSection = 0;
        }
        handleSectionChange(prevSection);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;

      const isSmallScreen = window.innerWidth < 1280; // xl breakpoint

      switch (e.key) {
        case "ArrowDown":
        case "PageDown": {
          e.preventDefault();
          let nextSection = activeSection + 1;
          // Skip SimServices on small screens
          if (isSmallScreen && nextSection === 1) {
            nextSection = 2;
          }
          handleSectionChange(nextSection);
          break;
        }
        case "ArrowUp":
        case "PageUp": {
          e.preventDefault();
          let prevSection = activeSection - 1;
          // Skip SimServices on small screens
          if (isSmallScreen && prevSection === 1) {
            prevSection = 0;
          }
          handleSectionChange(prevSection);
          break;
        }
        case "Home":
          e.preventDefault();
          handleSectionChange(0);
          break;
        case "End":
          e.preventDefault();
          handleSectionChange(totalSections - 1);
          break;
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // Touch events for mobile
    let startY = 0;
    let startX = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling) return;

      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const diffY = startY - endY;
      const diffX = startX - endX;

      // Only trigger if vertical swipe is more significant than horizontal
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
        const isSmallScreen = window.innerWidth < 1280; // xl breakpoint

        if (diffY > 0) {
          // Swipe up (scroll down)
          let nextSection = activeSection + 1;
          // Skip SimServices on small screens
          if (isSmallScreen && nextSection === 1) {
            nextSection = 2;
          }
          handleSectionChange(nextSection);
        } else {
          // Swipe down (scroll up)
          let prevSection = activeSection - 1;
          // Skip SimServices on small screens
          if (isSmallScreen && prevSection === 1) {
            prevSection = 0;
          }
          handleSectionChange(prevSection);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Handle scroll to home from navbar
    const handleScrollToHome = () => {
      handleSectionChange(0);
    };

    window.addEventListener("scrollToHome", handleScrollToHome);

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scrollToHome", handleScrollToHome);
    };
  }, [activeSection, isScrolling, totalSections]);

  return (
    <div className="HomePage">
      {/* Video nền */}
      <BannerVid />

      {/* Navigation dots */}
      <NavigationDots
        sections={sections}
        containerRef={containerRef}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Sections */}
      <div className="fullpage-container sections-container" ref={containerRef}>
        {[
          <Suspense key="hero" fallback={<SectionLoader />}>
            <Hero />
          </Suspense>,
          <Suspense key="sim" fallback={<SectionLoader />}>
            <SimServices />
          </Suspense>,
          <Suspense key="prepaid" fallback={<SectionLoader />}>
            <PrepaidSim />
          </Suspense>,
          <Suspense key="wifi" fallback={<SectionLoader />}>
            <WiFiSection />
          </Suspense>,
          <Suspense key="multilingual" fallback={<SectionLoader />}>
            <MultilingualWeb />
          </Suspense>,
          <Suspense key="marketing" fallback={<SectionLoader />}>
            <SystemMarketingSection />
          </Suspense>,
          <Suspense key="messenger" fallback={<SectionLoader />}>
            <Messenger />
          </Suspense>,
          <Suspense key="news" fallback={<SectionLoader />}>
            <News />
          </Suspense>,
          <Suspense key="about" fallback={<SectionLoader />}>
            <AboutUs />
          </Suspense>,
          <Suspense key="company" fallback={<SectionLoader />}>
            <CompanyInfo />
          </Suspense>,
          <Suspense key="footer" fallback={<SectionLoader />}>
            <Footer />
          </Suspense>,
        ].map((Component, index) => {
          let className = "section-wrapper";

          if (index === activeSection) {
            className += " active";
          } else if (index < activeSection) {
            className += " prev";
          } else {
            className += " next";
          }

          return (
            <div key={index} className={className}>
              {Component}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
