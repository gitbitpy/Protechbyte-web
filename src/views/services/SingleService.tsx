import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph, urlLink } = service;

  return (
    <div className="group relative h-full w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Icon Bubble */}
      <div className="mb-6 flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm font-light text-gray-800 dark:text-gray-300 leading-relaxed mb-6 min-h-[88px]">
        {paragraph}
      </p>

      {/* CTA Button */}
      <CardActionBtn title="Learn More" urlLink={urlLink} />

      {/* Elegant Border Hover Line */}
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
    </div>
  );
};

export default SingleService;
