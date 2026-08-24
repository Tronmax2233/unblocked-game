import React from 'react';
import { ShieldCheck, Lock, Eye, Cookie, Info, ArrowLeft, Megaphone, Users } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-frog-dark overflow-y-auto custom-scrollbar font-sans text-frog-light selection:bg-frog-main selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-frog-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-frog-main rounded-lg flex items-center justify-center text-black font-black">P</div>
             <h1 className="text-xl font-display font-black uppercase tracking-tight text-frog-main">Privacy Policy</h1>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all border border-white/5 text-xs font-bold uppercase tracking-widest cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Pond
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Introduction</h2>
          </div>
          <p className="leading-relaxed opacity-80">
            Welcome to <strong>Frog Games</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website <strong>unblocked-frog.github.io</strong>. By using our site, you agree to the terms outlined here.
          </p>
          <p className="text-sm opacity-60 italic">Last Updated: April 19, 2026</p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-frog-main">
            <Lock className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Information We Collect</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Eye className="w-4 h-4 text-frog-main" /> Automatic Technical Data</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Like most websites, we collect standard non-personal technical data such as browser type, operating system, device screen resolution, referring URLs, and approximate geographic region to optimize performance and game delivery.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Cookie className="w-4 h-4 text-frog-main" /> Local Storage & Cookies</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                We use browser storage (cookies and local storage) to save your preferences, favorites, high scores, and game progress locally on your device. We do not store sensitive personal information in these cookies.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <Megaphone className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Advertising & Third-Party Ad Networks</h2>
          </div>
          <p className="leading-relaxed opacity-80">
            To keep Frog Games 100% free for all players, we partner with third-party advertising networks to display advertisements throughout the website. These partners may include:
          </p>
          <ul className="list-disc list-inside space-y-2 opacity-80 pl-2">
            <li><strong>Google AdSense & Google Ad Manager:</strong> Serves contextual or personalized ads based on your visits to this and other websites.</li>
            <li><strong>Infolinks:</strong> Provides non-intrusive in-text, banner, and native contextual advertising.</li>
            <li><strong>PropellerAds:</strong> Delivers multi-format ad units, on-click monetization, and banner displays.</li>
            <li><strong>Other Programmatic & Direct Gaming Ad Partners:</strong> Provides interactive video rewards and game-related promotional units.</li>
          </ul>
          <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-2">
            <h3 className="font-bold text-sm text-frog-main">How Ad Networks Use Cookies & Web Beacons</h3>
            <p className="text-sm opacity-75 leading-relaxed">
              These third-party ad servers and ad networks automatically receive your IP address when ad requests occur. They may also use cookies, JavaScript, or Web Beacons to measure the effectiveness of their advertising campaigns and/or personalize the advertising content you see. Frog Games has no direct access to or control over these third-party cookies.
            </p>
            <p className="text-sm opacity-75 leading-relaxed">
              You can opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-frog-main underline hover:opacity-80">Google Ads Settings</a>, <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-frog-main underline hover:opacity-80">AboutAds.info</a>, or <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-frog-main underline hover:opacity-80">Network Advertising Initiative (NAI)</a>.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Children's Privacy (COPPA & GDPR-K)</h2>
          </div>
          <p className="leading-relaxed opacity-80">
            Protecting the privacy of young children is especially important to us. Frog Games is a general audience gaming portal and does not knowingly collect, store, or solicit personally identifiable information (PII) from children under the age of 13 (or under 16 in the European Union).
          </p>
          <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-3">
            <p className="text-sm opacity-75 leading-relaxed">
              All games on our platform are accessible directly in the browser without requiring registration, account creation, real names, email addresses, or phone numbers.
            </p>
            <p className="text-sm opacity-75 leading-relaxed">
              If you are a parent or legal guardian and believe that your child under 13 has provided personal data to us, please contact us immediately. Upon notification, we will promptly investigate and take steps to permanently delete any such information from our records.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">GDPR & EEA Compliance</h2>
          </div>
          <p className="leading-relaxed opacity-80">
            If you are browsing from the European Economic Area (EEA), we comply with GDPR requirements. We use a Google-certified Consent Management Platform to ask for your consent before serving personalized advertisements. You have the right to withdraw your consent at any time via the "Privacy Settings" link in our footer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-frog-main">Third-Party Links & Embedded Content</h2>
          <p className="leading-relaxed opacity-80">
            Our site contains embedded games from various developers and links to external websites. These third-party sites have their own independent privacy policies. We encourage users to review the privacy statements of each external website they visit.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-frog-main">Contact Us</h2>
          <p className="leading-relaxed opacity-80 text-sm">
            If you have questions, feedback, or concerns regarding this Privacy Policy or data protection practices, please reach out to us via our GitHub repository or contact information on the site.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 py-8 px-6 text-center border-t border-white/5">
        <p className="text-[10px] text-frog-light/30 uppercase font-black tracking-[0.5em]">Frog Games • Privacy First</p>
      </footer>
    </div>
  );
}
