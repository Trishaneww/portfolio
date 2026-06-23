"use client";

// Next,js
import { useState } from "react";

// HTML Components
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(() => {
    if (typeof document === "undefined") return null;
    return document.documentElement.classList.contains("dark");
  });

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-subtle hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
