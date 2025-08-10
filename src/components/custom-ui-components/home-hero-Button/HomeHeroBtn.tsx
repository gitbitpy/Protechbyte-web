"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./homeHeroBtn.module.css";

interface HomeHeroBtnProps {
  title: string;
  ariaLabel?: string;
  href?: string;
}

const HomeHeroBtn: React.FC<HomeHeroBtnProps> = ({
  title,
  ariaLabel,
  href = "#",
}) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (href.includes("#")) {
      const [path, hash] = href.split("#");

      if (window.location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    } else {
      router.push(href);
    }
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
