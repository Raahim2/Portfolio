import { useEffect, useRef, useState, ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  direction?: 'left' | 'right'; // Optional direction prop (default: left)
}

const Slide: React.FC<SlideProps> = ({ children, direction = 'right' }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible
          ? "opacity-100 translate-x-0"
          : direction === 'left'
          ? "opacity-0 translate-x-10"
          : "opacity-0 -translate-x-10"
      }`}
    >
      {children}
    </div>
  );
};

export default Slide;
