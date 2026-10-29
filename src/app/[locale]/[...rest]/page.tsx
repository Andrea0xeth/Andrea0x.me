import { notFound } from 'next/navigation';

/** Unknown paths under a locale render the localized, styled 404. */
export default function CatchAllPage() {
  notFound();
}
