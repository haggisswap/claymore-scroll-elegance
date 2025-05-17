
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FeaturedWins = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visible, setVisible] = useState(false);
  
  const wins = [
    {
      title: "Film Fund Advisory",
      description: "Advised GCC film fund—unlocked $120 M pipeline.",
    },
    {
      title: "Streaming Rights Deal",
      description: "Delivered streaming-rights deal for a top Saudi league in 90 days.",
    },
    {
      title: "AI Fan Engagement",
      description: "Built AI-powered fan-engagement product; 4× retention.",
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById("wins");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % wins.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [wins.length]);
  
  return (
    <section 
      id="wins" 
      className="snap-section h-screen flex flex-col items-center justify-center bg-gradient-to-b from-charcoal-dark to-charcoal py-16 px-6 md:px-12"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-offwhite transition-all duration-700 ${
            visible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          Featured <span className="text-copper">Wins</span>
        </h2>
        
        <div className="relative h-64 mb-8">
          {wins.map((win, index) => (
            <div
              key={index}
              className={cn(
                "absolute top-0 left-0 w-full h-full transition-all duration-700 bg-charcoal-dark border border-charcoal/50 p-8 md:p-12 rounded-xl",
                index === activeSlide
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-x-full"
              )}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-copper">
                {win.title}
              </h3>
              <p className="text-lg md:text-xl text-offwhite">
                {win.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2">
          {wins.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeSlide ? "bg-copper w-8" : "bg-offwhite/30"
              )}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWins;
