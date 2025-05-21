
import { cn } from '@/lib/utils';
import { useState } from 'react';

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
        boxShadow: isHovered ? '0 0 20px rgba(130, 91, 220, 0.4)' : ''
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
