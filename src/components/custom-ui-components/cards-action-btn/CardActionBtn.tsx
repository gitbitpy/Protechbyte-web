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



// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button> Button
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   button {
//     position: relative;
//     display: inline-block;
//     margin: 15px;
//     padding: 15px 30px;
//     text-align: center;
//     font-size: 18px;
//     letter-spacing: 1px;
//     text-decoration: none;
//     color: #725AC1;
//     background: transparent;
//     cursor: pointer;
//     transition: ease-out 0.5s;
//     border: 2px solid #725AC1;
//     border-radius: 10px;
//     box-shadow: inset 0 0 0 0 #725AC1;
//   }

//   button:hover {
//     color: white;
//     box-shadow: inset 0 -100px 0 0 #725AC1;
//   }

//   button:active {
//     transform: scale(0.9);
//   }`;

// export default Button;


// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <div className="styled-wrapper">
//         <button className="button">
//           <div className="button-box">
//             <span className="button-elem">
//               <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
//                 <path fill="black" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
//               </svg>
//             </span>
//             <span className="button-elem">
//               <svg fill="black" viewBox="0 0  24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
//                 <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
//               </svg>
//             </span>
//           </div>
//         </button>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .styled-wrapper .button {
//     display: block;
//     position: relative;
//     width: 76px;
//     height: 76px;
//     margin: 0;
//     overflow: hidden;
//     outline: none;
//     background-color: transparent;
//     cursor: pointer;
//     border: 0;
//   }

//   .styled-wrapper .button:before {
//     content: "";
//     position: absolute;
//     border-radius: 50%;
//     inset: 7px;
//     border: 3px solid black; /* Update dynamically for light/dark mode */
//     transition:
//       opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
//       transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
//   }

//   .styled-wrapper .button:after {
//     content: "";
//     position: absolute;
//     border-radius: 50%;
//     inset: 7px;
//     border: 4px solid #599a53;
//     transform: scale(1.3);
//     transition:
//       opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
//       transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//     opacity: 0;
//   }

//   .styled-wrapper .button:hover:before,
//   .styled-wrapper .button:focus:before {
//     opacity: 0;
//     transform: scale(0.7);
//     transition:
//       opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
//       transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//   }

//   .styled-wrapper .button:hover:after,
//   .styled-wrapper .button:focus:after {
//     opacity: 1;
//     transform: scale(1);
//     transition:
//       opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
//       transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
//   }

//   .styled-wrapper .button-box {
//     display: flex;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }

//   .styled-wrapper .button-elem {
//     display: block;
//     width: 30px;
//     height: 30px;
//     margin: 24px 18px 0 22px;
//     transform: rotate(360deg);
//     fill: #f0eeef;
//   }

//   .styled-wrapper .button:hover .button-box,
//   .styled-wrapper .button:focus .button-box {
//     transition: 0.4s;
//     transform: translateX(-69px);
//   }`;

// export default Button;


// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="cta">
//         <span>Hover me</span>
//         <svg width="15px" height="10px" viewBox="0 0 13 10">
//           <path d="M1,5 L11,5" />
//           <polyline points="8 1 12 5 8 9" />
//         </svg>
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .cta {
//     position: relative;
//     margin: auto;
//     padding: 12px 18px;
//     transition: all 0.2s ease;
//     border: none;
//     background: none;
//     cursor: pointer;
//   }

//   .cta:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     border-radius: 50px;
//     background: #b1dae7;
//     width: 45px;
//     height: 45px;
//     transition: all 0.3s ease;
//   }

//   .cta span {
//     position: relative;
//     font-family: "Ubuntu", sans-serif;
//     font-size: 18px;
//     font-weight: 700;
//     letter-spacing: 0.05em;
//     color: #234567;
//   }

//   .cta svg {
//     position: relative;
//     top: 0;
//     margin-left: 10px;
//     fill: none;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke: #234567;
//     stroke-width: 2;
//     transform: translateX(-5px);
//     transition: all 0.3s ease;
//   }

//   .cta:hover:before {
//     width: 100%;
//     background: #b1dae7;
//   }

//   .cta:hover svg {
//     transform: translateX(0);
//   }

//   .cta:active {
//     transform: scale(0.95);
//   }`;

// export default Button;


// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="btn">Hover me</button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .btn {
//     font-size: 17px;
//     background: transparent;
//     border: none;
//     padding: 1em 1.5em;
//     color: #ffedd3;
//     text-transform: uppercase;
//     position: relative;
//     transition: 0.5s ease;
//     cursor: pointer;
//   }

//   .btn::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     height: 2px;
//     width: 0;
//     background-color: #ffc506;
//     transition: 0.5s ease;
//   }

//   .btn:hover {
//     color: #1e1e2b;
//     transition-delay: 0.5s;
//   }

//   .btn:hover::before {
//     width: 100%;
//   }

//   .btn::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     height: 0;
//     width: 100%;
//     background-color: #ffc506;
//     transition: 0.4s ease;
//     z-index: -1;
//   }

//   .btn:hover::after {
//     height: 100%;
//     transition-delay: 0.4s;
//     color: aliceblue;
//   }`;

// export default Button;


// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="button">
//         Subscribe
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .button {
//     cursor: pointer;
//     position: relative;
//     padding: 10px 24px;
//     font-size: 18px;
//     color: rgb(193, 163, 98);
//     border: 2px solid rgb(193, 163, 98);
//     border-radius: 34px;
//     background-color: transparent;
//     font-weight: 600;
//     transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
//     overflow: hidden;
//   }

//   .button::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     margin: auto;
//     width: 50px;
//     height: 50px;
//     border-radius: inherit;
//     scale: 0;
//     z-index: -1;
//     background-color: rgb(193, 163, 98);
//     transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
//   }

//   .button:hover::before {
//     scale: 3;
//   }

//   .button:hover {
//     color: #212121;
//     scale: 1.1;
//     box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
//   }

//   .button:active {
//     scale: 1;
//   }`;

// export default Button;
