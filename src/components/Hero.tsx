
import useInView from "@/hooks/useInView";
const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative snap-section flex items-center justify-center md:h-screen overflow-hidden bg-charcoal-dark"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/40 to-charcoal-dark/95"></div>
      </div>

      <div className="container relative z-10 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
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
