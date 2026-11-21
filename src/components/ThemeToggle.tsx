"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

type Theme = "light" | "dark";
const storageKey = "portfolio-theme";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = window.localStorage.getItem(storageKey);

    const applyTheme = (nextTheme: Theme) => {
      document.documentElement.dataset.theme = nextTheme;
      setTheme(nextTheme);
    };

    applyTheme(
      isTheme(savedTheme) ? savedTheme : mediaQuery.matches ? "dark" : "light",
    );

    function syncSystemTheme(event: MediaQueryListEvent) {
      if (!isTheme(window.localStorage.getItem(storageKey))) {
        applyTheme(event.matches ? "dark" : "light");
      }
    }

    mediaQuery.addEventListener("change", syncSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncSystemTheme);
  }, []);

  function toggleTheme() {
    const currentTheme =
      theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    window.localStorage.setItem(storageKey, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="outline"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      className="px-3 text-xs"
      onClick={toggleTheme}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
