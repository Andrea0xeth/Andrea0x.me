'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

interface TypewriterHeroProps {
  strings: string[];
  className?: string;
}

export const TypewriterHero = React.memo(function TypewriterHero({ strings, className = '' }: TypewriterHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`${className} min-h-[4rem] md:min-h-[5rem] lg:min-h-[5.5rem] flex items-center`}
    >
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          deleteSpeed: 10,
          delay: 80,
          cursor: '|',
          cursorClassName: 'text-[var(--accent-primary)] animate-pulse text-2xl md:text-3xl lg:text-4xl',
          wrapperClassName: 'text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight',
          stringSplitter: (str) => str.split(''),
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(80)
            .start();
        }}
      />
    </motion.div>
  );
});
