'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface RotatingAvatarProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
}

export function RotatingAvatar({ 
  images, 
  alt, 
  className = "w-64 h-64 rounded-full mx-auto mb-6 object-cover border-4 border-white/20 shadow-2xl",
  interval = 4000 
}: RotatingAvatarProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pausa la rotazione automatica quando si passa sopra
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={alt}
          className={className}
          initial={{ 
            opacity: 0, 
            rotateY: 90,
            scale: 0.8
          }}
          animate={{ 
            opacity: 1, 
            rotateY: 0,
            scale: 1,
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
          }}
          exit={{ 
            opacity: 0, 
            rotateY: -90,
            scale: 0.8
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)",
            transition: { duration: 0.3 }
          }}
        />
      </AnimatePresence>
      
    </div>
  );
}
