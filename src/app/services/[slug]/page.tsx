import { notFound } from "next/navigation";
import servicesDetailData, { IServicesDetail } from "@/data/servicesDetailData";
import HomeHeroBtn from "@/components/custom-ui-components/home-hero-Button/HomeHeroBtn";
import Image from "next/image";

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
    <div className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-1/2 px-4">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              {serviceDetails?.section1.heading}
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              {serviceDetails?.section1.description}
            </p>
            <div className="flex justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <HomeHeroBtn title="Let's Grow" />
              <HomeHeroBtn title="Explore" />
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap items-center pt-16 md:pt-20 lg:pt-28">
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
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold mx-auto w-full !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              {serviceDetails?.section2.heading}
            </h2>
            <div className="mt-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold !leading-tight text-black dark:text-white">
                  {serviceDetails?.section2.subHeading1.title}
                </h3>
                <ul className="list-disc pl-6 text-black dark:text-white">
                  {serviceDetails?.section2.subHeading1.list.map(
                    (item, index) => (
                      <li key={index} className="text-md">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold !leading-tight text-black dark:text-white">
                  {serviceDetails?.section2.subHeading2.title}
                </h3>
                <ul className="list-disc pl-6 text-black dark:text-white">
                  {serviceDetails?.section2.subHeading2.list.map(
                    (item, index) => (
                      <li key={index} className="text-md">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap items-center pt-16 md:pt-20 lg:pt-28">
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="text-2xl font-semibold mx-auto w-full !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              {serviceDetails?.section3.heading}
            </h2>
            <div className="mt-4">
              {serviceDetails?.section3.items.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {item.heading}
                  </h3>
                  <p className="text-md text-black dark:text-white">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
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
      </div>
    </div>
  );
};

export default ServicePage;
