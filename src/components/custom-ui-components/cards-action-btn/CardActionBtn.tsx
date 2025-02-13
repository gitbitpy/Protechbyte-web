import React from "react";
import "./cardActionBtn.css";

interface CardActionBtnProps {
  title?: string;
}

const CardActionBtn: React.FC<CardActionBtnProps> = ({
  title = "Learn More",
}) => {
  return (
    <button className="learn-more">
      <span className="circle">
        <span className="icon arrow">
          <span className="absolute"></span>
        </span>
      </span>
      <span className="button-text">
        {title}
      </span>
    </button>
  );
};

export default CardActionBtn;
