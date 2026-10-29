import { portfolioData } from '@/data/portfolio';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
  XLogoIcon,
} from '@/components/site/icons';

const { social } = portfolioData;

export const SOCIAL_LINKS = [
  { href: social.twitter, label: 'X / Twitter', handle: '@andrea0x_eth', Icon: XLogoIcon },
  { href: social.github, label: 'GitHub', handle: 'Andrea0xeth', Icon: GitHubIcon },
  { href: social.linkedin, label: 'LinkedIn', handle: 'andrea-ritondale', Icon: LinkedInIcon },
  { href: social.telegram, label: 'Telegram', handle: '@Andrea0x_eth', Icon: TelegramIcon },
  { href: `mailto:${social.email}`, label: 'Email', handle: social.email, Icon: MailIcon },
] as const;

export function SocialIcons({ label, className }: { label: string; className?: string }) {
  return (
    <ul className={className ? `socials ${className}` : 'socials'} aria-label={label}>
      {SOCIAL_LINKS.map(({ href, label: name, Icon }) => {
        const external = href.startsWith('http');
        return (
          <li key={name}>
            <a
              href={href}
              aria-label={name}
              data-glass
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
