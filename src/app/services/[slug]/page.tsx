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
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-400 opacity-20 rounded-full blur-[200px] top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-400 opacity-20 rounded-full blur-[200px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* Section 1 */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-primary dark:text-blue-400">
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
          <div className="relative w-full h-[400px]">
            <Image
              src={serviceDetails.section1.sectionOneImage}
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[400px] order-1 md:order-1">
            <Image
              src={serviceDetails.section2.sectionTwoImage}
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-2 md:order-2 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400">
              {serviceDetails.section2.heading}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {serviceDetails.section2.subHeading1.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {serviceDetails.section2.subHeading1.list.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {serviceDetails.section2.subHeading2.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {serviceDetails.section2.subHeading2.list.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400">
              {serviceDetails.section3.heading}
            </h2>
            <div className="space-y-6">
              {serviceDetails.section3.items.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-[400px]">
             <Image
              src={serviceDetails.section2.sectionTwoImage}
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
