import React, { useState, useEffect, useRef, useCallback } from "react";

const NavigationDots = ({
  sections,
  containerRef,
  activeSection,
  onSectionChange,
}) => {
  const navDotsRef = useRef(null);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const isScrolling = useRef(false);
  const isAnimatingSwap = useRef(false);
  const prevSectionRef = useRef(0);

  // Tính hàm lấy top trung tâm của dot theo index
  const getDotCenterTop = useCallback(() => {
    const list = navDotsRef.current;
    if (!list) return () => 0;
    const listRect = list.getBoundingClientRect();
    return (idx) => {
      const dots = list.querySelectorAll("li");
      const target = dots[idx];
      if (!target) return 0;
      const rect = target.getBoundingClientRect();
      return rect.top - listRect.top + rect.height / 2 - 4;
    };
  }, []);

  // Hiệu ứng hoán đổi 2 dot chạy ngược chiều khi cuộn liền kề
  const triggerSwapAnimation = useCallback(
    (fromIndex, toIndex) => {
      if (Math.abs(fromIndex - toIndex) !== 1) return; // chỉ áp dụng khi liền kề
      const list = navDotsRef.current;
      if (!list || isAnimatingSwap.current) return;

      const getCenter = getDotCenterTop();
      const fromTop = getCenter(fromIndex);
      const toTop = getCenter(toIndex);

      if (fromTop === toTop) return; // No need to animate if positions are the same

      isAnimatingSwap.current = true;

      const ghost = document.createElement("div");
      ghost.className = "nav-active-ghost";
      ghost.style.top = `${fromTop}px`;
      ghost.style.transition = "top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      list.appendChild(ghost);

      // Use single requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        // Move ghost to the from position (creating the swap effect)
        ghost.style.top = `${toTop}px`;

        const cleanup = () => {
          ghost.removeEventListener("transitionend", cleanup);
          if (ghost.parentNode) {
            ghost.remove();
          }
          isAnimatingSwap.current = false;
        };

        ghost.addEventListener("transitionend", cleanup);

        // Fallback cleanup in case transitionend doesn't fire
        setTimeout(cleanup, 900);
      });
    },
    [getDotCenterTop],
  );

  // Hàm scroll tới section (memoized)
  const scrollToSection = useCallback(
    (index) => {
      const prev = prevSectionRef.current;
      triggerSwapAnimation(prev, index);
      onSectionChange(index);
      prevSectionRef.current = index;
    },
    [triggerSwapAnimation, onSectionChange],
  );

  // Initialize indicator position on mount
  useEffect(() => {
    const list = navDotsRef.current;
    if (!list) return;

    const dots = list.querySelectorAll("li");
    const target = dots[0]; // Start with first dot
    if (!target) return;

    const listRect = list.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const top = targetRect.top - listRect.top + targetRect.height / 2 - 4;

    setIndicatorTop(top);
    const indicatorEl = list.querySelector(".nav-active-indicator");
    if (indicatorEl) {
      indicatorEl.style.top = `${top}px`;
    }
  }, []);

  // Event listeners are handled by HomePage now

  // Cập nhật vị trí indicator trượt theo dot đang active
  useEffect(() => {
    const updateIndicator = () => {
      const list = navDotsRef.current;
      if (!list) return;
      const dots = list.querySelectorAll("li");
      const target = dots[activeSection];
      if (!target) return;
      const listRect = list.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const top = targetRect.top - listRect.top + targetRect.height / 2 - 4; // 4 = half of indicator(8px)

      // Always update indicator immediately for fast scrolling
      setIndicatorTop(top);

      // Also update the indicator element directly for immediate visual feedback
      const indicatorEl = list.querySelector(".nav-active-indicator");
      if (indicatorEl) {
        indicatorEl.style.top = `${top}px`;
      }
    };

    // Trigger swap animation when activeSection changes
    const prevSection = prevSectionRef.current;
    if (
      prevSection !== activeSection &&
      Math.abs(prevSection - activeSection) === 1
    ) {
      // Only animate for adjacent sections to avoid confusion
      triggerSwapAnimation(prevSection, activeSection);
    }
    prevSectionRef.current = activeSection;

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection, triggerSwapAnimation]);

  // Scroll animation effect with improved performance
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId;

    const animateElements = () => {
      // Cancel previous animation frame if still pending
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        // Reset all sections first
        Array.from(container.children).forEach((section, index) => {
          const animatedElements =
            section.querySelectorAll(".animate-on-scroll");

          if (index === activeSection) {
            // Animate current section with staggered delay
            animatedElements.forEach((element, elemIndex) => {
              // Avoid re-animating already visible elements
              if (
                element.style.opacity === "1" &&
                element.style.transform === "translateY(0px)"
              ) {
                return;
              }

              setTimeout(() => {
                element.style.transition =
                  "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                element.style.transform = "translateY(0)";
                element.style.opacity = "1";
              }, elemIndex * 100);
            });
          } else if (index < activeSection) {
            // Keep previous sections visible (no transition to avoid flicker)
            animatedElements.forEach((element) => {
              if (element.style.opacity !== "1") {
                element.style.transition = "none";
                element.style.transform = "translateY(0)";
                element.style.opacity = "1";
              }
            });
          } else {
            // Hide future sections (only if not already hidden)
            animatedElements.forEach((element) => {
              if (element.style.opacity !== "0") {
                element.style.transition = "none";
                element.style.transform = "translateY(30px)";
                element.style.opacity = "0";
              }
            });
          }
        });
      });
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(animateElements, 100);

    return () => {
      clearTimeout(timeoutId);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [activeSection, containerRef]);

  // Check if current section should have white styling (ホーム, メッセージ or アクセス)
  const shouldUseWhiteStyle = (index) => {
    const sectionName = sections[index];
    return (
      sectionName === "ホーム" ||
      sectionName === "メッセージ" ||
      sectionName === "アクセス"
    );
  };

  const isCurrentSectionWhite = shouldUseWhiteStyle(activeSection);

  return (
    <ul
      className={`nav-dots ${isCurrentSectionWhite ? "nav-dots-white" : ""}`}
      ref={navDotsRef}
    >
      <div className="nav-line"></div>
      <div
        className={`nav-active-indicator ${isCurrentSectionWhite ? "nav-active-indicator-white" : ""}`}
        style={{ top: `${indicatorTop}px` }}
      ></div>
      {sections.map((s, idx) => (
        <li
          key={idx}
          className={`${activeSection === idx ? "active" : ""} ${isCurrentSectionWhite && activeSection === idx ? "active-white" : ""}`}
          onClick={() => scrollToSection(idx)}
        >
          <span
            className={
              isCurrentSectionWhite && activeSection === idx ? "text-white" : ""
            }
          >
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NavigationDots;
