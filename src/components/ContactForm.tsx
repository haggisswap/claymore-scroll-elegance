
import React, { useState } from "react";
import { Linkedin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="snap-section min-h-screen flex items-center bg-charcoal-dark py-16 px-6 md:px-12"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-offwhite">
          Get in <span className="text-copper">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-offwhite">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-charcoal border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-copper text-offwhite"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-offwhite">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-charcoal border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-copper text-offwhite"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-offwhite">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-charcoal border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-copper text-offwhite"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-copper text-offwhite rounded-md transition-all hover:bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitted && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-md animate-fade-in">
                  Message sent successfully. We'll be in touch soon!
                </div>
              )}
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-copper">Contact Information</h3>
              
              <div className="space-y-4 text-offwhite/80">
                <p className="flex items-center gap-2">
                  <span className="text-copper font-bold">Location:</span> 
                  Claymore Ventures FZCO, Dubai
                </p>
                
                <p className="flex items-center gap-2">
                  <span className="text-copper font-bold">Email:</span> 
                  hello@claymore-ventures.com
                </p>
                
                <p className="flex items-center gap-2">
                  <span className="text-copper font-bold">Phone:</span> 
                  +971 50 123 4567
                </p>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <h3 className="text-xl font-playfair font-bold mb-4 text-copper">Connect With Us</h3>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block p-3 bg-charcoal rounded-full hover:bg-copper/20 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-offwhite" />
              </a>
              
              <div className="mt-6">
                <div className="h-1 w-16 bg-copper"></div>
              </div>
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
