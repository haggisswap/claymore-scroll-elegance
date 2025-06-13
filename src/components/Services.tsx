
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
      description: "We figure out where to play and how to win. No buzzwords and 100 slide presentations - just clear direction on markets worth entering, competitors worth fighting, and advantages worth building.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop"
    },
    {
      title: "Financial Modeling",
      description: "Numbers that tell the true story of your strategic options. We translate complex financials into clear decisions that leaders can easily understand, trust and act upon.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Data Analysis & Insights",
      description: "Turning complex data into clear action. We extract meaningful patterns from your business data and transform them into strategic advantages. No elaborate dashboards that nobody uses - just practical insights that drive real decisions and measurable results.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      title: "Digital Product Dev + AI",
      description: "From concept to launch, we create digital products that solve genuine problems, integrating AI capabilities that are transforming how businesses operate.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      title: "Content Production & Management",
      description: "Content creation that delivers results. We specialize in media that audiences want to consume and that makes commercial sense.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "Project Delivery Excellence",
      description: "We get things done on time and on budget. No excuses - just disciplined execution that delivers what was promised.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
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
              className={`relative p-6 md:p-8 bg-charcoal-dark rounded-lg border border-charcoal overflow-hidden ${
                visible 
                  ? "opacity-100 transform-none" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-offwhite">
                  {service.title}
                </h3>
                
                <p className="text-offwhite/70">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
