import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";
import whyUsData from "@/data/whyUsData";

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
        <span className="text-lg font-bold text-secondary">{heading}</span>
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
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap justify-between items-start">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold mx-auto w-full !leading-tight text-primary dark:text-white sm:text-4xl md:text-[45px]">
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
