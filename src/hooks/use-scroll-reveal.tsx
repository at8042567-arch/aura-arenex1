import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Apple-style scroll reveal: observes any element with `.scroll-reveal`
 * or `.scroll-reveal-scale` and adds `.in-view` when it enters the viewport.
 */
export const useScrollReveal = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".scroll-reveal, .scroll-reveal-scale");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
};