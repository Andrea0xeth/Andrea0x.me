'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-2 py-2 md:px-3 md:py-2 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center space-x-1 md:space-x-2"
      style={{
        backgroundColor: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="text-[var(--text-primary)]"
      >
        {theme === 'light' ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
      <span className="text-xs md:text-sm text-[var(--text-primary)] font-medium hidden sm:block">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  );
}
