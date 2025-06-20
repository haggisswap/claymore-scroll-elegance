import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Check initial scroll position in case page loads scrolled
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
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav
      className={cn(
        "w-full left-0 px-6 py-4 md:px-12 transition-all duration-300 z-20",
        scrolled
          ? "fixed top-0 bg-[#1a202c]/90 shadow-md backdrop-blur-sm"
          : "absolute top-0 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}lovable-uploads/a40db039-1d09-4acb-99af-3b07f3f682b5.png`}
            alt="Claymore Ventures Logo"
            role="button"
            aria-label="Home"
            className="h-8 md:h-10 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          />
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <button
            aria-label="About"
            onClick={() => scrollToSection("about")}
            className="text-offwhite hover-underline"
          >
            About
          </button>
          <button
            aria-label="Services"
            onClick={() => scrollToSection("services")}
            className="text-offwhite hover-underline"
          >
            Services
          </button>
          <button
            aria-label="Contact"
            onClick={() => scrollToSection("contact")}
            className="text-offwhite hover-underline"
          >
            Contact
          </button>

          <div className="flex items-center space-x-4 ml-8">
            <span className="text-offwhite text-sm mr-2">Follow Us</span>
            <a
              aria-label="TikTok (opens in new tab)"
              href="https://www.tiktok.com/@claymoreventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite hover:text-copper transition-colors transform transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1-.05z" />
              </svg>
            </a>
            <a
              aria-label="Instagram (opens in new tab)"
              href="https://www.instagram.com/claymoreventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite hover:text-copper transition-colors transform transition-transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              aria-label="LinkedIn (opens in new tab)"
              href="https://www.linkedin.com/company/claymoreventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite hover:text-copper transition-colors transform transition-transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button aria-label="Toggle mobile menu" className="text-offwhite p-2">
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-charcoal-dark/95 border-charcoal backdrop-blur-lg w-[85vw] sm:w-[350px]"
            >
              <div className="flex flex-col space-y-6 mt-8">
                <button
                  onClick={() => scrollToSection("about")}
                  aria-label="About"
                  className="text-offwhite text-xl hover:text-copper transition-colors transition-transform hover:translate-x-2 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  aria-label="Services"
                  className="text-offwhite text-xl hover:text-copper transition-colors transition-transform hover:translate-x-2 text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  aria-label="Contact"
                  className="text-offwhite text-xl hover:text-copper transition-colors transition-transform hover:translate-x-2 text-left"
                >
                  Contact
                </button>
                <div className="pt-6 border-t border-charcoal flex flex-col space-y-4">
                  <span className="text-offwhite text-sm">Follow Us</span>
                  <div className="flex items-center space-x-6">
                    <a
                      aria-label="TikTok (opens in new tab)"
                      href="https://www.tiktok.com/@claymoreventures"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-offwhite hover:text-copper transition-colors transform transition-transform hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1-.05z" />
                      </svg>
                    </a>
                    <a
                      aria-label="Instagram (opens in new tab)"
                      href="https://www.instagram.com/claymoreventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-offwhite hover:text-copper transition-colors transform transition-transform hover:scale-110"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      aria-label="LinkedIn (opens in new tab)"
                      href="https://www.linkedin.com/company/claymoreventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-offwhite hover:text-copper transition-colors transform transition-transform hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
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
