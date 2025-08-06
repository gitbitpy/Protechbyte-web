import SingleService from "./SingleService";
import servicesCardData from "@/data/servicesCardData";

const Services = () => {
  return (
    <section
      id="features"
      className="relative bg-white dark:bg-gray-900 py-24 overflow-hidden"
    >
      {/* Horizontal gradient background strip */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block mb-4">
            Our Services
            <span className="block h-[6px] mt-2 mx-auto bg-gradient-to-r from-primary to-purple-400 w-24 rounded-full" />
          </h2>
          <p className="text-base font-normal text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Our seasoned team of technical support specialists has been
            instrumental in driving the success of businesses like yours. With
            years of expertise and long-term client partnerships, we&apos;re ready to
            take your operations to the next level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesCardData.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 to-purple-500/30 hover:from-primary/50 hover:to-purple-500/50 transition-all duration-300"
            >
              {/* 🌟 Decorative SVG background */}
              <svg
                className="absolute top-[-30px] right-[-30px] w-32 h-32 opacity-10 dark:opacity-15 pointer-events-none z-0"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#grad)"
                  d="M41.6,-56.6C52.8,-49.4,60.6,-35.1,65.2,-20.3C69.8,-5.5,71.2,9.7,65.6,21.8C59.9,33.9,47.3,42.8,34.2,51.6C21,60.4,10.5,69.1,-3.5,74.1C-17.5,79.1,-35.1,80.5,-48.5,72.3C-62,64.1,-71.3,46.3,-71.1,30.1C-70.8,13.9,-61,-0.8,-53.8,-14.8C-46.7,-28.7,-42.1,-41.9,-32.6,-51.2C-23.1,-60.5,-8.6,-65.8,6.6,-72.6C21.8,-79.4,43.4,-87.8,56.6,-78.9C69.8,-69.9,74.5,-43.7,64.9,-24.3Z"
                  transform="translate(100 100)"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A6CF7" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="bg-white dark:bg-gray-900 rounded-[inherit] p-3 h-full shadow-lg hover:shadow-xl transition-all backdrop-blur-md">
                <SingleService service={service} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
