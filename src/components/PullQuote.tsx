
import { useEffect, useState } from "react";

const PullQuote = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById("pullquote");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="pullquote" 
      className="snap-section min-h-screen flex items-center bg-charcoal-dark py-16 px-6 md:px-12"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div 
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-offwhite font-playfair italic relative">
            <span className="text-copper text-6xl md:text-7xl absolute -top-4 -left-4 md:-left-8 opacity-50">"</span>
            Strategy without delivery is just expensive advice
            <span className="text-copper text-6xl md:text-7xl absolute -bottom-8 -right-4 md:-right-8 opacity-50">"</span>
          </blockquote>
          
          <div 
            className={`h-1 w-24 bg-copper mx-auto mt-12 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 transform-none" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PullQuote;
