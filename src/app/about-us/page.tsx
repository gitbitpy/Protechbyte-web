import { Metadata } from "next";
import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";
import Image from "next/image";
import testimonialsData from "@/data/testimonialsData";
import SingleTestimonial from "./SingleTestimonial";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        {/* "Hero Section" */}
        <div className="-mx-4 flex flex-wrap">
          <div className="w-1/2 px-4">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-primary dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Discover Protechbyte Where Innovation Meets Expertise
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-lg">
              We are here to propel your business forward!
            </p>
            <div className="flex justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HomeHeroBtn title="Let's Grow" />
              <HomeHeroBtn title="Explore" />
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap items-start pt-16 md:pt-20 lg:pt-28">
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold mx-auto w-full !leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
              Who Are WE
            </h2>
            <p
              className="text-base !leading-relaxed text-body-color md:text-md"
              style={{ marginBottom: "44px" }}
            >
              We are the architects of innovation, the stewards of technology,
              and the partners in progress. With a relentless commitment to
              excellence, we empower businesses with cutting-edge IT services,
              helping them thrive in the digital age.
            </p>
            <p
              className="text-base !leading-relaxed text-body-color md:text-md"
              style={{ marginBottom: "44px" }}
            >
              ProTechByte Consulting is a dynamic and forward-thinking IT
              services company that specializes in delivering tailored solutions
              to a diverse range of clients. With a team of passionate
              technologists, strategists, and innovators, we work tirelessly to
              transform challenges into opportunities and aspirations into
              achievements.
            </p>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                src="/images/about/about-image.svg"
                alt="about-image"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="about-image"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap items-center pt-16 md:pt-20 lg:pt-28">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold mx-auto w-full !leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
              Our Commitment
            </h2>
            <p
              className="text-base !leading-relaxed text-body-color md:text-md"
              style={{ marginBottom: "44px" }}
            >
              We are committed to empowering businesses to thrive in the digital
              age. We view challenges as opportunities and strive to exceed
              expectations with every project. Our success is measured by the
              success of our clients, and we are dedicated to delivering value,
              innovation, and excellence in all that we do.
            </p>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap items-center pt-16 md:pt-20 lg:pt-28">
          <div className="w-full mx-auto px-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl text-center font-bold mx-auto w-full !leading-tight text-primary dark:text-white sm:text-4xl md:text-[45px]">
              What Our Users say
            </h2>
            <p
              className="text-base text-center !leading-relaxed text-text-color md:text-lg"
              style={{ marginBottom: "44px" }}
            >
              Our seasoned team of technical support specialists has been
              instrumental in driving the success of businesses like yours for
              many years. With a track record of excellence and enduring client
              relationships, we stand ready to elevate your operations to new
              heights.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial) => (
              <SingleTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
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
  );
};

export default AboutPage;
