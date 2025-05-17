
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";

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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
        scrolled ? "bg-charcoal-dark/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <span className="font-playfair text-xl md:text-2xl font-bold text-offwhite cursor-pointer" onClick={() => scrollToSection("hero")}>
            CLAYMORE
          </span>
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
            onClick={() => scrollToSection("wins")}
            className="text-offwhite hover-underline"
          >
            Wins
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 bg-copper text-offwhite rounded transition hover:bg-opacity-90"
          >
            Let's Talk
          </button>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-3 py-1.5 bg-copper text-offwhite rounded text-sm"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
