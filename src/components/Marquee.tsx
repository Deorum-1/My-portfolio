const items = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "GSAP",
  "Motion",
];

function MarqueeItems() {
  return (
    <div className="marquee__group">
      {items.map((item) => (
        <span key={item} className="marquee__item">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-band" aria-label="Tools and areas of focus">
      <div className="max-w-content px-page mx-auto flex items-center gap-5">
        <p className="text-muted hidden shrink-0 text-xs font-semibold tracking-[0.16em] uppercase sm:block">
          Frontend stack
        </p>
        <p className="sr-only">
          React, Next.js, TypeScript, JavaScript, Tailwind CSS, GSAP and Motion.
        </p>
        <div
          className="marquee__window"
          role="group"
          tabIndex={0}
          aria-label="Scrolling frontend technologies. Focus to stop the animation."
        >
          <div className="marquee__track" aria-hidden="true">
            <MarqueeItems />
            <div className="marquee__group">
              {items.map((item) => (
                <span key={item} className="marquee__item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
