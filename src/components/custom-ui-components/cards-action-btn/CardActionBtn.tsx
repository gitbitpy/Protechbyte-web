"use client"

import React from "react";
import { useRouter } from "next/navigation";
import "./cardActionBtn.css";

interface CardActionBtnProps {
  title?: string;
  urlLink?: string;
}

const CardActionBtn: React.FC<CardActionBtnProps> = ({
  title = "Learn More",
  urlLink,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (urlLink) {
      router.push(urlLink);
    }
  };
  return (
    <button className="card-action-btn learn-more" onClick={handleClick}>
      <span className="circle">
        <span className="icon arrow">
          <span className="absolute"></span>
        </span>
      </span>
      <span className="button-text">{title}</span>
    </button>
  );
};

export default CardActionBtn;
