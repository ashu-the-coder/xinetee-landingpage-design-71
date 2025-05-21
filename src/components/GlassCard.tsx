
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
        boxShadow: isHovered ? '0 0 30px rgba(190, 130, 255, 0.6)' : '0 0 15px rgba(190, 130, 255, 0.3)',
        backgroundColor: 'rgba(55, 40, 85, 0.7)'  // Brighter background for cards
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
