import { useEffect } from "react";

/**
 * Custom hook to trigger clean, staggered scroll-reveal animations
 * using IntersectionObserver. Elements with className 'reveal-on-scroll'
 * will have 'is-revealed' added when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Optional: unobserve once revealed to keep animations performant
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
