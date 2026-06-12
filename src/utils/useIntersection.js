import { useState, useEffect } from "react";

export const useIntersection = (elementRef, threshold = 0.05) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    const currentEl = elementRef.current;
    observer.observe(currentEl);

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [elementRef, threshold]);

  return isIntersecting;
};
