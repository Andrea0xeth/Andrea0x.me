import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRightIcon, DownloadIcon } from '@/components/site/icons';

interface PillLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'glass';
  size?: 'md' | 'lg';
  icon?: 'arrow' | 'download' | null;
  /** Plain <a> for external URLs, mailto:, API routes and the static home. */
  native?: boolean;
  external?: boolean;
  download?: boolean;
  className?: string;
}

export function PillLink({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  icon = variant === 'primary' ? 'arrow' : null,
  native,
  external,
  download,
  className,
}: PillLinkProps) {
  const classes = [
    'btn',
    size === 'lg' ? 'btn-lg' : '',
    variant === 'primary' ? 'btn-ring' : 'btn-glass',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <span>
      {children}
      {icon === 'arrow' ? <ArrowRightIcon className="arrow" /> : null}
      {icon === 'download' ? <DownloadIcon /> : null}
    </span>
  );

  const glass = variant === 'glass' ? { 'data-glass': true } : {};

  if (native || external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...glass}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(download ? { download: true } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...glass}>
      {content}
    </Link>
  );
}

export function ReadLink({
  href,
  children,
  native,
  external,
}: {
  href: string;
  children: ReactNode;
  native?: boolean;
  external?: boolean;
}) {
  const content = (
    <>
      {children}
      <ArrowRightIcon />
    </>
  );
  if (native || external) {
    return (
      <a
        className="read"
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link className="read" href={href}>
      {content}
    </Link>
  );
}
