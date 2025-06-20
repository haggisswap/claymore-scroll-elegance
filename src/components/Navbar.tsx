
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    const target = container || window;

    const handleScroll = () => {
      const scrollTop = container ? container.scrollTop : window.scrollY;
      setScrolled(scrollTop > 10);
    };

    // Check initial scroll position in case page loads scrolled
    handleScroll();

    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      target.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
        scrolled
          ? "bg-charcoal-dark shadow-lg backdrop-blur-sm"
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
        
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-offwhite p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-charcoal-dark border-charcoal">
              <div className="flex flex-col space-y-6 mt-8">
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-offwhite text-lg hover:text-copper transition-colors text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-offwhite text-lg hover:text-copper transition-colors text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-offwhite text-lg hover:text-copper transition-colors text-left"
                >
                  Contact
                </button>
                
                <div className="flex items-center space-x-6 pt-6 border-t border-charcoal">
                  <a 
                    href="https://www.tiktok.com/@claymoreventures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-offwhite hover:text-copper transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1-.05z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/claymoreventures/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-offwhite hover:text-copper transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/claymoreventures/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-offwhite hover:text-copper transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
