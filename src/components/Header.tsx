import Link from "next/link";
import Button from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="border-border/70 bg-background/90 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="max-w-content px-page mx-auto flex min-h-20 items-center justify-between gap-3">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-lg"
          aria-label="Oluwaferanmi Sokunbi, home"
        >
          <span className="bg-foreground font-display text-background grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold">
            OS
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Oluwaferanmi Sokunbi
          </span>
          <span className="text-sm font-semibold tracking-tight sm:hidden">
            Oluwaferanmi
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Button
            href="/#contact"
            className="hidden px-4 text-xs sm:inline-flex"
          >
            Start a project
          </Button>
          <details className="group relative lg:hidden">
            <summary className="border-border bg-surface focus-visible:outline-focus flex min-h-12 cursor-pointer list-none items-center rounded-full border px-4 text-sm font-semibold marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4">
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="border-border bg-surface absolute top-full right-0 mt-3 grid w-56 gap-1 rounded-2xl border p-3 shadow-xl"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:bg-background hover:text-foreground rounded-xl px-3 py-2.5 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/#contact"
                className="bg-accent text-accent-foreground mt-1 rounded-xl px-3 py-2.5 text-sm font-semibold"
              >
                Start a project
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
