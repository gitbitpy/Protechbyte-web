import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";
import whyUsData from "@/data/whyUsData";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const WhyUs = () => {
  const List = ({
    heading,
    description,
  }: {
    heading: string;
    description: string;
  }) => (
    <div className="mb-5 flex flex-col">
      <p className="flex items-center text-lg font-medium text-body-color mb-2">
        {/* <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span> */}
        <span className="text-lg font-bold text-heading-color">{heading}</span>
      </p>
      <p className="text-base text-text-color">{description}</p>
    </div>
  );

  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-dark pt-16 md:pt-20 lg:pt-28"
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap justify-between items-start">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold mx-auto w-full !leading-tight text-heading-color dark:text-white sm:text-4xl md:text-[45px]">
                Why ProtechByte
              </h2>
              <p
                className="text-base !leading-relaxed text-text-color md:text-lg"
                style={{ marginBottom: "44px" }}
              >
                Our mission is to revolutionize the IT landscape for our
                clients, enabling them to achieve unparalleled success through
                technology. We strive to be the trusted advisors, problem
                solvers, and catalysts for growth in an ever evolving digital
                world.
              </p>
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <CardActionBtn title="Know about us" />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto">
                {whyUsData.map((item, index) => (
                  <List
                    key={index}
                    heading={item.heading}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
