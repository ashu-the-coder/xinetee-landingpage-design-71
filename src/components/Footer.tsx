import { Facebook, Twitter, Instagram, Linkedin, Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-white/5 relative">
      {/* Add enhanced background glow to footer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/97547526-cf03-4ab6-867c-d4d5756b99f0.png" 
                alt="Xinetee Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="font-bold text-xl uppercase">XINETEE</span>
            </div>
            <p className="text-sm mb-6 text-foreground/70">
              Secure, decentralized storage powered by blockchain technology. Your data, truly yours.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/xinetee/posts/?feedView=all" 
                className="social-icon text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/Xinetee_Network" 
                className="social-icon text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/xinetee/posts/?feedView=all" 
                className="social-icon text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/xinetee/posts/?feedView=all" 
                className="social-icon text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">About</a></li>
              <li><a href="/features" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Features</a></li>
              <li><a href="/blog" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Blog</a></li>
              <li><a href="/contact" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Community</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} XINETEE. All rights reserved.</p>
          <div className="flex items-center justify-center mt-4">
            <Cloud size={16} className="mr-2" />
            <p>Decentralized Storage Powered By Blockchain</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
