"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroVisual() {
  const visual = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".hero-orbit", {
          rotation: 360,
          duration: 32,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".hero-orb", {
          y: -16,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".hero-visual__art", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: visual.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: visual },
  );

  return (
    <div
      ref={visual}
      className="hero-visual relative mx-auto aspect-square w-full max-w-[31rem]"
      aria-hidden="true"
    >
      <div className="hero-visual__art absolute inset-0">
        <div className="hero-orbit border-foreground/15 absolute inset-[8%] rounded-full border">
          <span className="bg-accent absolute top-[11%] left-[12%] size-3 rounded-full" />
          <span className="bg-foreground/50 absolute right-[5%] bottom-[21%] size-2 rounded-full" />
        </div>
        <div className="border-foreground/10 absolute inset-[18%] rounded-full border" />
        <div className="hero-orb bg-accent absolute top-[20%] right-[22%] size-[18%] rounded-full shadow-[0_0_80px_rgba(183,241,113,0.28)]" />
        <div className="bg-foreground text-background absolute inset-[27%] grid place-items-center rounded-full shadow-2xl">
          <span className="font-display text-[clamp(2rem,7vw,4rem)] font-medium tracking-[-0.08em]">
            web<span className="text-accent">/</span>
          </span>
        </div>
        <div className="border-border bg-surface absolute right-[2%] bottom-[17%] rounded-2xl border px-4 py-3 shadow-xl sm:right-0">
          <span className="text-muted block text-[0.6rem] font-semibold tracking-[0.18em] uppercase">
            Built with intent
          </span>
          <span className="font-display mt-1 block text-sm font-semibold">
            Design · Code · Motion
          </span>
        </div>
        <div className="border-accent/70 bg-accent/10 absolute bottom-[19%] left-[1%] size-[14%] rounded-[30%] border backdrop-blur-sm" />
      </div>
    </div>
  );
}
