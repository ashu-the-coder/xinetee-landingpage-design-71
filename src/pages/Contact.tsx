
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your server
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <AnimatedSection className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl mb-6 font-light tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
          </p>
        </div>
      </AnimatedSection>
      
      {/* Contact Section */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </GlassCard>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <GlassCard className="p-6">
                  <h3 className="text-lg font-medium mb-2">Headquarters</h3>
                  <p className="text-foreground/70">
                    1234 Innovation Way<br />
                    Tech District<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </GlassCard>
                
                <GlassCard className="p-6">
                  <h3 className="text-lg font-medium mb-2">Customer Support</h3>
                  <p className="text-foreground/70 mb-2">
                    For assistance with your account or our services
                  </p>
                  <p className="mb-1">
                    <span className="text-primary">Email:</span>{" "}
                    <a href="mailto:support@xinetee.com" className="text-foreground/80 hover:text-foreground">support@xinetee.com</a>
                  </p>
                  <p>
                    <span className="text-primary">Phone:</span>{" "}
                    <a href="tel:+18005551234" className="text-foreground/80 hover:text-foreground">+1 (800) 555-1234</a>
                  </p>
                </GlassCard>
                
                <GlassCard className="p-6">
                  <h3 className="text-lg font-medium mb-2">Business Inquiries</h3>
                  <p className="text-foreground/70 mb-2">
                    For partnerships, press, and business opportunities
                  </p>
                  <p className="mb-1">
                    <span className="text-primary">Email:</span>{" "}
                    <a href="mailto:business@xinetee.com" className="text-foreground/80 hover:text-foreground">business@xinetee.com</a>
                  </p>
                </GlassCard>
                
                <GlassCard className="p-6">
                  <h3 className="text-lg font-medium mb-2">Hours of Operation</h3>
                  <p className="text-foreground/70 mb-1">
                    <span className="text-primary">Customer Support:</span> 24/7
                  </p>
                  <p className="text-foreground/70">
                    <span className="text-primary">Business Office:</span> Monday-Friday, 9am-6pm PST
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Map Section */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="p-0 overflow-hidden h-80">
            {/* In a real app, you would embed a Google Map or similar here */}
            <div className="w-full h-full bg-card/50 flex items-center justify-center">
              <p className="text-foreground/70">Interactive Map Would Be Embedded Here</p>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>
      
      {/* FAQ */}
      <AnimatedSection className="py-16 px-4 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about contacting us."
          />
          
          <div className="space-y-6">
            <GlassCard>
              <h3 className="text-xl font-medium mb-2">What's your typical response time?</h3>
              <p className="text-foreground/70">
                For general inquiries, we typically respond within 24 hours. For technical support issues, 
                our team aims to respond within 4 hours during business hours.
              </p>
            </GlassCard>
            
            <GlassCard>
              <h3 className="text-xl font-medium mb-2">Do you offer phone support?</h3>
              <p className="text-foreground/70">
                Yes, phone support is available for all paid plans. Free users have access to email and chat support.
              </p>
            </GlassCard>
            
            <GlassCard>
              <h3 className="text-xl font-medium mb-2">I have a feature request. Where should I send it?</h3>
              <p className="text-foreground/70">
                We love hearing your ideas! Please submit feature requests through our support portal or by 
                emailing feedback@xinetee.com.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Contact;
