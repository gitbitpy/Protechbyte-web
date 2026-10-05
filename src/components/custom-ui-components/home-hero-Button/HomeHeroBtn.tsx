"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./homeHeroBtn.module.css";

interface HomeHeroBtnProps {
  title: string;
  ariaLabel?: string;
  href?: string;
}

const scrollToHash = (hash: string) => {
  if (!hash) return;

  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const HomeHeroBtn: React.FC<HomeHeroBtnProps> = ({
  title,
  ariaLabel,
  href = "#",
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!href) {
      return;
    }

    if (href.includes("#")) {
      const [rawPath, rawHash] = href.split("#");
      const path = rawPath || "/";
      const hash = rawHash || "";

      if (window.location.pathname === path) {
        scrollToHash(hash);
        return;
      }

      const targetUrl = hash ? `${path}#${hash}` : path;
      router.push(targetUrl);
      return;
    }

    router.push(href);
  };

  return (
    <button
      className={styles["animated-button"]}
      aria-label={ariaLabel || title}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        className={styles["arr-2"]}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      <span className={styles.text}>{title}</span>

      <span className={styles.circle}></span>

      <svg
        viewBox="0 0 24 24"
        className={styles["arr-1"]}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
};

export default HomeHeroBtn;
