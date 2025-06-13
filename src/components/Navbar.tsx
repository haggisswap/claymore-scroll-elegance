
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
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
        scrolled 
          ? "bg-charcoal-dark/95 shadow-lg backdrop-blur-sm" 
          : "bg-transparent"
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
          
          <div className="flex items-center space-x-4 ml-8">
            <a 
              href="https://www.tiktok.com/@claymoreventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite hover:text-copper transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1-.05z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/claymoreventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite hover:text-copper transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/claymoreventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite hover:text-copper transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-offwhite p-2"
            onClick={() => {
              // Simple mobile menu toggle - for now just scroll to contact
              scrollToSection("contact");
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
