
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card p-6 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
