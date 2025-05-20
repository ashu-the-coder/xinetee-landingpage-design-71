
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-12', 
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-light tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
