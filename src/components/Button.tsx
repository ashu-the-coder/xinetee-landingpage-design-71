
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'neo-button',
        size === 'sm' && 'text-sm py-2 px-4',
        size === 'md' && 'text-base py-3 px-6',
        size === 'lg' && 'text-lg py-4 px-8',
        variant === 'primary' && 'bg-gradient-to-b from-primary/60 to-primary/40', // Reduced transparency
        variant === 'secondary' && 'bg-gradient-to-b from-secondary/50 to-secondary/30', // Brighter
        variant === 'outline' && 'bg-transparent border border-primary/60 hover:bg-primary/10', // Brighter border
        className
      )}
      style={{
        boxShadow: '0 6px 15px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)'
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
