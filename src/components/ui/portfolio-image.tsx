'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface PortfolioImageProps {
  src: string;
  gif?: string | null;
  alt: string;
  className?: string;
}

export function PortfolioImage({ src, gif, alt, className }: PortfolioImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isHovered, setIsHovered] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Preload GIF when component mounts (but don't show it yet)
  useEffect(() => {
    if (gif && !gifLoaded) {
      const preloadImg = new Image();
      preloadImg.onload = () => setGifLoaded(true);
      preloadImg.src = gif;
    }
  }, [gif, gifLoaded]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (gif && gifLoaded) {
      setCurrentSrc(gif);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentSrc(src);
  };

  return (
    <motion.img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onLoad={() => {
        // Ensure we start with the static image
        if (!isHovered) {
          setCurrentSrc(src);
        }
      }}
    />
  );
}
