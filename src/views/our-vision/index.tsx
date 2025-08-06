"use client";

import Image from "next/image";
import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";

const OurVision = () => {
  return (
    <section
      id="about"
      className="relative bg-white dark:bg-gray-900 py-24 overflow-hidden"
    >
      {/* Reversed horizontal gradient background strip */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div> */}

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block mb-4">
            Our Vision
            <span className="block h-[6px] mx-auto mt-2 bg-gradient-to-r from-primary to-purple-400 w-24 rounded-full"></span>
          </h2>
          <p className="text-base font-normal text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We strive to be the trusted advisors, problem solvers, and catalysts
            for growth in an ever-evolving digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              Our mission is to revolutionize the IT landscape for our clients,
              enabling them to achieve unparalleled success through technology.
              We&apos;re passionate about innovation and committed to delivering
              scalable, secure, and future-ready solutions.
            </p>
            <CardActionBtn title="Know about us" />
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl bg-white/60 dark:bg-white/5 transition-all">
              <div className="aspect-[4/3] w-full">
                <Image
                  src="/images/home/our-vision-img.svg"
                  alt="Hero Image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
