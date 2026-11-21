"use client";

import { useState } from "react";

const items = [
  "React",
  "Next.js",
  "GSAP",
  "JavaScript",
  "Interactive frontends",
  "Business websites",
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
  const [paused, setPaused] = useState(false);

  return (
    <section className="marquee-band" aria-label="Tools and areas of focus">
      <div className="max-w-content px-page mx-auto flex items-center gap-5">
        <p className="text-muted hidden shrink-0 text-xs font-semibold tracking-[0.16em] uppercase sm:block">
          Tools &amp; focus
        </p>
        <p className="sr-only">
          React, Next.js, GSAP, JavaScript, interactive frontends and business
          websites.
        </p>
        <div className="marquee__window" aria-hidden="true">
          <div
            className={paused ? "marquee__track is-paused" : "marquee__track"}
            aria-hidden="true"
          >
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
        <button
          type="button"
          className="marquee__toggle"
          aria-label={
            paused ? "Resume the tools marquee" : "Pause the tools marquee"
          }
          aria-pressed={paused}
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </section>
  );
}
