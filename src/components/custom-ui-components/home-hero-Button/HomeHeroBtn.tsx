// import React from "react";
// import "./homeHeroBtn.css";

// interface HomeHeroBtnProps {
//   title: string;
// }

// const HomeHeroBtn: React.FC<HomeHeroBtnProps> = ({ title }) => {
//   return (
//     <button className="animated-button">
//       <svg
//         viewBox="0 0 24 24"
//         className="arr-2"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
//       </svg>
//       <span className="text">{title}</span>
//       <span className="circle"></span>
//       <svg
//         viewBox="0 0 24 24"
//         className="arr-1"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
//       </svg>
//     </button>
//   );
// };

// export default HomeHeroBtn;

import React from "react";
import styles from "./homeHeroBtn.module.css";

interface HomeHeroBtnProps {
  title: string;
}

const HomeHeroBtn: React.FC<HomeHeroBtnProps> = ({ title }) => {
  return (
    <button className={styles["animated-button"]}>
      <svg
        viewBox="0 0 24 24"
        className={styles["arr-2"]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className={styles.text}>{title}</span>
      <span className={styles.circle}></span>
      <svg
        viewBox="0 0 24 24"
        className={styles["arr-1"]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
};

export default HomeHeroBtn;


// import React from "react";

// interface HomeHeroBtnProps {
//   title: string;
// }

// const HomeHeroBtn: React.FC<HomeHeroBtnProps> = ({ title }) => {
//   return (
//     <button className="group relative flex items-center gap-1 overflow-hidden 
//       rounded-full border-4 border-transparent bg-inherit px-8 py-2.5 text-base 
//       font-semibold text-primary shadow-[0_0_0_2px_var(--primary)] 
//       transition-all duration-300 ease-in-out hover:rounded-xl hover:text-white 
//       hover:shadow-none active:scale-95 focus:outline-none focus:ring-2 
//       focus:ring-primary focus:ring-offset-2">
      
//       <svg
//         viewBox="0 0 24 24"
//         className="absolute left-[-25%] h-6 w-6 fill-primary 
//           transition-all duration-300 ease-in-out group-hover:left-4"
//       >
//         <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
//       </svg>

//       <span className="relative z-10 translate-x-[-12px] transition-all 
//         duration-300 ease-in-out group-hover:translate-x-3">
//         {title}
//       </span>

//       <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 
//         -translate-y-1/2 rounded-full bg-primary opacity-0 transition-all 
//         duration-300 ease-in-out group-hover:h-[220px] group-hover:w-[220px] 
//         group-hover:opacity-100" />

//       <svg
//         viewBox="0 0 24 24"
//         className="absolute right-4 h-6 w-6 fill-primary 
//           transition-all duration-300 ease-in-out group-hover:right-[-25%]"
//       >
//         <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
//       </svg>
//     </button>
//   );
// };

// export default HomeHeroBtn;