"use client";

import React, { useState } from "react";
import privacyPolicyData from "@/data/privacyPolicyData";

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-primary dark:text-primary sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Privacy Policy
            </h1>

            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              At Protechbyte, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines how we collect, use, and safeguard your data when
              you interact with our services.
            </p>
          </div>

          <div className="w-full px-4">
            {privacyPolicyData.map((section, index) => (
              <div key={index} className="mb-6">
                {/* <h2 className="text-2xl font-semibold text-secondary mb-2">
                  {section.title}
                </h2>
                <div className="text-lg text-gray-700">
                  {section.content.map((item, idx) => (
                    <p key={idx} className="flex items-start mb-4">
                      <span className="mr-3 text-secondary rounded-full">
                        &#10003;
                      </span>
                      <span className="text-text-color">{item}</span>
                    </p>
                  ))}
                </div> */}

                {/* Accordion Header */}
                <div
                  className="cursor-pointer text-xl text-secondary mb-2 flex items-center justify-between"
                  onClick={() => toggleAccordion(index)}
                >
                  {section.title}
                  <span
                    className={`transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {/* &#9660; */}
                    {openIndex === index ? (
                      <span>&#45;</span>
                    ) : (
                      <span>&#43;</span>
                    )}
                  </span>
                </div>

                {/* Accordion Body */}
                <div
                  className={`text-lg text-gray-700 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {section.content.map((item, idx) => (
                    <p key={idx} className="flex items-start mb-4">
                      <span className="mr-3 text-secondary rounded-full">
                        &#10003;
                      </span>
                      <span className="text-text-color">{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

/* <div className="w-full px-4">
            {privacyPolicyData.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {section.title}
                </h2>
                <div className="text-lg text-gray-700">
                  {section.content.length > 1 ? (
                    <ul className="list-inside list-disc pl-4">
                      {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content[0]}</p>
                  )}
                </div>
              </div>
            ))}
          </div> */
