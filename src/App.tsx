/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gamepad2, X, Ghost } from "lucide-react";
import initialGamesData from "./data/games.json";

interface Game {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  description: string;
}

export default function App() {
  // Use a fallback empty array to prevent crashes if import fails
  const [games, setGames] = useState<Game[]>(initialGamesData || []);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  
  // Debug check
  useEffect(() => {
    console.log("App mounted. Games count:", games?.length);
    if (!games || games.length === 0) {
      console.warn("No games data found or loaded.");
    }
  }, [games]);
  return (
    <div className="min-h-screen font-sans bg-frog-dark">
      {/* Navigation */}
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
            <div className="text-[10px] text-frog-light font-bold uppercase tracking-[0.2em] opacity-30">
              v3.0 Secured Pond
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {games.map((game, index) => (
              <GameCard 
                key={game.id} 
                game={game} 
                index={index} 
                onClick={() => setSelectedGame(game)} 
              />
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
            
            <div className="flex-1 relative bg-black">
              <iframe
                src={selectedGame.url}
                className="w-full h-full border-none"
                title={selectedGame.name}
                allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation; screen-wake-lock; gamepad; clipboard-read; clipboard-write;"
                allowFullScreen
              />
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
