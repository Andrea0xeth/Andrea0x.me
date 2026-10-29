import type { ReactNode } from 'react';

interface PageHeroProps {
  kicker: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  /** Rendered above the kicker (e.g. a back link). */
  before?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  titleId?: string;
}

export function PageHero({ kicker, title, lead, before, children, aside, titleId = 'page-title' }: PageHeroProps) {
  const copy = (
    <div>
      {before}
      <p className="kicker">{kicker}</p>
      <h1 id={titleId} className="page-title">
        {title}
      </h1>
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </div>
  );

  return (
    <section className="page-hero wrap" aria-labelledby={titleId}>
      {aside ? (
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          {copy}
          {aside}
        </div>
      ) : (
        copy
      )}
    </section>
  );
}
