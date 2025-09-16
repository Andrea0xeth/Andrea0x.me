'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  border?: boolean;
  gradient?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  hover = true, 
  blur = 'md',
  opacity = 0.1,
  border = true,
  gradient = false
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      } : undefined}
      className={cn(
        'relative overflow-hidden rounded-2xl p-6',
        'transition-all duration-300',
        blurClasses[blur],
        'shadow-2xl',
        className
      )}
      style={{
        backgroundColor: `var(--glass-bg)`,
        border: border ? `1px solid var(--glass-border)` : 'none',
        ...(gradient && {
          background: 'linear-gradient(135deg, var(--glass-bg), rgba(255, 255, 255, 0.02))'
        })
      }}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-600/20" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}


