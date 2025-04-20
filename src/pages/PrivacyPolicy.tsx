import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-secondary text-white">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-xl text-seccondary mb-4">Last updated: Jul 12, 2024</p>

      <section>
        <h2 className="text-3xl text-primary font-bold mb-4">1. Introduction</h2>
        <p className="text-xl">Zeltrix AI ("we", "our", or "us") is committed to protecting the privacy of our clients and users. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our AI Consulting & Development services, visit our website, or interact with us in any way.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">2. Information We Collect</h2>
        <p className="text-xl">We collect the following types of personal information:</p>
        <ul className="list-disc list-inside text-xl">
          <li>Name</li>
          <li>Email address</li>
          <li>Physical address</li>
          <li>Phone number</li>
          <li>Payment information</li>
        </ul>
        <p className="text-xl">We collect this information through:</p>
        <ul className="list-disc list-inside text-xl">
          <li>Website forms</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">3. Use of Cookies</h2>
        <p className="text-xl">We use cookies and similar tracking technologies on our website. Cookies are small data files that are placed on your device when you visit our website. They help us improve your experience and understand how you interact with our services.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">4. Use of Personal Information</h2>
        <p className="text-xl">We use your personal information for the following purposes:</p>
        <ul className="list-disc list-inside text-xl">
          <li>To provide and improve our AI Consulting & Development services</li>
          <li>To process payments</li>
          <li>To communicate with you about our services</li>
          <li>To send marketing communications via email and occasional SMS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">5. Sharing of Personal Information</h2>
        <p className="text-xl">We do not sell your personal information to third parties. We may share your information with service providers who help us operate our business and deliver services to you. All our service providers are GDPR compliant.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">6. Financial Information</h2>
        <p className="text-xl">When you make a payment for our services, we collect financial information. This information is processed securely through Stripe, our payment processor.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">7. Data Security</h2>
        <p className="text-xl">We follow best cybersecurity practices and ensure that all apps we use are GDPR compliant to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">8. International Data Transfers</h2>
        <p className="text-xl">As we operate internationally from our base in Vancouver, Canada, your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">9. Data Retention</h2>
        <p className="text-xl">We retain your personal information for up to 9 years after our last interaction or the end of our business relationship, unless a longer retention period is required by law.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">10. Your Rights</h2>
        <p className="text-xl">You have the right to:</p>
        <ul className="list-disc list-inside text-xl">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
        <p className="text-xl">To exercise these rights or for any privacy-related concerns, please contact us at zeltrix.ai@gmail.com</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">11. Marketing Communications</h2>
        <p className="text-xl">We may send you marketing communications via email or SMS. Every marketing message will include an unsubscribe option, allowing you to opt-out of future communications.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">12. Changes to This Policy</h2>
        <p className="text-xl">We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
      </section>

      <section>
        <h2 className="text-3xl text-primary  font-bold mb-4">13. Contact Us</h2>
        <p className="text-xl">If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="text-xl">Zeltrix AI</p>
        <p className="text-xl">Email: zeltrix.ai@gmail.com</p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
