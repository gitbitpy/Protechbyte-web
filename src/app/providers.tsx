"use client";

import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      savedTheme = "dark";
    }
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    if (savedTheme === "dark" || systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div>{children}</div>;
}
