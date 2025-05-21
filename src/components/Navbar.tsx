
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated list of navigation links
  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
          isScrolled ? 'bg-background/60 backdrop-blur-lg shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/97547526-cf03-4ab6-867c-d4d5756b99f0.png" 
              alt="Xinetee Logo" 
              className="h-10 w-10 mr-2"
            />
            <span className="font-medium text-xl">Xinetee</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-light text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <a href="#get-started" className="neo-button">
              Get Started
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-background/90 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} className="text-foreground" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center space-y-8 h-[80vh]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-light text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#get-started" 
            className="neo-button mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
