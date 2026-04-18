import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-frog-dark/95 backdrop-blur-md overflow-y-auto pt-20 pb-10 px-6">
      <div className="max-w-3xl mx-auto bg-surface border border-border/50 rounded-2xl p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full transition-colors text-frog-light"
        >
          <X className="w-6 h-6" />
        </button>

        <article className="prose prose-invert prose-frog max-w-none">
          <h1 className="text-3xl font-display font-black text-frog-main uppercase italic mb-8">Privacy Policy</h1>
          
          <p className="text-frog-light/80">Last Updated: April 2026</p>
          
          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p className="text-frog-light/70 text-sm leading-relaxed">
              Welcome to Unblocked Frog. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
            </p>

            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p className="text-frog-light/70 text-sm leading-relaxed">
              We do not require users to create accounts. However, we may collect non-personal information such as browser type, device information, and usage statistics to improve our services.
            </p>

            <h2 className="text-xl font-bold text-white">3. Google AdSense and Cookies</h2>
            <p className="text-frog-light/70 text-sm leading-relaxed font-medium">
              We use Google AdSense to serve advertisements. Google uses cookies to serve ads based on a user's prior visits to our website or other websites.
            </p>
            <ul className="list-disc pl-5 text-frog-light/70 text-sm space-y-2">
              <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-frog-main hover:underline">Google Ad Settings</a>.</li>
            </ul>

            <h2 className="text-xl font-bold text-white">4. Third-Party Games</h2>
            <p className="text-frog-light/70 text-sm leading-relaxed">
              Our website hosts games from third-party providers. These providers may collect data according to their own privacy policies. We encourage you to review those policies as well.
            </p>

            <h2 className="text-xl font-bold text-white">5. Children's Privacy</h2>
            <p className="text-frog-light/70 text-sm leading-relaxed">
              Unblocked Frog does not knowingly collect any personal identifiable information from children under the age of 13. If a parent or guardian believes that we have such information, please contact us immediately.
            </p>

            <h2 className="text-xl font-bold text-white">6. Consent</h2>
            <p className="text-frog-light/70 text-sm leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
        </article>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={onClose}
            className="bg-frog-main text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
