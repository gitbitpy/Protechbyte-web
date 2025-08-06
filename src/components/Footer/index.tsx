"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white dark:bg-gray-900 pt-24 pb-12 overflow-hidden">
      {/* Soft top wave shape */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <svg
          className="w-full h-20 md:h-28 text-white dark:text-gray-900"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,181.3C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96V0H0Z" />
        </svg>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-[#4A6CF7]/10 via-[#A78BFA]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* Brand Column */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/Protechbyte-Main-Logo.svg"
                alt="Protechbyte Logo"
                width={160}
                height={40}
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Empowering Businesses, Elevating Cloud Solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "facebook", href: "#" },
                { icon: "linkedin", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "instagram", href: "#" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-gray-500 hover:text-primary transition"
                  aria-label={item.icon}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <use href={`/icons/social.svg#${item.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8 sm:w-1/2 lg:w-2/3 lg:grid-cols-3">
            {[
              {
                title: "Useful Links",
                links: [
                  { href: "/blog", label: "Blog" },
                  { href: "/", label: "Pricing" },
                  { href: "/about-us", label: "About" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { href: "/", label: "TOS" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/", label: "Refund Policy" },
                ],
              },
              {
                title: "Support",
                links: [
                  { href: "/contact-us", label: "Open Support Ticket" },
                  { href: "/", label: "Terms of Use" },
                  { href: "/about-us", label: "About" },
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="hover:text-primary text-gray-600 dark:text-gray-400 transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent dark:via-white/10"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} PROTECHBYTE. All rights reserved.</p>
          <Link href="/privacy-policy" className="mt-2 sm:mt-0 hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
