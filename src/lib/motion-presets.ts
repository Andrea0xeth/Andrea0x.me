/**
 * Shared Framer Motion presets.
 *
 * Design intent: motion is supportive, not decorative. Amplitudes are small
 * (y: 12 — never y: 50), durations modest, and `viewport: { once: true }`
 * keeps reveals from re-firing on scroll.
 *
 * Use with the canonical reduced-motion helper:
 *
 *   import { motionPresets } from '@/lib/motion-presets';
 *   import { useReducedMotion, getMotionProps } from '@/lib/use-reduced-motion';
 *
 *   const prefersReduced = useReducedMotion();
 *   <motion.div {...getMotionProps(motionPresets.fadeInUp, prefersReduced)}>
 */
import type { MotionProps } from 'framer-motion';

export type MotionPreset = MotionProps;

export const motionPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  },
  fadeInUpSlow: {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  },
  cardHover: {
    whileHover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  },
} as const satisfies Record<string, MotionPreset>;

export type MotionPresetName = keyof typeof motionPresets;
