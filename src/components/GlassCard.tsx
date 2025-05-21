
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
        'glass-card p-6 transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 0 25px rgba(170, 110, 240, 0.5)' : '0 0 10px rgba(170, 110, 240, 0.2)',
        backgroundColor: 'rgba(45, 35, 65, 0.6)'  // Brighter background for cards
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
