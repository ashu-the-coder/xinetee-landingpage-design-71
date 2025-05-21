
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        'glass-card p-6 transition-all duration-300 relative',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 0 35px rgba(200, 140, 255, 0.7)' : '0 0 20px rgba(200, 140, 255, 0.4)',
        backgroundColor: 'rgba(65, 50, 95, 0.8)'  // Brighter background for cards
      }}
    >
      {/* Enhanced abstract glow behind cards */}
      <div 
        className="absolute -inset-1 -z-10 rounded-xl bg-gradient-radial from-purple-500/30 via-purple-400/20 to-transparent opacity-0 transition-opacity duration-300 blur-xl"
        style={{ opacity: isHovered ? 0.8 : 0.4 }}
      ></div>
      <div 
        className="absolute -inset-2 -z-20 rounded-xl bg-gradient-radial from-pink-500/20 via-pink-400/10 to-transparent opacity-0 transition-opacity duration-300 blur-xl"
        style={{ opacity: isHovered ? 0.7 : 0.3 }}
      ></div>
      
      {children}
    </div>
  );
};

export default GlassCard;
