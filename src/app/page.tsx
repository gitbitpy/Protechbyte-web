import ScrollUp from "@/components/Common/ScrollUp";
import OurVision from "@/views/our-vision";
import Brands from "@/views/Brands";
import Contact from "@/views/Contact";
import Services from "@/views/services";
import Hero from "@/views/Hero";
import WhyUs from "@/views/why-us";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Services />
      <OurVision />
      <WhyUs />
      <Contact />
    </>
  );
}
