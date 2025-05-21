
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SocialMediaSection = () => {
  return (
    <AnimatedSection className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-center mb-10 font-light text-foreground/70">Trusted by users across leading platforms</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
          <div className="social-icon text-foreground/60 hover:text-foreground transition-all duration-300 flex flex-col items-center">
            <Facebook size={32} />
            <span className="mt-2 text-sm">Facebook</span>
          </div>
          <div className="social-icon text-foreground/60 hover:text-foreground transition-all duration-300 flex flex-col items-center">
            <Twitter size={32} />
            <span className="mt-2 text-sm">Twitter</span>
          </div>
          <div className="social-icon text-foreground/60 hover:text-foreground transition-all duration-300 flex flex-col items-center">
            <Instagram size={32} />
            <span className="mt-2 text-sm">Instagram</span>
          </div>
          <div className="social-icon text-foreground/60 hover:text-foreground transition-all duration-300 flex flex-col items-center">
            <Linkedin size={32} />
            <span className="mt-2 text-sm">LinkedIn</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SocialMediaSection;
