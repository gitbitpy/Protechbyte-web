import { Metadata } from "next";
import Image from "next/image";
import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";
import testimonialsData from "@/data/testimonialsData";
import SingleTestimonial from "./SingleTestimonial";

export const metadata: Metadata = {
  title: "About | ProTechByte",
  description: "Learn more about ProTechByte – where innovation meets expertise.",
};

const AboutPage = () => {
  return (
    <main className="relative z-10 overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-400 opacity-20 rounded-full blur-[200px] top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-400 opacity-20 rounded-full blur-[200px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-center md:text-left text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-primary dark:text-blue-400">
              Discover ProTechByte
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              We are here to propel your business forward with innovative technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <HomeHeroBtn title="Let's Grow" />
              <HomeHeroBtn title="Explore" />
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16 text-blue-700 dark:text-blue-400">
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
                We are the architects of innovation, the stewards of technology, and the partners in progress.
                With a relentless commitment to excellence, we empower businesses with cutting-edge IT services,
                helping them thrive in the digital age.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                ProTechByte Consulting is a dynamic and forward-thinking IT services company that specializes
                in delivering tailored solutions to a diverse range of clients. Our passionate team of
                technologists and innovators transforms challenges into opportunities and aspirations into achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16 text-blue-700 dark:text-blue-400">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                We are committed to empowering businesses to thrive in the digital age. We view challenges as
                opportunities and strive to exceed expectations with every project. Our success is measured by
                the success of our clients, and we are dedicated to delivering value, innovation, and excellence
                in all that we do.
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            What Our Users Say
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-12">
            Our seasoned team of technical support specialists has been instrumental in driving the success
            of businesses like yours for many years. With a track record of excellence and enduring client
            relationships, we stand ready to elevate your operations to new heights.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial) => (
              <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
