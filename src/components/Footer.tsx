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
      <div className="max-w-content px-page mx-auto">
        <div className="grid gap-6 py-8 text-sm sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">
              Ready for the next build
            </p>
            <Link
              href="/#contact"
              className="font-display mt-2 block max-w-xl text-2xl font-semibold tracking-tight hover:underline sm:text-3xl"
            >
              Have an idea? Let&apos;s turn it into a great experience.
            </Link>
          </div>
          <Link
            href="/#contact"
            className="bg-accent text-accent-foreground inline-flex min-h-12 items-center justify-center rounded-full px-5 font-semibold"
          >
            Start a project
          </Link>
        </div>
        <div className="border-border flex flex-col gap-5 border-t py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>
          <p className="text-muted">
            © 2026 {site.title}
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
      </div>
    </footer>
  );
}
