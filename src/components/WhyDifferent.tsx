
import { useEffect, useState } from "react";

const WhyDifferent = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById("why-different");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const points = [
    "Battle-tested operators, not ivory-tower theorists.",
    "Middle-East roots + global experience.", 
    "We deliver both - smart thinking that charts the path forward and the practical delivery expertise to make it happen now."
  ];

  return (
    <section 
      id="why-different" 
      className="snap-section h-screen flex items-center bg-charcoal-dark py-16 px-6 md:px-12"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-offwhite">
            Why <span className="text-copper">Claymore?</span>
          </h2>
          
          <blockquote 
            className={`text-2xl md:text-3xl lg:text-4xl font-playfair italic text-copper mb-16 transition-all duration-1000 ${
              visible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            "Strategy without execution is just expensive advice."
          </blockquote>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index}
              className={`bg-charcoal p-8 rounded-md shadow-lg border-l-4 border-copper transition-all duration-1000 ${
                visible 
                  ? "opacity-100 transform-none" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <p className="text-lg md:text-xl text-offwhite/90">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
