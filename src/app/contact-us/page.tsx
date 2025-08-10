"use client";

// import { useEffect, useState } from "react";
import Image from "next/image";

const ContactItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="text-primary w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </div>
  </div>
);

const FormInput = ({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: string;
}) => (
  <div className="relative z-0 w-full group">
    <input
      type={type}
      id={id}
      name={id}
      className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-800 dark:text-white focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-primary"
      placeholder=" "
    />
    <label
      htmlFor={id}
      className="absolute top-3 left-0 z-10 origin-[0] scale-100 transform text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 dark:text-gray-400"
    >
      {label}
    </label>
  </div>
);

const FormTextarea = ({ id, label }: { id: string; label: string }) => (
  <div className="relative z-0 w-full group">
    <textarea
      id={id}
      name={id}
      rows={4}
      className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-3 px-0 text-sm text-gray-800 dark:text-white focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-primary"
      placeholder=" "
    ></textarea>
    <label
      htmlFor={id}
      className="absolute top-3 left-0 z-10 origin-[0] scale-100 transform text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 dark:text-gray-400"
    >
      {label}
    </label>
  </div>
);

const ContactPage = () => {
  // const [theme, setTheme] = useState<string | null>(null);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   setTheme(savedTheme);
  // }, []);

  return (
    <main className="relative z-10 overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Background Gradient Blobs */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-400 opacity-20 rounded-full blur-[200px] top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-400 opacity-20 rounded-full blur-[200px] bottom-[-100px] right-[-100px]" />
      </div> */}

      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
        </div>

      {/* Hero Section */}
      <section className="py-20 relative space-y-12 bg-gray-50 dark:bg-gray-900">
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
        </div> */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="full-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor="#4A6CF7"
                stopOpacity="0.1"
                // className="stop-opacity-[0.3] dark:stop-opacity-[0.08]"
              />
              <stop
                offset="100%"
                stopColor="#A78BFA"
                stopOpacity="0.08"
                // className="stop-opacity-[0.08] dark:stop-opacity-[0.08]"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#full-wave)"
            d="
              M0,280 
              C1000,220 400,350 1700,230
              L3000,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          />
          <path
            fill="url(#full-wave)"
            d="
              M0,280
              C1000,230 400,360 1700,240
              L3000,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          />
          <path
            fill="url(#full-wave)"
            d="
              M0,280
              C1000,240 400,370 1700,250
              L3000,0 
              L0,0 
              Z
            "
            repeatCount="indefinite"
          />
          {/* <path
            fill="url(#full-wave)"
            d="
              M0,290 
              C1000,230 400,360 1700,240
              L3000,220
              C2000,180 2600,50 0,220 
              Z
            "
            repeatCount="indefinite"
          /> */}
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-center md:text-left text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-primary dark:text-blue-400">
              Catch Us in the Cloud!
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              With us, you are not just a client; you&apos;re a partner in
              success. Let&apos;s elevate your business together.
            </p>
          </div>
          <div className="relative w-full h-[350px]">
            <Image
              src="/images/contact/hero-img.svg"
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 items-center">
          <ContactItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30.6 11.8L17.7 3.5C16.65 2.85 15.3 2.85 14.3 3.5L1.4 11.8C0.9 12.15 0.75 12.85 1.05 13.35C1.4 13.85 2.1 14 2.6 13.7L3.45 13.15V25.8C3.45 27.55 4.85 28.95 6.6 28.95H25.4C27.15 28.95 28.55 27.55 28.55 25.8V13.15L29.4 13.7C30.35 14.35 31.15 13.6 30.6 11.8ZM13.35 26.75V18.5C13.35 18 13.75 17.6 14.25 17.6H17.75C18.25 17.6 18.65 18 18.65 18.5V26.75H13.35ZM26.3 25.8C26.3 26.3 25.9 26.7 25.4 26.7H20.9V18.5C20.9 16.8 19.5 15.4 17.8 15.4H14.3C12.6 15.4 11.2 16.8 11.2 18.5V26.75H6.7C6.2 26.75 5.8 26.35 5.8 25.85V11.7L15.5 5.4C15.8 5.2 16.2 5.2 16.5 5.4L26.3 11.7V25.8Z" />
              </svg>
            }
            title="Our Location"
            value="3416, 8 street, nw Edmonton Alberta"
          />
          <ContactItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.3 31.15C22.95 31.15 21.4 30.8 19.7 30.15C16.3 28.8 12.55 26.2 9.2 22.85C5.85 19.5 3.25 15.75 1.9 12.3C0.4 8.6 0.55 5.55 2.3 3.85L6.7 1.2C7.75 0.6 9.1 0.9 9.8 1.9L12.75 6.3C13.45 7.35 13.15 8.75 12.15 9.45L10.35 10.7C11.65 12.8 15.35 17.95 21.25 21.65L22.35 20.05C23.2 18.85 24.55 18.5 25.65 19.25L30.05 22.2C31.05 22.9 31.35 24.25 30.75 25.3L28.25 29.5C28.2 29.6 28.15 29.65 28.1 29.7C27.2 30.65 25.9 31.15 24.3 31.15Z" />
              </svg>
            }
            title="Phone Number"
            value="+1 5875893798"
          />
          <ContactItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28 4.8H4C2.3 4.8 0.85 6.2 0.85 7.95V24.15C0.85 25.85 2.25 27.3 4 27.3H28C29.7 27.3 31.15 25.9 31.15 24.15V7.9C31.15 6.2 29.7 4.8 28 4.8ZM16 14.85L3.85 7.05H28.15L16 14.85ZM28 24.95H4C3.5 24.95 3.1 24.55 3.1 24.05V9.25L14.8 16.75C15.15 17 15.55 17.1 15.95 17.1C16.35 17.1 16.75 17 17.1 16.75L28.8 9.25V24.1C28.9 24.6 28.5 24.95 28 24.95Z" />
              </svg>
            }
            title="Email Address"
            value="connect@protechbyte.com"
          />
        </div>
      </section>

      {/* Form & Contact Section */}
      <section className="py-20" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right side - Image or Illustration */}
            <div className="relative w-full h-[500px]">
              <Image
                src="/images/contact/email-img.svg"
                alt="Get in touch"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-center text-primary dark:text-white mb-6">
                  Drop Us a Line
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
                  Whether you have questions, need technical support, or want to
                  explore our solutions — we&apos;re ready to talk!
                </p>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormInput id="firstName" label="First Name" />
                    <FormInput id="lastName" label="Last Name" />
                    <FormInput id="email" label="Email" type="email" />
                    <FormInput id="phone" label="Phone" type="tel" />
                    <FormInput id="companySize" label="Company Size" />
                    <FormInput id="inquiry" label="Inquiry Type" />
                  </div>
                  <FormTextarea id="details" label="Details / Requirements" />
                  <button className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 rounded-lg shadow transition-all duration-200">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
