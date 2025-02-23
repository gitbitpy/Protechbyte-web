export interface IPrivacyPolicyData {
  title: string;
  content: string[];
}

const privacyPolicyData: IPrivacyPolicyData[] = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal Information: Name, email address, phone number, and business details when you contact us or use our services.",
      "Technical Information: IP address, browser type, device details, and usage data when you visit our website.",
      "Service-Related Information: Any data provided while availing our IT services, such as project details and customer support queries.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To provide, maintain, and improve our IT services.",
      "To communicate with you regarding inquiries, support, and service updates.",
      "To ensure website functionality and enhance user experience.",
      "To comply with legal requirements and protect against fraud.",
    ],
  },
  {
    title: "3. Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we encourage responsible data-sharing practices.",
    ],
  },
  {
    title: "4. Sharing of Information",
    content: [
      "We do not sell or rent your personal data. However, we may share information:",
      "With trusted third-party service providers assisting in delivering our IT services.",
      "When required by law, regulation, or legal process.",
      "To protect the rights, security, and integrity of our business and users.",
    ],
  },
  {
    title: "5. Your Rights and Choices",
    content: [
      "You may request access, correction, or deletion of your personal information.",
      "You can opt-out of marketing communications at any time.",
      "You have the right to restrict data processing under certain circumstances.",
    ],
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies and similar technologies to improve user experience and analyze website traffic. You can manage your cookie preferences through your browser settings.",
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically. Any changes will be posted on our website with the updated effective date.",
    ],
  },
];

export default privacyPolicyData;
