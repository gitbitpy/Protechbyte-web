import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* 🟣 Full Wavy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

        {/* C180,120 360,200 540,160  */}
              {/* C720,120 900,180 1080,160  */}
              {/* C1260,140 1440,160 1440,160  */}
              {/* L1440,320  */}

        {/* 💫 Glowing blobs */}
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[150px] opacity-50" />
      </div>

      {/* 📌 Hero Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Catalyzing Growth Through <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            Cloud Excellence
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          With us, you&apos;re not just a client; you&apos;re a partner in success. Let&apos;s
          elevate your business together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <HomeHeroBtn title="Let's Grow" />
          <HomeHeroBtn title="Explore" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
