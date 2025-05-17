
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative snap-section flex items-center justify-center h-screen overflow-hidden bg-charcoal-dark"
    >
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/40 to-charcoal-dark/95"></div>
        <img 
          src="https://source.unsplash.com/JRPiOFEMbUo" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
          loading="eager" 
        />
      </div>

      <div className="container relative z-10 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div 
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-shadow">
            <span className="text-offwhite">From </span>
            <span className="text-copper">Strategy </span>
            <span className="text-offwhite">to </span>
            <span className="text-copper">Delivery</span>
            <span className="text-copper">.</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 max-w-3xl mx-auto text-offwhite/90 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            Commercial advisors who turn big ideas into measurable wins.
          </p>
          
          <button 
            onClick={scrollToContact}
            className={`px-8 py-3 bg-copper text-offwhite text-lg md:text-xl rounded-md transition-all hover:bg-opacity-90 hover:scale-105 duration-1000 delay-600 ${
              loaded ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
            }`}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
