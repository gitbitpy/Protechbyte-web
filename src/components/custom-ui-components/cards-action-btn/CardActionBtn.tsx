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

// const Card = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="border" />
//         <div className="content">
//           <div className="logo">
//             <div className="logo1">
//               <svg viewBox="0 0 29.667 31.69" xmlns="http://www.w3.org/2000/svg" id="logo-main">
//                 <path transform="translate(0 0)" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" data-name="Path 6" id="Path_6" />
//                 <path transform="translate(-45.91 0)" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" data-name="Path 7" id="Path_7" />
//                 <path transform="translate(0 -51.963)" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" data-name="Path 8" id="Path_8" />
//               </svg>
//             </div>
//             <div className="logo2">
//               <svg viewBox="0 0 101.014 23.535" xmlns="http://www.w3.org/2000/svg" id="logo-second">
//                 <g transform="translate(-1029.734 -528.273)">
//                   <path transform="translate(931.023 527.979)" d="M109.133,14.214l3.248-11.706A1.8,1.8,0,0,1,114.114,1.2h2.229a1.789,1.789,0,0,1,1.7,2.358L111.884,21.71a1.8,1.8,0,0,1-1.7,1.216h-3a1.8,1.8,0,0,1-1.7-1.216L99.317,3.554a1.789,1.789,0,0,1,1.7-2.358h2.229a1.8,1.8,0,0,1,1.734,1.312l3.248,11.706a.468.468,0,0,0,.9,0Z" data-name="Path 1" id="Path_1" />
//                   <path transform="translate(888.72 528.773)" d="M173.783,22.535a10.77,10.77,0,0,1-7.831-2.933,10.387,10.387,0,0,1-3.021-7.813v-.562A13.067,13.067,0,0,1,164.2,5.372,9.315,9.315,0,0,1,167.81,1.4,10.176,10.176,0,0,1,173.136,0,9.105,9.105,0,0,1,180.2,2.812q2.576,2.812,2.577,7.973v.583a1.793,1.793,0,0,1-1.8,1.787H169.407a.466.466,0,0,0-.457.564,5.08,5.08,0,0,0,5.217,4.136A6.594,6.594,0,0,0,178.25,16.6a1.817,1.817,0,0,1,2.448.218l.557.62a1.771,1.771,0,0,1-.1,2.488,9.261,9.261,0,0,1-2.4,1.57,11.732,11.732,0,0,1-4.972,1.034ZM173.115,4.68A3.66,3.66,0,0,0,170.3,5.85,6.04,6.04,0,0,0,168.911,9.2h8.125V8.735a4.305,4.305,0,0,0-1.051-3,3.781,3.781,0,0,0-2.87-1.059Z" data-name="Path 2" id="Path_2" />
//                   <path transform="translate(842.947 528.771)" d="M244.851,3.928a1.852,1.852,0,0,1-1.95,1.76c-.1,0-.2,0-.3,0a7.53,7.53,0,0,0-2.234.3,3.275,3.275,0,0,0-2.348,3.1V20.347a1.844,1.844,0,0,1-1.9,1.787h-2.366a1.844,1.844,0,0,1-1.9-1.787V1.751A1.391,1.391,0,0,1,233.294.4h3.043a1.4,1.4,0,0,1,1.428,1.265l.035.533a.282.282,0,0,0,.5.138A5.617,5.617,0,0,1,242.988,0h.031a1.832,1.832,0,0,1,1.864,1.813l-.032,2.114Z" data-name="Path 3" id="Path_3" />
//                   <path transform="translate(814.555 528.773)" d="M287.2,16.127a1.869,1.869,0,0,0-1.061-1.677,12.11,12.11,0,0,0-3.406-1.095q-7.8-1.627-7.8-6.587a5.956,5.956,0,0,1,2.415-4.83A9.781,9.781,0,0,1,283.659,0a10.536,10.536,0,0,1,6.659,1.948,6.36,6.36,0,0,1,2.029,2.586,1.791,1.791,0,0,1-1.661,2.475h-2.291a1.754,1.754,0,0,1-1.624-1.137,2.7,2.7,0,0,0-.606-.922,3.435,3.435,0,0,0-2.526-.814,3.512,3.512,0,0,0-2.284.663,2.088,2.088,0,0,0-.808,1.687,1.786,1.786,0,0,0,.92,1.557,9.485,9.485,0,0,0,3.1,1.024,25.5,25.5,0,0,1,3.678.974q4.627,1.687,4.628,5.844a5.659,5.659,0,0,1-2.567,4.81,11.125,11.125,0,0,1-6.629,1.838,11.627,11.627,0,0,1-4.881-.974,8.173,8.173,0,0,1-3.345-2.671,6.843,6.843,0,0,1-.679-1.174,1.784,1.784,0,0,1,1.653-2.492h1.9a1.786,1.786,0,0,1,1.673,1.133,2.8,2.8,0,0,0,.925,1.237,4.587,4.587,0,0,0,2.87.824,4.251,4.251,0,0,0,2.536-.632,1.965,1.965,0,0,0,.859-1.657Z" data-name="Path 4" id="Path_4" />
//                   <path transform="translate(772.607 528.773)" d="M348.648,22.535a10.77,10.77,0,0,1-7.832-2.933,10.386,10.386,0,0,1-3.021-7.813v-.562a13.067,13.067,0,0,1,1.273-5.854A9.314,9.314,0,0,1,342.676,1.4,10.174,10.174,0,0,1,348,0a9.1,9.1,0,0,1,7.063,2.812q2.576,2.812,2.577,7.973v.583a1.793,1.793,0,0,1-1.8,1.787H344.272a.467.467,0,0,0-.457.564,5.081,5.081,0,0,0,5.217,4.136,6.594,6.594,0,0,0,4.083-1.251,1.817,1.817,0,0,1,2.448.218l.557.62a1.771,1.771,0,0,1-.1,2.488,9.26,9.26,0,0,1-2.4,1.57,11.731,11.731,0,0,1-4.972,1.034ZM347.981,4.68a3.659,3.659,0,0,0-2.819,1.17A6.035,6.035,0,0,0,343.777,9.2H351.9V8.735a4.307,4.307,0,0,0-1.051-3,3.781,3.781,0,0,0-2.87-1.059Z" data-name="Path 5" id="Path_5" />
//                 </g>
//               </svg>
//             </div>
//             <span className="trail" />
//           </div>
//           <span className="logo-bottom-text">uiverse.io</span>
//         </div>
//         <span className="bottom-text">universe of ui</span>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     width: 300px;
//     height: 200px;
//     background: #243137;
//     position: relative;
//     display: grid;
//     place-content: center;
//     border-radius: 10px;
//     overflow: hidden;
//     transition: all 0.5s ease-in-out;
//   }

//   #logo-main, #logo-second {
//     height: 100%;
//   }

//   #logo-main {
//     fill: #bd9f67;
//   }

//   #logo-second {
//     padding-bottom: 10px;
//     fill: none;
//     stroke: #bd9f67;
//     stroke-width: 1px;
//   }

//   .border {
//     position: absolute;
//     inset: 0px;
//     border: 2px solid #bd9f67;
//     opacity: 0;
//     transform: rotate(10deg);
//     transition: all 0.5s ease-in-out;
//   }

//   .bottom-text {
//     position: absolute;
//     left: 50%;
//     bottom: 13px;
//     transform: translateX(-50%);
//     font-size: 6px;
//     text-transform: uppercase;
//     padding: 0px 5px 0px 8px;
//     color: #bd9f67;
//     background: #243137;
//     opacity: 0;
//     letter-spacing: 7px;
//     transition: all 0.5s ease-in-out;
//   }

//   .content {
//     transition: all 0.5s ease-in-out;
//   }

//   .content .logo {
//     height: 35px;
//     position: relative;
//     width: 33px;
//     overflow: hidden;
//     transition: all 1s ease-in-out;
//   }

//   .content .logo .logo1 {
//     height: 33px;
//     position: absolute;
//     left: 0;
//   }

//   .content .logo .logo2 {
//     height: 33px;
//     position: absolute;
//     left: 33px;
//   }

//   .content .logo .trail {
//     position: absolute;
//     right: 0;
//     height: 100%;
//     width: 100%;
//     opacity: 0;
//   }

//   .content .logo-bottom-text {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     margin-top: 30px;
//     color: #bd9f67;
//     padding-left: 8px;
//     font-size: 11px;
//     opacity: 0;
//     letter-spacing: none;
//     transition: all 0.5s ease-in-out 0.5s;
//   }

//   .card:hover {
//     border-radius: 0;
//     transform: scale(1.1);
//   }

//   .card:hover .logo {
//     width: 134px;
//     animation: opacity 1s ease-in-out;
//   }

//   .card:hover .border {
//     inset: 15px;
//     opacity: 1;
//     transform: rotate(0);
//   }

//   .card:hover .bottom-text {
//     letter-spacing: 3px;
//     opacity: 1;
//     transform: translateX(-50%);
//   }

//   .card:hover .content .logo-bottom-text {
//     opacity: 1;
//     letter-spacing: 9.5px;
//   }

//   .card:hover .trail {
//     animation: trail 1s ease-in-out;
//   }

//   @keyframes opacity {
//     0% {
//       border-right: 1px solid transparent;
//     }

//     10% {
//       border-right: 1px solid #bd9f67;
//     }

//     80% {
//       border-right: 1px solid #bd9f67;
//     }

//     100% {
//       border-right: 1px solid transparent;
//     }
//   }

//   @keyframes trail {
//     0% {
//       background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
//       opacity: 0;
//     }

//     30% {
//       background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
//       opacity: 1;
//     }

//     70% {
//       background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
//       opacity: 1;
//     }

//     95% {
//       background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
//       opacity: 0;
//     }
//   }`;

// export default Card;


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
