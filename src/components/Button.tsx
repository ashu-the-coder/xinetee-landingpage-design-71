
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
        variant === 'secondary' && 'bg-gradient-to-b from-secondary/20 to-secondary/5',
        variant === 'outline' && 'bg-transparent border border-primary/50 hover:bg-primary/5',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
