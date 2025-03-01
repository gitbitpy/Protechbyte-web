import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-bg-color pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] min-h-screen"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Catalyzing Growth Through Cloud Excellence
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-text-color sm:text-lg md:text-xl">
                  With us, you're not just a client; you're a partner in
                  success. Let&apos;s elevate your business together.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <HomeHeroBtn title="Let's Grow" />
                  <HomeHeroBtn title="Explore" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute w-full left-0 top-0 z-[-1] opacity-50">
          <img
            src="/home-hero-image2.svg"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
          <Image
            src="/home-hero-image2.svg"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div> */}

        <div
          className="absolute w-full left-0 top-0 z-[-1] opacity-50"
          style={{
            backgroundImage: 'url("/home-hero-image2.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100%",
          }}
        />
      </section>
    </>
  );
};

export default Hero;
