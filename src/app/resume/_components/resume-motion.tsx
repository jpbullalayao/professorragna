"use client";

import { useLayoutEffect, useRef } from "react";

interface ResumeMotionProps {
  children: React.ReactNode;
}

export function ResumeMotion({ children }: ResumeMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.classList.add("motionEnabled");

    const revealItems = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (revealItems.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
