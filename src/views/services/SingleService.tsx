import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph, urlLink } = service;
  return (
    <div className="h-full w-full group relative overflow-hidden rounded-lg bg-white dark:bg-dark shadow-lg hover:shadow-2xl transition-all duration-300 ease-out service-card">
      <div className="card-border" />
      <div className="p-6 h-full">
        <div className="mb-8 inline-flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-8 text-xl font-semibold text-dark dark:text-white transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <div className="min-h-28 mb-4 flex items-start">
          <p className="text-base font-light leading-relaxed text-body-color overflow-y-auto">
            {paragraph}
          </p>
        </div>

        <CardActionBtn title="Learn More" urlLink={urlLink} />
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
    </div>
  );
};

export default SingleService;
