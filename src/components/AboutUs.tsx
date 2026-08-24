import React from 'react';
import { 
  Info, 
  Target, 
  Gamepad2, 
  ShieldCheck, 
  ArrowLeft, 
  Sparkles, 
  Swords, 
  Compass, 
  Brain, 
  Car, 
  Box, 
  Trophy, 
  Globe2, 
  Zap,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';

interface AboutUsProps {
  onClose: () => void;
}

const CATEGORIES = [
  {
    name: 'Action & Shooting',
    icon: Swords,
    desc: 'Intense fast-paced combat, tactical shooters, stealth infiltrations, and arena brawlers that put your reflexes and aim to the test.'
  },
  {
    name: 'Arcade & Casual',
    icon: Zap,
    desc: 'Quick-to-play, addictive classics and rhythm challenges perfect for stress relief and high-score chasing anytime.'
  },
  {
    name: 'Adventure & RPG',
    icon: Compass,
    desc: 'Rich open worlds, dungeon crawls, survival quests, and pixel journeys where you discover new lore and master abilities.'
  },
  {
    name: 'Strategy',
    icon: Target,
    desc: 'Tactical tower defense, army clash simulations, card battles, and kingdom conquest games that reward smart planning.'
  },
  {
    name: 'Puzzle & Brain Games',
    icon: Brain,
    desc: 'Clever logic puzzles, spatial riddles, sudoku grids, and drawing mechanics designed to sharpen your thinking.'
  },
  {
    name: 'Racing & Vehicles',
    icon: Car,
    desc: 'High-speed highway sprints, extreme mountain climbs, drift challenges, and realistic transport simulators.'
  },
  {
    name: 'Simulator & Sandbox',
    icon: Box,
    desc: 'Voxel worlds, restaurant tycoon management, mining operations, and creative sandboxes where you build without limits.'
  },
  {
    name: 'Sports & Skill',
    icon: Trophy,
    desc: 'Basketball showdowns, car football matches, physics acrobatics, and hilarious two-player physics competitions.'
  },
  {
    name: 'Multiplayer IO Games',
    icon: Globe2,
    desc: 'Live real-time multiplayer arenas, battle royales, and territory conquest games with players from all over the world.'
  }
];

const HIGHLIGHTS = [
  {
    title: 'Zero Downloads',
    desc: 'Play instantly right in your modern web browser with HTML5 and WebGL.'
  },
  {
    title: '100% Free Forever',
    desc: 'No hidden paywalls, subscriptions, or credit card requirements.'
  },
  {
    title: 'Unblocked & Accessible',
    desc: 'Optimized to load quickly on Chromebooks, laptops, and desktop computers.'
  },
  {
    title: 'Curated Quality',
    desc: 'Every game is tested for smooth performance, playability, and high fun factor.'
  }
];

export function AboutUs({ onClose }: AboutUsProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-frog-dark overflow-y-auto custom-scrollbar font-sans text-frog-light selection:bg-frog-main selection:text-black">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-frog-dark/85 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-frog-main rounded-lg flex items-center justify-center text-black font-black text-sm">
              🐸
            </div>
            <h1 className="text-xl font-display font-black uppercase tracking-tight text-frog-main">
              About Frog Games
            </h1>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-all border border-white/5 text-xs font-bold uppercase tracking-widest cursor-pointer text-frog-light hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Pond
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Welcome Hero Banner */}
        <section className="bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-frog-main/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-frog-main bg-frog-main/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Welcome to Our Pond
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white">
              Instant Gaming Fun, Anytime & Anywhere
            </h2>
            <p className="text-base md:text-lg text-frog-light/90 leading-relaxed max-w-2xl">
              Frog Games is your go-to destination for high-quality, free unblocked web games. Dive in and start playing in seconds!
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-white">
              Who We Are
            </h2>
          </div>
          <p className="leading-relaxed opacity-85 text-base">
            Frog Games is a free unblocked gaming platform built for players of all ages. We believe great games should be easily accessible to everyone without technical barriers. On Frog Games, you can explore and enjoy hundreds of popular web games directly in your browser—with no downloads, no software installations, and no account registrations required.
          </p>
          <p className="leading-relaxed opacity-85 text-base">
            Whether you are on a school Chromebook, office laptop, or home desktop, our lightweight and responsive interface ensures rapid loading and seamless gameplay across all your favorite genres.
          </p>

          {/* Quick Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {HIGHLIGHTS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-start gap-3.5"
              >
                <div className="p-2 bg-frog-main/10 text-frog-main rounded-xl shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-frog-light/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <Target className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-white">
              Our Mission
            </h2>
          </div>
          <p className="leading-relaxed opacity-85 text-base">
            Our mission is simple: <strong>to provide a safe, fun, and universally accessible gaming experience for everyone.</strong>
          </p>
          <div className="bg-white/5 border border-white/5 p-6 rounded-2xl space-y-3">
            <p className="text-sm opacity-80 leading-relaxed">
              Every single game featured in the Frog Games catalog is 100% free to play. We take pride in carefully testing and hand-picking each title to ensure high standards of entertainment, reliable performance, smooth frame rates, and engaging mechanics.
            </p>
            <p className="text-sm opacity-80 leading-relaxed">
              We strive to create a digital playground where students, casual gamers, and gaming enthusiasts alike can unwind, challenge their friends, test their reflexes, or discover new adventures during study breaks or leisure hours.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-frog-main">
            <Gamepad2 className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-white">
              What We Offer
            </h2>
          </div>
          <p className="leading-relaxed opacity-85 text-base">
            Our curated library spans a rich variety of hand-picked game categories tailored for every playstyle, mood, and skill level:
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {CATEGORIES.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/5 hover:border-frog-main/30 p-5 rounded-2xl space-y-2.5 transition-all duration-200"
                >
                  <div className="w-9 h-9 bg-frog-main/10 text-frog-main rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-white">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-frog-light/70 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Commitment */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-frog-main">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-white">
              Our Commitment
            </h2>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 md:p-8 rounded-2xl space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-frog-main/10 text-frog-main rounded-2xl shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Clean, Safe & Player-First Environment</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Frog Games is firmly committed to maintaining a clean, secure, and ad-friendly environment. We avoid intrusive, deceptive, or malicious scripts so our users can play with complete peace of mind.
                </p>
                <p className="text-sm opacity-80 leading-relaxed">
                  We actively review and update our catalog to bring the newest releases, trending favorites, and top community suggestions to our library on a regular basis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-white/5 text-center space-y-4">
          <p className="text-sm text-frog-light/70">
            Ready to jump in? Explore our pond and find your next favorite game!
          </p>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-frog-main text-black px-8 py-3.5 rounded-xl font-display font-black uppercase text-xs tracking-widest hover:shadow-[0_0_25px_rgba(163,230,53,0.35)] transition-all cursor-pointer"
          >
            <Gamepad2 className="w-4 h-4" /> Start Playing Now
          </button>
        </div>
      </main>
    </div>
  );
}
