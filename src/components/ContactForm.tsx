
import React from "react";
import { Linkedin, Instagram } from "lucide-react";

const ContactForm = () => {
  return (
    <section 
      id="contact" 
      className="snap-section min-h-screen flex items-center bg-charcoal-dark py-16 px-6 md:px-12"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-offwhite">
          Get in <span className="text-copper">Touch</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-playfair font-bold mb-6 text-copper">Contact Information</h3>
            
            <div className="space-y-4 text-offwhite/80">
              <p className="flex items-center justify-center gap-2">
                <span className="text-copper font-bold">Email:</span> 
                <a href="mailto:hello@claymoreventures.com" className="hover:text-copper transition-colors">
                  hello@claymoreventures.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6 text-copper">Follow Us</h3>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.tiktok.com/@claymoreventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block p-3 bg-charcoal rounded-full hover:bg-copper/20 transition-colors"
              >
                <svg className="h-6 w-6 text-offwhite" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/claymoreventures/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block p-3 bg-charcoal rounded-full hover:bg-copper/20 transition-colors"
              >
                <Instagram className="h-6 w-6 text-offwhite" />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/claymoreventures/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block p-3 bg-charcoal rounded-full hover:bg-copper/20 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-offwhite" />
              </a>
            </div>
            
            <div className="mt-8">
              <div className="h-1 w-16 bg-copper mx-auto"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-offwhite/50 text-sm">
          © {new Date().getFullYear()} Claymore Ventures. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
