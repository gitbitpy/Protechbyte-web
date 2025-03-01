"use client";

import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Contact Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Contact Page for Startup Nextjs Template",
//   // other metadata
// };

const ContactPage = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-1/2 px-4">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-primary dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Catch Us in the Cloud! Contact Protechbyte
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-text-color dark:text-body-color-dark sm:text-lg md:text-xl">
                With us, you are not just a client; you're a partner in success.
                Let&apos;s elevate your business together.
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-secondary dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-base text-text-color dark:text-dark-6">
                    410, J2 Block, Johar Town, Lahore
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_941_17577)">
                      <path
                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_941_17577">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-secondary  dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-text-color dark:text-dark-6">
                    +92-339-0111106
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-secondary dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    connect@protechbyte.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative -mx-4 flex flex-wrap items-center pt-16 md:pt-20 lg:pt-28">
            <div className="w-full max-w-[570px] mx-auto text-center mb-[100px]">
              <h2 className="mb-4 text-3xl font-bold mx-auto w-full !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Drop Us a Line
              </h2>
              <p
                className="text-base !leading-relaxed text-body-color md:text-lg"
                style={{ marginBottom: "44px" }}
              >
                Whether you have questions, need technical support, or want to
                explore how our cloud solutions can benefit your business, we're
                here to help. Reach out to us using the information below and
                let&apos;s start a conversation about taking your operations to new
                heights with Protechbyte.
              </p>
            </div>

            <div className="w-full px-4">
              {/* <div className="mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"> */}
              <div className="mx-auto max-w-4xl p-28 shadow-2xl rounded-lg bg-transparent border border-secondary">
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="relative z-0 mb-10">
                        <input
                          type="text"
                          id="firstName"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="firstName"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          First Name
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="relative z-0 mb-10">
                        <input
                          type="text"
                          id="lastName"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="lastName"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Last Name
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="relative z-0 mb-8">
                        <input
                          type="email"
                          id="email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="email"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="relative z-0 mb-10">
                        <input
                          type="tel"
                          id="phone"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="phone"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Phone
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="relative z-0 mb-10">
                        <input
                          type="text"
                          id="companySize"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="companySize"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Company Size
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="relative z-0 mb-10">
                        <input
                          type="text"
                          id="inquiry"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="inquiry"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Inquiry Type
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="relative z-0 mb-10">
                        <textarea
                          rows={2}
                          id="detailsAndRequirements"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=""
                        />
                        <label
                          htmlFor="detailsAndRequirements"
                          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                          Details/Requirements
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="w-full rounded-full bg-primary px-9 py-4 text-base font-medium text-white shadow-md transition-all duration-300 ease-in-out transform hover:bg-secondary hover:shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <span className="absolute left-2 top-7">
                <svg
                  width="57"
                  height="65"
                  viewBox="0 0 57 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
                    fill="url(#paint0_linear_1028_600)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1028_600"
                      x1="-18.3187"
                      y1="55.1044"
                      x2="37.161"
                      y2="15.3509"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0.62"
                      />
                      <stop
                        offset="1"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <span className="absolute bottom-24 left-1.5">
                <svg
                  width="39"
                  height="32"
                  viewBox="0 0 39 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
                    fill="url(#paint0_linear_1028_601)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1028_601"
                      x1="39.1948"
                      y1="38.335"
                      x2="10.6982"
                      y2="10.2511"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0.62"
                      />
                      <stop
                        offset="1"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <span className="absolute right-2 top-[140px]">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
                    fill="url(#paint0_linear_1028_602)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1028_602"
                      x1="-0.571054"
                      y1="-37.1717"
                      x2="28.7937"
                      y2="26.7564"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0.62"
                      />
                      <stop
                        offset="1"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <span className="absolute right-0 top-0">
                <svg
                  width="162"
                  height="91"
                  viewBox="0 0 162 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <path
                      opacity="0.45"
                      d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                      stroke="url(#paint0_linear_1028_603)"
                    />
                    <path
                      opacity="0.45"
                      d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                      stroke="url(#paint1_linear_1028_603)"
                    />
                    <path
                      opacity="0.45"
                      d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69"
                      stroke="url(#paint2_linear_1028_603)"
                    />
                    <path
                      opacity="0.45"
                      d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102"
                      stroke="url(#paint3_linear_1028_603)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1028_603"
                      x1="291.35"
                      y1="12.1032"
                      x2="179.211"
                      y2="237.617"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.328125"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      />
                      <stop
                        offset="1"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1028_603"
                      x1="333.35"
                      y1="-12.8968"
                      x2="221.211"
                      y2="212.617"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.328125"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      />
                      <stop
                        offset="1"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1028_603"
                      x1="294.35"
                      y1="-3.89678"
                      x2="182.211"
                      y2="221.617"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.328125"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      />
                      <stop
                        offset="1"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1028_603"
                      x1="331.35"
                      y1="-36.8968"
                      x2="219.211"
                      y2="188.617"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.328125"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      />
                      <stop
                        offset="1"
                        stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
