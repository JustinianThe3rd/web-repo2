"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const selectors = ".reveal, .hero-fade-up, .hero-line";

    // Small delay to let React finish rendering the new page
    const timer = setTimeout(() => {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (let i = 0; i < entries.length; i++) {
              if (entries[i].isIntersecting) {
                entries[i].target.classList.add("is-visible");
                observer.unobserve(entries[i].target);
              }
            }
          },
          { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        const els = document.querySelectorAll(selectors);
        for (let i = 0; i < els.length; i++) {
          observer.observe(els[i]);
        }
      } else {
        // Fallback: reveal everything immediately
        const els = document.querySelectorAll(selectors);
        for (let i = 0; i < els.length; i++) {
          els[i].classList.add("is-visible");
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Also run once on mount (for initial page load / full refresh)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const selectors = ".reveal, .hero-fade-up, .hero-line";

    function init() {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (let i = 0; i < entries.length; i++) {
              if (entries[i].isIntersecting) {
                entries[i].target.classList.add("is-visible");
                observer.unobserve(entries[i].target);
              }
            }
          },
          { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        const els = document.querySelectorAll(selectors);
        for (let i = 0; i < els.length; i++) {
          observer.observe(els[i]);
        }
      } else {
        const els = document.querySelectorAll(selectors);
        for (let i = 0; i < els.length; i++) {
          els[i].classList.add("is-visible");
        }
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
      init();
    }
  }, []);

  return null;
}
