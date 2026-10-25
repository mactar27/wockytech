import Link from "next/link";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.81-.12-.9.26-1.7 1-2.01 1.89-.34.91-.21 1.98.37 2.77.61.88 1.69 1.41 2.76 1.41 1.05-.01 2.06-.5 2.55-1.4.32-.57.44-1.24.44-1.89l.06-13.68c.02-.01.02-.01.03-.02z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const links = [
  { href: "https://www.instagram.com/wockytech/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.tiktok.com/@wockytech0?lang=fr", label: "TikTok", Icon: TikTokIcon },
  { href: "https://web.facebook.com/profile.php?id=61584112343102", label: "Facebook", Icon: FacebookIcon },
] as const;

export function SocialIcons({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2 rounded-xl bg-white/5 hover:bg-[#0066FF] border border-white/10 hover:border-[#0066FF] text-slate-300 hover:text-white transition-all duration-200"
        >
          <Icon className={className} />
        </Link>
      ))}
    </div>
  );
}
