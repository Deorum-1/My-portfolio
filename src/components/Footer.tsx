import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="max-w-content px-page mx-auto flex flex-col gap-5 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <p className="text-muted">
          {site.title}
        </p>
        <ul className="flex gap-4">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                className="text-muted hover:text-foreground transition-colors"
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
