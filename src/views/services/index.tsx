import SectionTitle from "@/components/Common/SectionTitle";
import SingleService from "./SingleService";
// import serviceData from "./serviceData";
import servicesCardData from "@/data/servicesCardData";

const Services = () => {
  return (
    <>
      <section
        id="features"
        className="bg-white dark:bg-gray-dark py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="our seasoned team of technical support specialists has been instrumental in driving the success of businesses like yours for many years. With a track record of excellence and enduring client relationships, we stand ready to elevate your operations to new heights."
            center
          />

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
