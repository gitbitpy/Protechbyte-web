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
    <main className="relative z-10 overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Gradient + Blob Layer */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
        <div className="absolute w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[200px] top-[-150px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[200px] bottom-[-100px] right-[-150px]" />
      </div> */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-28">
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
              <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.08" />
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center z-10">
          {/* Text */}
          <div>
            <h1 className="text-4xl sm:text-4xl font-extrabold mb-6 text-primary dark:text-blue-400 leading-tight">
              {serviceDetails.section1.heading}
            </h1>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8">
              {serviceDetails.section1.description}
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:justify-center md:justify-start lg:justify-start">
              <HomeHeroBtn title="Let's Grow" href="/contact-us#contact-form" />
              <HomeHeroBtn title="Explore" href="/#services" />
            </div>
          </div>
          {/* Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
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
      <section className="relative py-28">
        {/* Soft Blurred Backgrounds */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white leading-tight">
            {serviceDetails.section2.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              serviceDetails.section2.subHeading1,
              serviceDetails.section2.subHeading2,
            ].map((sub, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-3xl shadow-xl border bg-white/60 dark:bg-gray-900/60 
            border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md 
            transition-all duration-300 hover:shadow-2xl hover:border-blue-400/40 dark:hover:border-blue-500/40 group"
              >
                {/* Number Badge */}
                <div
                  className="absolute -top-6 left-6 p-2 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 
  text-white shadow-md border-2 border-white dark:border-gray-950"
                >
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-2xl rounded-full" />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pl-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {sub.title}
                </h3>

                <ul className="space-y-4">
                  {sub.list.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span
                        className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-gradient-to-br from-[#4A6CF7] to-[#A78BFA] 
                  text-white flex items-center justify-center text-sm font-bold shadow-md 
                  group-hover:scale-110 group-hover:rotate-6 transition-transform"
                      >
                        ✓
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative py-28">
        {/* Soft Glows */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-24 text-gray-900 dark:text-white leading-tight">
            {serviceDetails.section3.heading}
          </h2>

          <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/20 pl-4 space-y-16">
            {serviceDetails.section3.items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative group ml-4 md:ml-0 md:pl-10 
              ${isEven ? "md:pr-10" : "md:pl-10"} 
              transition-all`}
                >
                  {/* Glowing Dot Indicator */}
                  <div className="absolute -left-[1.35rem] top-4 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 shadow-md" />

                  <div className="bg-white/70 dark:bg-gray-900/60 border border-gray-200/40 dark:border-gray-700/40 backdrop-blur-md shadow-xl rounded-3xl px-6 py-8 transition hover:shadow-2xl transition-all duration-300 hover:shadow-2xl hover:border-blue-400/40 dark:hover:border-blue-500/40 group">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.heading}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
