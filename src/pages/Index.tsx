
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleScroll = (e: Event) => {
      // Any custom scroll handling can go here if needed
    };
    
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="snap-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactForm />
    </div>
  );
};

export default Index;
