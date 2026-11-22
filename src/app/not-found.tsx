import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-content px-page mx-auto flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-4 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
        This page is not here.
      </h1>
      <p className="text-muted mt-5 max-w-md leading-7">
        The link may be out of date, or the page may have moved.
      </p>
      <Link
        href="/"
        className="bg-accent text-accent-foreground mt-8 inline-flex min-h-12 items-center rounded-full px-5 text-sm font-semibold"
      >
        Back to the homepage
      </Link>
    </main>
  );
}
