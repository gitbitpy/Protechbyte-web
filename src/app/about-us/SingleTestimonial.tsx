import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="relative group p-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
        {/* Quote Icon */}
        <FaQuoteLeft className="absolute top-6 left-6 text-primary opacity-10 text-6xl" />

        {/* Content */}
        <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed italic z-10 relative mb-6">
          “{content}”
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-6" />

        {/* Profile & Rating */}
        <div className="flex items-center justify-between">
          {/* Author Info */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600 mr-4">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{designation}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: star }).map((_, i) => (
              <span key={i}><StarIcon /></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
