import { Metadata } from "next";
import Image from "next/image";
import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";
import testimonialsData from "@/data/testimonialsData";
import SingleTestimonial from "./SingleTestimonial";

export const metadata: Metadata = {
  title: "About | ProTechByte",
  description:
    "Learn more about ProTechByte – where innovation meets expertise.",
};

const AboutPage = () => {
  return (
    <main className="relative z-10 overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Background Gradient Blobs */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-400 opacity-20 rounded-full blur-[200px] top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-400 opacity-20 rounded-full blur-[200px] bottom-[-100px] right-[-100px]" />
      </div> */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-28 space-y-12 relative">
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
        </div> */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="full-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor="#4A6CF7"
                stopOpacity="0.1"
                // className="stop-opacity-[0.3] dark:stop-opacity-[0.08]"
              />
              <stop
                offset="100%"
                stopColor="#A78BFA"
                stopOpacity="0.08"
                // className="stop-opacity-[0.08] dark:stop-opacity-[0.08]"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#full-wave)"
            d="
              M0,280 
              C1000,220 400,350 1700,230
              L3000,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          />
          <path
            fill="url(#full-wave)"
            d="
              M0,280
              C1000,230 400,360 1700,240
              L3000,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          />
          <path
            fill="url(#full-wave)"
            d="
              M0,280
              C1000,240 400,370 1700,250
              L3000,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-center md:text-left text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-primary dark:text-blue-400">
              Discover ProTechByte
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              We are here to propel your business forward with innovative
              technology solutions.
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:justify-center md:justify-start lg:justify-start">
              <HomeHeroBtn title="Let's Grow" href="/contact-us#contact-form" />
              <HomeHeroBtn title="Explore" href="/#services" />
            </div>
          </div>
          <div className="relative w-full h-[350px]">
            <Image
              src="/images/about/about-hero-img.svg"
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20">
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16 text-primary dark:text-blue-400">
            Who Are We
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[350px] order-2 md:order-1">
              <Image
                src="/images/about/our-vision-img.svg"
                alt="Our Vision"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                We are the architects of innovation, the stewards of technology,
                and the partners in progress. With a relentless commitment to
                excellence, we empower businesses with cutting-edge IT services,
                helping them thrive in this digital age.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                ProTechByte Consulting is a dynamic and forward-thinking IT
                services company that specializes in delivering a diverse range of solutions. Our passionate team of
                technologists and innovators transforms challenges into
                opportunities and aspirations into achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 relative">
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16 text-primary dark:text-blue-400">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                We are committed to empowering businesses to thrive in the
                digital age. We view challenges as opportunities and strive to
                exceed expectations with every project. Our success is measured
                by the success of our clients, and we are dedicated to
                delivering value, innovation, and excellence in all that we do.
              </p>
            </div>
            <div className="relative w-full h-[350px]">
              <Image
                src="/images/about/commitment-img.svg"
                alt="Our Commitment"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary dark:text-blue-400">
            What Our Users Say
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-12">
            Our seasoned team of technical support specialists has been
            instrumental in driving the success of businesses like yours for
            many years. With a track record of excellence and enduring client
            relationships, we stand ready to elevate your operations to new
            heights.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial) => (
              <SingleTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
