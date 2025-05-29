
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 bg-charcoal-dark/90 shadow-md backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img 
            src="/lovable-uploads/a40db039-1d09-4acb-99af-3b07f3f682b5.png"
            alt="Claymore Ventures Logo"
            className="h-8 md:h-10 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          />
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-offwhite hover-underline"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("why-different")}
            className="text-offwhite hover-underline"
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-offwhite hover-underline"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-offwhite hover-underline"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
