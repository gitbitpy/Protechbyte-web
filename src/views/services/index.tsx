import SingleService from "./SingleService";
import servicesCardData from "@/data/servicesCardData";

const Services = () => {
  return (
    <>
      <section
        id="features"
        className="bg-white dark:bg-gray-dark py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="w-full mx-auto px-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl text-center font-bold mx-auto w-full !leading-tight text-primary dark:text-white sm:text-4xl md:text-[45px]">
              Our Services
            </h2>
            <p
              className="text-base text-center !leading-relaxed text-text-color md:text-lg"
              style={{ marginBottom: "44px" }}
            >
              Our seasoned team of technical support specialists has been
              instrumental in driving the success of businesses like yours for
              many years. With a track record of excellence and enduring client
              relationships, we stand ready to elevate your operations to new
              heights.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesCardData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
