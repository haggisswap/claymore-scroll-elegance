
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative snap-section flex items-center justify-center h-screen overflow-hidden bg-charcoal-dark"
    >
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/40 to-charcoal-dark/95"></div>
        <img 
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
          alt="Sports stadium with crowd" 
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
