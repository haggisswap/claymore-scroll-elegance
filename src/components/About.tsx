
import useInView from "@/hooks/useInView";
const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="snap-section flex flex-col md:flex-row md:h-screen bg-charcoal"
    >
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=1200&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-transparent"></div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        <div
          className={`transition-all duration-1000 delay-300 ${
            inView ? "opacity-100 transform-none" : "opacity-0 translate-x-20"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-offwhite">
            About <span className="text-copper">Claymore</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-6 text-offwhite/80">
            Born from frustration with endless slide-ware, Claymore pairs sharp strategy with disciplined execution. Providing commercial advisory and trusted guidance across GCC and beyond, headquartered in Dubai.
          </p>
          
          <div 
            className={`h-1 w-24 bg-copper transition-all duration-1000 delay-500 ${
              inView ? "opacity-100 transform-none" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
