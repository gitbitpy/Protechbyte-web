import { notFound } from "next/navigation";
import Image from "next/image";
import servicesDetailData, { IServicesDetail } from "@/data/servicesDetailData";
import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";

const ServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const serviceDetails: IServicesDetail | undefined = servicesDetailData[slug];

  if (!serviceDetails) {
    notFound();
  }

  return (
    <main className="relative z-10 overflow-hidden bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* Gradient + Blob Layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
        <div className="absolute w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[200px] top-[-150px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[200px] bottom-[-100px] right-[-150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        {/* <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" /> */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="full-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.08" />
            </linearGradient>
          </defs>
         <path
            fill="url(#full-wave)"
            d="
              M0,230 
              C180,200 360,300 790,240 
              C1090,220 1000,320 1840,220 
              C1360,180 1440,300 1940,240 
              L1500,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          />
        </svg>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div>
            <h1 className="text-4xl sm:text-4xl font-extrabold mb-6 text-primary dark:text-blue-400 leading-tight">
              {serviceDetails.section1.heading}
            </h1>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8">
              {serviceDetails.section1.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <HomeHeroBtn title="Let's Grow" />
              <HomeHeroBtn title="Explore" />
            </div>
          </div>
          {/* Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={serviceDetails.section1.sectionOneImage}
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

{/* Middle Section - Premium Infographic */}
<section className="py-24 md:py-28 bg-gray-50 dark:bg-gray-900/40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

    {/* Image */}
    <div className="relative w-full h-[400px]">
      <Image
        src={serviceDetails.section2.sectionTwoImage}
        alt="Why it's important"
        fill
        className="object-contain"
      />
    </div>

    {/* Infographic Text */}
    <div className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400">
        {serviceDetails.section2.heading}
      </h2>

      <div className="grid gap-6">
        {[serviceDetails.section2.subHeading1, serviceDetails.section2.subHeading2].map((sub, idx) => (
          <div
            key={idx}
            className="relative flex items-start gap-4 p-6 rounded-2xl 
                       bg-white/70 dark:bg-gray-800/40 backdrop-blur-md 
                       shadow-lg border border-gray-100/60 dark:border-gray-700/50 
                       transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Step Number - Half Outside */}
            <div className="absolute -left-7 top-1/2 -translate-y-1/2 flex-shrink-0 w-12 h-12 rounded-full 
                            bg-gradient-to-r from-[#4A6CF7] to-[#A78BFA] text-white 
                            flex items-center justify-center font-bold shadow-md">
              {idx + 1}
            </div>

            {/* Text Content */}
            <div className="pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {sub.title}
              </h3>

              {/* Enhanced List */}
              <ul className="space-y-4">
                {sub.list.map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-4 transition-all duration-300"
                  >
                    {/* Bullet Icon */}
                    <span className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-gradient-to-br from-[#4A6CF7] to-[#A78BFA] 
                                    text-white flex items-center justify-center text-sm font-bold shadow-md 
                                    group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      ✓
                    </span>

                    {/* List Item Text */}
                    <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* Final Section */}
<section className="py-24 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
    {/* Text */}
    <div className="space-y-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        {serviceDetails.section3.heading}
      </h2>

      <div className="space-y-12">
        {serviceDetails.section3.items.map((item, index) => {
          const isEven = index % 2 === 0; // even = left, odd = right
          return (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-white/70 dark:bg-gray-900/50 shadow-lg backdrop-blur-sm 
                         border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300
                         ${isEven ? "pl-12" : "pr-12"}`}
            >
              {/* Number Circle */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-14 h-14 rounded-full 
                            bg-gradient-to-tr from-blue-600 to-primary text-white flex items-center justify-center 
                            text-lg font-bold shadow-lg
                            ${isEven ? "-left-7" : "-right-7"}`}
              >
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>

    {/* Image */}
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
      <Image
       src={serviceDetails.section1.sectionOneImage}
        alt="Process image"
        fill
        className="object-cover hover:scale-105 transition-transform duration-500"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /> */}
    </div>
  </div>
</section>



    </main>
  );
};

export default ServicePage;
