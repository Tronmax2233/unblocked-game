/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gamepad2, X, Ghost, Play, ShieldAlert } from "lucide-react";
import { AdSense } from "./components/AdSense";
import initialGamesData from "./data/games.json";

interface Game {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  description: string;
}

// Variations for Panic Mode Disguise
function PanicModeWikipedia() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <header className="border-b-2 border-slate-200 pb-4 mb-8">
        <h1 className="text-4xl font-serif">Institutional Resource Portal</h1>
        <p className="text-sm text-slate-500 mt-2 italic flex items-center gap-2">
          <ShieldAlert className="w-3 h-3" /> Educational Access Validated • April 2026
        </p>
      </header>
      <div className="flex gap-8">
        <aside className="hidden md:block w-48 shrink-0 space-y-4 text-sm text-[#0645ad] border-r border-slate-100 pr-6">
          <p className="font-bold text-black border-b border-slate-100 pb-1 uppercase text-[10px] tracking-wider">Site Navigation</p>
          <p className="hover:underline cursor-pointer">Curriculum Overview</p>
          <p className="hover:underline cursor-pointer">Faculty Research</p>
        </aside>
        <main className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2">Analysis of Advanced Pedagogy</h2>
          <p className="leading-relaxed"> computational logic in secondary education environments provides a framework for students to engage with complex problem-solving metrics.</p>
        </main>
      </div>
    </div>
  );
}

function PanicModeExcel() {
  return (
    <div className="h-full bg-[#f3f2f1] font-sans text-[11px] overflow-hidden flex flex-col">
      <div className="bg-[#107c41] h-8 flex items-center px-4 text-white font-bold gap-4">
        <span>File</span><span>Home</span><span>Insert</span><span>Draw</span><span>Page Layout</span>
      </div>
      <div className="bg-white border-b border-slate-200 h-20 flex p-3 gap-8">
        <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 bg-slate-100 rounded"></div>Paste</div>
        <div className="w-[1px] bg-slate-200 h-full"></div>
        <div className="flex flex-col gap-2">
          <div className="w-32 h-6 bg-slate-100 rounded"></div>
          <div className="w-24 h-4 bg-slate-50 rounded"></div>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-[#e1dfdd] p-[1px]">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="w-10 bg-[#f3f2f1] border border-slate-300"></th>
              {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(c => (
                <th key={c} className="w-32 bg-[#f3f2f1] border border-slate-300 font-normal">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(r => (
              <tr key={r}>
                <td className="bg-[#f3f2f1] border border-slate-300 text-center">{r}</td>
                <td className="border border-slate-200 p-1">{r === 1 ? 'Project Data: Q2' : Math.random().toFixed(4)}</td>
                <td className="border border-slate-200 p-1">{Math.floor(Math.random() * 1000)}</td>
                <td className="border border-slate-200 p-1">{r === 2 ? '=SUM(B2:D2)' : ''}</td>
                <td className="border border-slate-200 p-1"></td><td className="border border-slate-200 p-1"></td><td className="border border-slate-200 p-1"></td>
                <td className="border border-slate-200 p-1"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PanicModeCode() {
  return (
    <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm p-6 space-y-4">
      <div className="flex gap-4 text-xs text-slate-500 border-b border-slate-800 pb-2 mb-4">
        <span className="text-blue-400">src/main.rs</span>
        <span>Cargo.toml</span>
        <span>README.md</span>
      </div>
      <div className="space-y-1">
        <p><span className="text-purple-400">use</span> std::collections::HashMap;</p>
        <p><span className="text-purple-400">use</span> tokio::sync::mpsc;</p>
        <p><br /></p>
        <p><span className="text-blue-400">#[tokio::main]</span></p>
        <p><span className="text-purple-400">async fn</span> <span className="text-yellow-200">main</span>() {'{'}</p>
        <p className="pl-4">    <span className="text-purple-400">let</span> (tx, <span className="text-purple-400">mut</span> rx) = mpsc::<span className="text-yellow-200">channel</span>(32);</p>
        <p className="pl-4">    <span className="text-purple-400">let</span> <span className="text-purple-400">mut</span> state = HashMap::<span className="text-yellow-200">new</span>();</p>
        <p><br /></p>
        <p className="pl-4">    <span className="text-slate-500">// Initialize cluster validation protocol</span></p>
        <p className="pl-4">    tokio::<span className="text-yellow-200">spawn</span>(<span className="text-purple-400">async move</span> {'{'}</p>
        <p className="pl-8">        <span className="text-purple-400">while let</span> <span className="text-yellow-200">Some</span>(msg) = rx.<span className="text-yellow-200">recv</span>().<span className="text-purple-400">await</span> {'{'}</p>
        <p className="pl-12">            <span className="text-yellow-200">println!</span>(<span className="text-green-300">"Received signal: {'{:?}'}"</span>, msg);</p>
        <p className="pl-8">        {'}'}</p>
        <p className="pl-4">    {'}'});</p>
        <p>{'}'}</p>
      </div>
    </div>
  );
}

function PanicModeDisguise({ onExit }: { onExit: () => void }) {
  const [variant] = useState(() => Math.floor(Math.random() * 3));
  
  return (
    <div className="fixed inset-0 z-[100] bg-white text-black overflow-hidden selection:bg-[#3399ff] selection:text-white">
      {variant === 0 && <PanicModeWikipedia />}
      {variant === 1 && <PanicModeExcel />}
      {variant === 2 && <PanicModeCode />}
      
      <button 
        onClick={onExit}
        className={`fixed bottom-2 right-2 text-[6px] transition-colors ${variant === 2 ? 'text-white/5 hover:text-white/50' : 'text-black/5 hover:text-black/50'}`}
      >
        exit_disguise
      </button>
    </div>
  );
}

export default function App() {
  // Use a fallback empty array to prevent crashes if import fails
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [isPanicActive, setIsPanicActive] = useState(false);
  const [isGameLoading, setIsGameLoading] = useState(false);

  // Randomize games on mount
  useEffect(() => {
    const shuffleArray = (array: Game[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    setGames(shuffleArray(initialGamesData || []));
  }, []);
  
  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    setShowInterstitial(true);
    setIsGameLoading(true);
  };

  // Panic Mode Shortcut (Alt + P / Cmd + P)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Support Alt (Option on Mac) + P OR Command (Mac) + P
      if ((e.altKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setIsPanicActive(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Debug check
  useEffect(() => {
    console.log("App mounted. Games count:", games?.length);
    if (!games || games.length === 0) {
      console.warn("No games data found or loaded.");
    }
  }, [games]);
  return (
    <div className="min-h-screen font-sans bg-frog-dark">
      {/* Panic Mode Overlay */}
      <AnimatePresence>
        {isPanicActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-[100]"
          >
            <PanicModeDisguise onExit={() => setIsPanicActive(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation - Sticky Logo Only */}
      <nav className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-border px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setSelectedGame(null)}
          >
            <div className="w-9 h-9 bg-frog-main rounded-xl flex items-center justify-center text-black font-black text-xl group-hover:rotate-12 transition-transform">
              F
            </div>
            <h1 className="text-2xl font-display font-extrabold tracking-tighter text-frog-main uppercase group-hover:scale-105 transition-transform">
              Unblocked <span className="text-[#f1f5f9]">Frog</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xl font-black text-frog-main uppercase tracking-tighter animate-pulse">Panic Mode Active</span>
              <span className="text-sm text-frog-light opacity-90 uppercase font-bold">Press Alt+P or Cmd+P to hide</span>
            </div>
            <div className="h-6 w-[1px] bg-border mx-2 hidden sm:block"></div>
            <div className="text-[10px] text-frog-light font-bold uppercase tracking-[0.2em] opacity-30">
              v3.0 Secured Pond
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 overflow-hidden flex justify-center w-full"
          >
             <div className="w-full max-w-[728px] p-2 bg-surface/20 rounded-xl border border-border/30">
                <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXX" style={{ width: '100%', minHeight: '90px' }} />
             </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter"
          >
            THE CURATED<br />
            <span className="text-frog-main uppercase italic">GAMING POND.</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-frog-light text-lg md:text-xl">
             Explore our hand-picked collection of unblocked classics. Ribbiting fun for everyone.
          </p>
        </div>
      </header>

      {/* Games Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-frog-main" />
            <h3 className="text-2xl font-display font-bold">Recommended</h3>
          </div>
          <p className="text-sm text-frog-light">{games.length} games active</p>
        </div>

        {games.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
            {games.map((game, index) => (
              <React.Fragment key={game.id}>
                <GameCard 
                  game={game} 
                  index={index} 
                  onClick={() => handleGameSelect(game)} 
                />
                {/* Insert an ad every 4 games */}
                {(index + 1) % 4 === 0 && index !== games.length - 1 && (
                  <div className="sm:col-span-2 flex items-center justify-center bento-card bg-surface/30 p-4 overflow-hidden min-h-[250px]">
                     <div className="w-full flex items-center justify-center">
                        <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXX" style={{ width: '100%', height: '180px' }} />
                     </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bento-card p-12">
            <div className="p-6 bg-frog-main/5 rounded-full">
              <Ghost className="w-12 h-12 text-frog-light/30" />
            </div>
            <h4 className="text-xl font-bold">No Games Found</h4>
            <p className="text-frog-light mb-6 text-sm">Our frogs couldn't find what you're looking for.</p>
          </div>
        )}

        <div className="mt-20 pt-10 border-t border-border/30 flex flex-col items-center w-full overflow-hidden">
          <div className="w-full max-w-4xl">
            <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXX" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-frog-light">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐸</span>
            <span>© 2026 Unblocked Frog Curated.</span>
          </div>
          <div className="flex gap-6">
            <FooterLink label="Privacy Policy" />
            <FooterLink label="Terms of Service" />
            <FooterLink label="Contact Pond" />
          </div>
        </div>
      </footer>

      {/* Game Iframe Overlay */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          >
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-frog-main rounded-lg">
                  <Gamepad2 className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg leading-tight">{selectedGame.name}</h4>
                  <p className="text-xs text-frog-light">Playing Unblocked</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedGame(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                aria-label="Close game"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row relative bg-black overflow-hidden">
              {/* Sidebar Ad (Visible on Desktop) */}
              <div className="hidden lg:flex w-[160px] shrink-0 bg-surface/10 border-r border-white/5 flex-col items-center py-4">
                <p className="text-[9px] text-white/20 uppercase font-black mb-4 vertical-text">Advertisement</p>
                <div className="w-[120px]">
                  <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXX" style={{ width: '120px', height: '600px', display: 'block' }} />
                </div>
              </div>

              <div className="flex-1 relative">
                {showInterstitial ? (
                  <div className="absolute inset-0 z-10 bg-[#0a0c10] flex flex-col items-center justify-center p-8">
                    <div className="max-w-xl w-full text-center space-y-8">
                      <div className="space-y-2">
                        <h5 className="text-2xl font-display font-bold text-frog-main">PREPARING YOUR POND...</h5>
                        <p className="text-frog-light text-sm italic">Ad supports our free gaming curation</p>
                      </div>
                      
                      <div className="bg-frog-dark border border-white/5 rounded-2xl p-4 min-h-[300px] flex flex-col items-center justify-center">
                        <p className="text-[9px] text-white/20 uppercase font-black mb-4 tracking-tighter">Advertisement</p>
                        <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXX" style={{ width: '100%', minHeight: '250px' }} />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowInterstitial(false)}
                        className="group flex items-center gap-3 bg-frog-main text-black px-8 py-4 rounded-xl font-display font-black text-xl hover:shadow-[0_0_20px_rgba(101,255,143,0.3)] transition-all mx-auto"
                      >
                        <Play className="w-5 h-5 fill-current" /> SKIP AD & PLAY
                      </motion.button>
                      
                      <div className="flex items-center justify-center gap-2 text-[10px] text-frog-light/40 uppercase font-bold">
                        <ShieldAlert className="w-3 h-3" /> Secure Connection Active
                      </div>
                    </div>
                  </div>
                ) : null}

                <iframe
                  src={selectedGame.url}
                  onLoad={() => setIsGameLoading(false)}
                  className={`w-full h-full border-none transition-opacity duration-500 ${isGameLoading ? 'opacity-0' : 'opacity-100'}`}
                  title={selectedGame.name}
                  allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation; screen-wake-lock; gamepad; clipboard-read; clipboard-write;"
                  allowFullScreen
                />

                {/* Ribbit Loading Overlay */}
                <AnimatePresence>
                  {isGameLoading && !showInterstitial && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-[#0a0c10] flex flex-col items-center justify-center p-8"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{ 
                            y: [0, -40, 0],
                            scaleX: [1, 0.8, 1.2, 1],
                            scaleY: [1, 1.2, 0.8, 1]
                          }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="text-6xl mb-6 select-none"
                        >
                          🐸
                        </motion.div>
                        <motion.div 
                          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.1, 0.2] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-3 bg-frog-main rounded-[100%] blur-md"
                        />
                      </div>
                      <div className="mt-8 space-y-4 text-center">
                        <h5 className="text-xl font-display font-black text-frog-main tracking-widest animate-pulse">RIBBITING...</h5>
                        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-frog-main"
                          />
                        </div>
                        <p className="text-[10px] text-frog-light uppercase font-bold tracking-[0.3em] opacity-40">Loading Game World</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom/Right Ad (Responsive) */}
              <div className="h-[90px] lg:h-full lg:w-[160px] bg-surface/10 border-t lg:border-t-0 lg:border-l border-white/5 flex lg:flex-col items-center justify-center p-2">
                 <div className="w-full lg:w-[120px] h-full flex items-center justify-center">
                    <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXX" style={{ width: '100%', height: '100%' }} />
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
  key?: string;
}

function GameCard({ game, index, onClick }: GameCardProps) {
  const isLarge = index === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={`group relative bento-card overflow-hidden cursor-pointer hover:border-frog-main/50 transition-all duration-500 flex flex-col ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className={`overflow-hidden relative bg-[#1c1f26] ${isLarge ? 'flex-1' : 'aspect-[16/10]'}`}>
        <img
          src={game.thumbnail}
          alt={game.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${game.id}/400/300?blur=5`;
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
           <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-2 bg-frog-main text-black px-3 py-1 rounded-full text-[10px] font-bold font-display w-fit">
            <Gamepad2 className="w-3 h-3" /> LAUNCH GAME
          </div>
        </div>
      </div>
      <div className="p-4 bg-surface">
        <h4 className="text-base font-display font-bold group-hover:text-frog-main transition-colors truncate">
          {game.name}
        </h4>
        <p className="text-[12px] text-frog-light line-clamp-1 mt-1 font-medium italic">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="text-xs text-frog-light/40 hover:text-frog-accent transition-colors">
      {label}
    </a>
  );
}
