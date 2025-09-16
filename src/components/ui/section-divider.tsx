'use client';

import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-6"
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-r from-transparent via-primary-400/60 to-transparent h-px w-24"></div>
        </div>
      </div>
    </motion.div>
  );
}
