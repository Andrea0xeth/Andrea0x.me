/**
 * Canonical place to grab `useReducedMotion` for this project.
 *
 * Why re-export instead of importing from framer-motion directly?
 *   - Ensures a single source of truth as we may swap motion libs later.
 *   - Co-located with `getMotionProps`, the small helper that strips
 *     animation props from a motion preset when reduced motion is preferred.
 */
import { useReducedMotion as useReducedMotionFM } from 'framer-motion';
import type { MotionPreset } from './motion-presets';

export const useReducedMotion = useReducedMotionFM;

/**
 * Given a motion preset and a reduced-motion flag, returns props safe to
 * spread onto a `motion.*` component. When reduced motion is preferred,
 * all initial / animate / whileInView / whileHover / transition fields are
 * stripped, so the element renders in its final state with no animation.
 *
 * Usage:
 *   const prefersReducedMotion = useReducedMotion();
 *   <motion.div {...getMotionProps(motionPresets.fadeInUp, prefersReducedMotion)}>
 */
export function getMotionProps(
  preset: MotionPreset,
  prefersReducedMotion: boolean | null
): MotionPreset | Record<string, never> {
  if (prefersReducedMotion) {
    return {};
  }
  return preset;
}
