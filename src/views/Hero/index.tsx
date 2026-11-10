import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-primary/10 via-secondary/10 to-transparent" />
      </div>
      {/* 🟣 Full Wavy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <div className="w-full h-full bg-gradient-to-l from-primary/10 via-secondary/10 to-transparent" /> */}
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
                stopColor="#383c93"
                stopOpacity="0.1"
                // className="stop-opacity-[0.3] dark:stop-opacity-[0.08]"
              />
              <stop
                offset="100%"
                stopColor="#43a756"
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
          {/* <path
            fill="url(#full-wave)"
            d="
              M0,290 
              C1000,230 400,360 1700,240
              L3000,220
              C2000,180 2600,50 0,220 
              Z
            "
            repeatCount="indefinite"
          /> */}
        </svg>

        {/* <path
            fill="url(#full-wave)"
            d="
              M0,230 
              C180,200 360,300 790,240 
              C1090,220 1000,320 1840,220 
              C1360,130 1440,200 1940,240 
              L5000,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          /> */}

        {/* 💫 Glowing blobs */}
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-[150px] opacity-50" />
      </div>

      {/* 📌 Hero Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Catalyzing Growth Through <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Cloud Excellence
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          With us, you&apos;re not just a client; you&apos;re a partner in
          success. Let&apos;s elevate your business together.
        </p>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:justify-center">
          <HomeHeroBtn title="Let's Grow" href="/contact-us#contact-form"/>
          <HomeHeroBtn title="Explore" href="#services"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
