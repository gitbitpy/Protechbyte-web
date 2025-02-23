// import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";
// import { Service } from "@/types/service";

// const SingleService = ({ service }: { service: Service }) => {
//   const { icon, title, paragraph } = service;
//   return (
//     <div className="w-full px-4 sm:px-6 md:px-8">
//       <div className="wow fadeInUp" data-wow-delay=".15s">
//         <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//           {icon}
//         </div>
//         <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//           {title}
//         </h3>
//         <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
//           {paragraph}
//         </p>
//         <CardActionBtn title="Learn More" />
//       </div>
//     </div>
//   );
// };

// export default SingleService;

import CardActionBtn from "@/components/custom-ui-components/cards-action-btn/CardActionBtn";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph, urlLink } = service;
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="h-68 group relative overflow-hidden rounded-lg bg-white dark:bg-dark shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2">
        <div className="p-8">
          {/* Icon Container with Hover Effect */}
          <div className="mb-8 inline-flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>

          {/* Content */}
          <h3 className="mb-4 min-h-20 text-xl font-bold text-dark dark:text-white transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          {/* <div className="relative mb-6 flex-1 overflow-hidden">
            <p className="text-base font-medium leading-relaxed text-body-color h-[120px] overflow-y-auto pr-2">
              {paragraph}
            </p>

            Gradient Fade-Out Effect
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white dark:from-dark to-transparent"></div>
          </div> */}

          {/* Enhanced Button with Hover Effect */}
          <div className="overflow-hidden">
            <CardActionBtn title="Learn More" urlLink={urlLink} />
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
      </div>
    </div>
  );
};

export default SingleService;
