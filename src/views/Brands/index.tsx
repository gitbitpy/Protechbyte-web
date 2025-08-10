import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-20 overflow-hidden">
      {/* Soft background gradient strip */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-center text-gray-900 dark:text-white mb-10">
          Certified and Trusted by
          <span className="block h-[4px] mt-3 mx-auto bg-gradient-to-r from-primary to-purple-400 w-24 rounded-full" />
        </h2>

        {/* Logo Container */}
        <div className="flex flex-wrap justify-around gap-10 rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md px-8 py-12 shadow-md">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="relative h-12 w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300 ease-in-out">
      <a href={href} target="_blank" rel="nofollow noreferrer" className="block w-full h-full relative">
        {/* Dark mode logo */}
        <Image
          src={imageLight}
          alt={name}
          fill
          className="hidden dark:block object-contain"
        />
        {/* Light mode logo */}
        <Image
          src={image}
          alt={name}
          fill
          className="block dark:hidden object-contain"
        />
      </a>
    </div>
  );
};
