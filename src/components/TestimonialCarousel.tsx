
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import GlassCard from './GlassCard';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision",
    quote: "Xinetee revolutionized our data storage strategy. The blockchain security and decentralized approach give us peace of mind we never had before.",
    result: "99.9% uptime with zero data breaches"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, StartupX",
    quote: "The API is a dream to work with. We integrated our entire system with Xinetee in just two days, and throughput improved by 40%.",
    result: "Reduced storage costs by 35%"
  },
  {
    name: "Elena Rodriguez",
    role: "Data Security Officer, EnterpriseY",
    quote: "After multiple security audits, Xinetee stands as the most robust storage solution we've evaluated. The 3-layer security model is exceptional.",
    result: "Passed all compliance requirements with no issues"
  },
  {
    name: "Emma Patel",
    role: "Retail Investor",
    quote: "As a beginner in crypto trading, Xinetee made everything simple and approachable. The AI assistant guided my decisions and helped me avoid common pitfalls.",
    result: "First profitable quarter ever"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <GlassCard className="testimonial-card min-h-[250px] flex flex-col">
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 21.3333H14.6667V16H10.6667C10.6667 13.6 12.6667 11.6 15.0667 11.6V6.66667C9.33333 6.66667 4.66667 11.3333 4.66667 17.0667V26.6667H14.6667V21.3333H9.33333ZM24 11.6V6.66667C18.2667 6.66667 13.6 11.3333 13.6 17.0667V26.6667H23.6V16H18.6667V21.3333H18.3333V17.0667C18.3333 14.6667 20.3333 12.6667 22.7333 12.6667H24V11.6Z" fill="currentColor" fillOpacity="0.8"/>
                </svg>
              </div>
              <p className="text-foreground/80 mb-6">{testimonial.quote}</p>
              <div className="mt-auto">
                <div className="mb-2">
                  <span className="text-primary font-medium">Result: </span>
                  <span className="text-foreground/70">{testimonial.result}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? 'bg-primary w-6' : 'bg-white/30'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      
      <div className="mt-6 flex justify-center space-x-4">
        <CarouselPrevious className="relative static" />
        <CarouselNext className="relative static" />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
