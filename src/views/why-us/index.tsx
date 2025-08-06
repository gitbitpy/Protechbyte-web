"use client";

import { FaCheckCircle } from "react-icons/fa";
import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";
import whyUsData from "@/data/whyUsData";

const WhyUs = () => {
  const ListItem = ({
    heading,
    description,
    icon,
  }: {
    heading: string;
    description: string;
    icon?: React.ReactNode;
  }) => (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group relative overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="min-w-[48px] h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full text-xl group-hover:scale-110 transition-transform duration-300">
          {icon || <FaCheckCircle />}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-primary transition-colors duration-200">
            {heading}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
    </div>
  );

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Horizontal reverse gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Why Choose <span className="text-primary">ProtechByte</span>?
            <span className="block h-[6px] mx-auto mt-2 bg-gradient-to-r from-primary to-purple-400 w-24 rounded-full"></span>
          </h2>
          <p className="text-base font-normal text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just a tech company — we&apos;re your strategic innovation
            partner. Here&apos;s why businesses trust us to lead their digital
            evolution.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {whyUsData.map((item, index) => (
            <ListItem
              key={index}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <CardActionBtn title="Know about us" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
