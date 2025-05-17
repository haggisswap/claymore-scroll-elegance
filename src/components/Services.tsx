
import { useEffect, useState } from "react";

const Services = () => {
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
    
    const section = document.getElementById("services");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      title: "Commercial Strategy",
      icon: "💼",
      description: "Aligning business models with market opportunities."
    },
    {
      title: "Financial Modeling",
      icon: "📊",
      description: "Data-driven forecasts and scenario planning."
    },
    {
      title: "Data Analysis & Insights",
      icon: "📈",
      description: "Turning complex data into actionable intelligence."
    },
    {
      title: "Digital Product Dev + AI",
      icon: "🤖",
      description: "Building next-gen digital solutions with AI integrations."
    },
    {
      title: "Content Production & Management",
      icon: "🎬",
      description: "Creating and distributing high-value content assets."
    },
    {
      title: "Project Delivery Excellence",
      icon: "✅",
      description: "Managing complex initiatives to successful completion."
    },
  ];

  return (
    <section 
      id="services" 
      className="snap-section h-screen flex items-center bg-charcoal py-16 px-6 md:px-12"
    >
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-offwhite">
          What We <span className="text-copper">Do</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-6 md:p-8 bg-charcoal-dark rounded-lg border border-charcoal hover:border-copper transition-all duration-500 cursor-pointer ${
                visible 
                  ? "opacity-100 transform-none" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="mb-4 text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-offwhite group-hover:text-copper transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-offwhite/70 group-hover:text-offwhite/90 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
