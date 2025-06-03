
import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SocialMediaSection from '@/components/SocialMediaSection';
import Globe3D from '@/components/Globe3D';
import { Check, Cloud, Database, Server } from 'lucide-react';

const Index = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      sections.forEach((section) => observer.observe(section));
      
      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    };
    
    animateOnScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection 
        id="hero"
        className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30"></div>
        <div className="absolute top-20 left-[20%] w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[20%] w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        
        {/* 3D Globe */}
        <Globe3D />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold tracking-tight text-white">
            Secure. Decentralized. <span className="text-purple-400">Storage</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
            Experience next-generation file storage with unbreakable security, powered by blockchain technology.
            Your data, truly yours—forever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button size="lg" className="bg-gradient-to-b from-primary/70 to-primary/50">Get Started</Button>
            <Button variant="outline" size="lg" className="bg-transparent border border-primary/70 hover:bg-primary/15">Learn More</Button>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-20 rounded-xl overflow-hidden shadow-2xl border border-white/10 relative z-10">
          <img 
            src="/lovable-uploads/e5e1c5b8-e79b-4f30-96b3-8c17ab6a7fc3.png" 
            alt="Xinetee Dashboard" 
            className="w-full object-cover" 
          />
        </div>
      </AnimatedSection>
      
      {/* Social Media Section */}
      <SocialMediaSection />
      
      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="What Our Users Say"
            subtitle="Find out how Xinetee is transforming data storage for professionals around the world."
          />
          
          <TestimonialCarousel />
        </div>
      </AnimatedSection>
      
      {/* Security Model Section */}
      <AnimatedSection id="security" className="py-20 px-4 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="3-Layer Security Model"
            subtitle="Our revolutionary approach to security combines multiple technologies to ensure your data remains private, secure, and accessible only to you."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="flex flex-col items-center text-center">
              <div className="card-icon">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4">Virtual Machine</h3>
              <p className="text-foreground/70">
                Isolates your data in secure containers with zero-knowledge execution environments, preventing unauthorized access.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col items-center text-center">
              <div className="card-icon">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4">IPFS Storage</h3>
              <p className="text-foreground/70">
                Distributes encrypted data chunks across a global network, eliminating single points of failure and ensuring 99.9% uptime.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col items-center text-center">
              <div className="card-icon">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4">Blockchain Verification</h3>
              <p className="text-foreground/70">
                Records access controls and file integrity proofs on an immutable ledger, creating a tamper-proof chain of custody.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Features Section */}
      <AnimatedSection id="features" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-secondary/10 to-transparent opacity-30"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading 
            title="Key Features"
            subtitle="Experience the future of storage with these innovative features designed for maximum security and ease of use."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-7h2a3 3 0 006 0h2a5 5 0 01-10 0z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">End-to-End Encryption</h3>
              <p className="text-foreground/70">
                Military-grade encryption ensures your files remain private from the moment they leave your device until they're accessed again.
              </p>
            </GlassCard>
            
            <GlassCard>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42-1.747-.974.227-.42C14.336 19.005 15 16.73 15 14v-1h2zm-6-3h2v4h-2v-4zm-8 8h2v3H3v-3zm4 0h2v6H7v-6zm4 0h2v4h-2v-4z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Scalable Storage</h3>
              <p className="text-foreground/70">
                From gigabytes to petabytes, our infrastructure scales effortlessly to meet your growing storage needs without performance penalties.
              </p>
            </GlassCard>
            
            <GlassCard>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.05 13.406l3.534 3.536-1.413 1.414L3 12.186 9.172 6.02l1.414 1.414L7.05 10.972H21v2.434H7.05z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Versioning & Recovery</h3>
              <p className="text-foreground/70">
                Access previous versions of any file with our comprehensive versioning system. Never worry about accidental deletions or changes.
              </p>
            </GlassCard>
            
            <GlassCard>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Global CDN Access</h3>
              <p className="text-foreground/70">
                Lightning-fast access to your files from anywhere in the world through our distributed content delivery network.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Mission Statement */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-background/95 to-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            title="Our Mission"
            subtitle=""
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden aspect-video shadow-lg border border-white/10">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Our Mission" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                At Xinetee, we believe the future of storage is decentralized, secure, and truly owned by users. 
                We're on a mission to free the world from centralized storage providers who control your data. 
                Through blockchain technology, we're returning ownership to the individual while building 
                infrastructure that's faster, more reliable, and impossible to censor.
              </p>
              <Button>Learn Our Story</Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Pricing Section */}
      <AnimatedSection id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that fits your needs. All plans include our core security features."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="bg-card/30 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-medium">Free</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-light">$0</span>
                  <span className="text-foreground/60 ml-2">/month</span>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">Perfect for personal use and exploring our platform.</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">5 GB Storage</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Basic encryption</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Email support</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Web access</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Button className="w-full">Get Started</Button>
              </div>
            </GlassCard>
            
            <GlassCard className="bg-card/50 flex flex-col h-full relative overflow-hidden border border-primary/30">
              <div className="absolute top-5 right-5 bg-primary text-xs text-white py-1 px-3 rounded-full">
                Recommended
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-medium">Pro</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-light">$12</span>
                  <span className="text-foreground/60 ml-2">/month</span>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">Enhanced storage with premium features for professionals.</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">500 GB Storage</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Advanced encryption</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">File versioning</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">API access</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Mobile access</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Button variant="secondary" className="w-full animate-glow">
                  Subscribe Now
                </Button>
              </div>
            </GlassCard>
            
            <GlassCard className="bg-card/30 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-medium">Enterprise</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-light">Custom</span>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">Tailored solutions for organizations with advanced needs.</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Unlimited storage</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Military-grade encryption</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-foreground/80">SLA guarantees</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Button className="w-full">Contact Sales</Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
      
      {/* FAQ Section */}
      <AnimatedSection id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Xinetee and our services."
          />
          
          <div className="space-y-6">
            {[
              {
                question: "How does blockchain improve my data security?",
                answer: "Blockchain technology creates an immutable record of all file transactions and access events. This means every interaction with your data is cryptographically verified and cannot be altered, providing an unprecedented level of security and auditability that traditional storage systems cannot match."
              },
              {
                question: "Can I access my files if I'm offline?",
                answer: "Yes. Our desktop and mobile applications include offline modes that allow you to access previously synced files without an internet connection. Changes made while offline will sync automatically when you reconnect."
              },
              {
                question: "What happens if I lose my encryption keys?",
                answer: "We employ a secure key recovery system that allows you to restore access through a combination of personal recovery phrases and multi-factor authentication. We never store your full encryption keys, maintaining your privacy while providing recovery options."
              },
              {
                question: "Is Xinetee compliant with regulations like GDPR and HIPAA?",
                answer: "Yes, Xinetee is designed with compliance in mind. Our architecture supports GDPR, HIPAA, SOC 2, and other major regulatory frameworks. Enterprise plans include additional compliance features and documentation to meet specific industry requirements."
              }
            ].map((faq, i) => (
              <GlassCard key={i} className="transition-all duration-300 hover:bg-card/60">
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Final CTA */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6 font-light tracking-tight">
            Ready to Take Control of Your Data?
          </h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Join thousands of users who've already discovered the future of secure storage with Xinetee.
          </p>
          <Button size="lg">Get Started Now</Button>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
