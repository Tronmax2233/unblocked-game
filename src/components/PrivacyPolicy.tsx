import React from 'react';
import { ShieldCheck, Lock, Eye, Cookie, Info, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-frog-dark overflow-y-auto font-sans text-frog-light selection:bg-frog-main selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-frog-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-frog-main rounded-lg flex items-center justify-center text-black font-black">P</div>
             <h1 className="text-xl font-display font-black uppercase tracking-tight text-frog-main">Privacy Policy</h1>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all border border-white/5 text-xs font-bold uppercase tracking-widest"
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
            Welcome to <strong>Unblocked Frog</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website <strong>unblocked-frog.github.io</strong>. By using our site, you agree to the terms outlined here.
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
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Eye className="w-4 h-4 text-frog-main" /> Automatic Data</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Like most websites, we collect basic technical data such as your IP address, browser type, and duration of visit to improve your gaming experience.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Cookie className="w-4 h-4 text-frog-main" /> Cookies</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                We use cookies to save your preferences and game progress localy. We do not store sensitive personal information in these cookies.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Google AdSense & DoubleClick</h2>
          </div>
          <p className="leading-relaxed opacity-80">
            As a third-party vendor, Google uses cookies to serve ads on our site. Google's use of the advertising cookie enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
          </p>
          <ul className="list-disc list-inside space-y-2 opacity-70 text-sm ml-4">
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-frog-main underline">Ads Settings</a>.</li>
              <li>You can also opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" className="text-frog-main underline">www.aboutads.info</a>.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <Cookie className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">GDPR & EEA Compliance</h2>
          </div>
          <p className="leading-relaxed opacity-80">
            If you are browsing from the European Economic Area (EEA), we comply with GDPR requirements. We use a Google-certified Consent Management Platform to ask for your consent before serving personalized advertisements. You have the right to withdraw your consent at any time via the "Privacy Settings" link in our footer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-frog-main">Third-Party Links</h2>
          <p className="leading-relaxed opacity-80">
            Our site contains games from various developers. These third-party sites have their own privacy policies. We are not responsible for the content or activities of these linked sites.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-frog-main">Contact Us</h2>
          <p className="leading-relaxed opacity-80 text-sm">
            If you have questions regarding this Privacy Policy, please reach out to us via our GitHub repository or the contact information provided on the main page.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 py-8 px-6 text-center border-t border-white/5">
        <p className="text-[10px] text-frog-light/30 uppercase font-black tracking-[0.5em]">Unblocked Frog • Privacy First</p>
      </footer>
    </div>
  );
}
