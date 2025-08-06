"use client";

import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gray-50 dark:bg-gray-900 py-24 overflow-hidden"
    >
      {/* Horizontal gradient background strip */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div> */}

      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block mb-4">
            Let&apos;s CONNECT
            <span className="block h-[6px] mt-2 mx-auto bg-gradient-to-r from-primary to-purple-400 w-24 rounded-full"></span>
          </h2>
          <p className="text-base font-normal text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Reach out and let us help YOU build scalable, cloud-first solutions
            with Protechbyte. Whether it&apos;s infrastructure, DevOps, or transformation —
            we&apos;re ready to collaborate.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Phone */}
          <div className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md p-10 shadow-xl transition hover:shadow-2xl hover:scale-[1.02] hover:border-blue-500/30">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-full shadow-lg">
                <GiRotaryPhone className="text-3xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Phone</h4>
              <p className="text-gray-600 dark:text-gray-300">+92-339-0111106</p>
            </div>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md p-10 shadow-xl transition hover:shadow-2xl hover:scale-[1.02] hover:border-purple-500/30">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-500 text-white rounded-full shadow-lg">
                <MdEmail className="text-3xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">connect@protechbyte.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
