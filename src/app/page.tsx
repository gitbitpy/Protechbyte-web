import ScrollUp from "@/components/Common/ScrollUp";
import AboutSectionOne from "@/views/About/AboutSectionOne";
import AboutSectionTwo from "@/views/About/AboutSectionTwo";
import OurVision from "@/views/our-vision";
import Blog from "@/views/Blog";
import Brands from "@/views/Brands";
import Contact from "@/views/Contact";
import Services from "@/views/services";
import Hero from "@/views/Hero";
import Pricing from "@/views/Pricing";
import Testimonials from "@/views/Testimonials";
// import Video from "@/views/Video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      {/* <Video /> */}
      <Brands />
      <OurVision />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
