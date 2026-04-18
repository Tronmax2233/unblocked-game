import React from 'react';
import { Mail, MessageSquare, ArrowLeft } from 'lucide-react';

interface ContactProps {
  onClose: () => void;
}

export function Contact({ onClose }: ContactProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-frog-dark/95 backdrop-blur-xl flex items-center justify-center p-6 font-sans text-frog-light selection:bg-frog-main selection:text-black">
      <div className="max-w-xl w-full bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5">
        {/* Header decoration */}
        <div className="h-2 bg-frog-main w-full"></div>
        
        <div className="p-8 md:p-12 space-y-8">
          <header className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-frog-main rounded-2xl flex items-center justify-center text-black">
                <Mail className="w-6 h-6" />
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                aria-label="Close"
              >
                <ArrowLeft className="w-5 h-5 opacity-40 hover:opacity-100" />
              </button>
            </div>
            <h2 className="text-3xl font-display font-black uppercase tracking-tight text-frog-main mt-4">Contact the Pond</h2>
            <p className="text-frog-light/60">Have a game suggestion or found a bug? Reach out to us!</p>
          </header>

          <div className="space-y-6">
            <div className="group bg-frog-dark/50 border border-white/5 p-6 rounded-2xl transition-all hover:border-frog-main/30">
              <label className="text-[10px] uppercase font-black text-frog-light/30 tracking-[0.2em] mb-2 block">Direct Email</label>
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-xl font-mono font-bold text-frog-main">farabi.reyhan@gmail.com</span>
                <a 
                  href="mailto:farabi.reyhan@gmail.com"
                  className="p-2 bg-frog-main/10 text-frog-main rounded-lg hover:bg-frog-main hover:text-black transition-all"
                  title="Send Email"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <footer className="pt-6 border-t border-white/5">
            <button 
              onClick={onClose}
              className="w-full bg-frog-main text-black py-4 rounded-xl font-display font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all"
            >
              Back to Games
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
