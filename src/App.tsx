/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gamepad2, Search, X, Maximize2, Ghost, Trophy, Star, Plus, Trash2, Settings, LogIn, ShieldCheck } from "lucide-react";
import initialGamesData from "./data/games.json";

interface Game {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  description: string;
}

const ADMIN_EMAIL = "farabi.reyhan@gmail.com";

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  
  // Admin States
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [newGame, setNewGame] = useState<Partial<Game>>({
    name: "",
    url: "",
    thumbnail: "",
    description: ""
  });

  // Load games from Local Storage or fallback to JSON
  useEffect(() => {
    const savedGames = localStorage.getItem("unblocked_frog_games");
    if (savedGames) {
      setGames(JSON.parse(savedGames));
    } else {
      setGames(initialGamesData);
    }

    // Auto-login admin if email matches (simulated for demo)
    const savedAdmin = localStorage.getItem("frog_admin_active");
    if (savedAdmin === "true") {
      setIsAdmin(true);
    }
  }, []);

  // Save games to Local Storage whenever games state changes
  useEffect(() => {
    if (games.length > 0) {
      localStorage.setItem("unblocked_frog_games", JSON.stringify(games));
    }
  }, [games]);

  useEffect(() => {
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [searchQuery, games]);

  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGame.name || !newGame.url) return;

    const gameToAdd: Game = {
      id: Date.now().toString(),
      name: newGame.name!,
      url: newGame.url!,
      thumbnail: newGame.thumbnail || `https://picsum.photos/seed/${newGame.name}/300/200`,
      description: newGame.description || "A ribbiting game added by admin."
    };

    const updatedGames = [...games, gameToAdd];
    setGames(updatedGames);
    localStorage.setItem("unblocked_frog_games", JSON.stringify(updatedGames));
    
    setNewGame({ name: "", url: "", thumbnail: "", description: "" });
    setShowAdminModal(false);
  };

  const handleDeleteGame = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this game?")) return;
    const updatedGames = games.filter(g => g.id !== id);
    setGames(updatedGames);
    localStorage.setItem("unblocked_frog_games", JSON.stringify(updatedGames));
  };

  const toggleAdmin = () => {
    const nextState = !isAdmin;
    setIsAdmin(nextState);
    localStorage.setItem("frog_admin_active", nextState.toString());
  };

  return (
    <div className="min-h-screen font-sans bg-frog-dark">
      {/* Admin Quick Toggle (for user testing) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
         {isAdmin && (
           <motion.button
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             onClick={() => setShowAdminModal(true)}
             className="w-12 h-12 bg-frog-main rounded-full flex items-center justify-center text-black shadow-lg hover:rotate-90 transition-transform"
           >
             <Plus className="w-6 h-6" />
           </motion.button>
         )}
         <button 
           onClick={toggleAdmin}
           className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
             isAdmin 
             ? "bg-frog-main/20 border-frog-main text-frog-main" 
             : "bg-white/5 border-white/10 text-white/40 hover:text-white"
           }`}
         >
           {isAdmin ? "Admin Active" : "Admin Portal"}
         </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setSelectedGame(null)}
          >
            <div className="w-8 h-8 bg-frog-main rounded-lg flex items-center justify-center text-black font-black text-lg group-hover:rotate-12 transition-transform">
              F
            </div>
            <h1 className="text-2xl font-display font-extrabold tracking-tighter text-frog-main uppercase group-hover:scale-105 transition-transform">
              Unblocked <span className="text-[#f1f5f9]">Frog</span>
            </h1>
          </div>

          <div className="relative w-full md:w-96 text-center">
            {isAdmin && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[9px] font-black text-frog-main uppercase">
                <ShieldCheck className="w-2.5 h-2.5" /> Logged as {ADMIN_EMAIL}
              </div>
            )}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-frog-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-border rounded-full py-2 pl-10 pr-4 text-[#f1f5f9] placeholder:text-frog-light outline-none focus:ring-1 focus:ring-frog-main focus:border-frog-main transition-all text-sm"
            />
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-frog-light">
            <span className="hover:text-frog-main cursor-pointer">Hot</span>
            <span className="hover:text-frog-main cursor-pointer">New</span>
            <span className="hover:text-frog-main cursor-pointer">Retro</span>
            <span className="hover:text-frog-main cursor-pointer">Action</span>
            {isAdmin && (
              <button 
                onClick={() => setShowAdminModal(true)}
                className="flex items-center gap-2 bg-frog-main/10 text-frog-main border border-frog-main/20 px-3 py-1 rounded-md text-xs hover:bg-frog-main/20 transition-colors"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
            )}
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
            THE POND OF<br />
            <span className="text-frog-main uppercase italic">YOUR OWN GAMES.</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-frog-light text-lg md:text-xl">
             You are the Admin. Every game you add ribbits forever in this bento pond.
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
          <p className="text-sm text-frog-light">{filteredGames.length} games active</p>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {filteredGames.map((game, index) => (
              <GameCard 
                key={game.id} 
                game={game} 
                index={index} 
                isAdmin={isAdmin}
                onDelete={(e) => handleDeleteGame(game.id, e)}
                onClick={() => setSelectedGame(game)} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bento-card p-12">
            <div className="p-6 bg-frog-main/5 rounded-full">
              <Ghost className="w-12 h-12 text-frog-light/30" />
            </div>
            <h4 className="text-xl font-bold">The Pond is Empty!</h4>
            <p className="text-frog-light mb-6">As an admin, you can start adding games right now.</p>
            {isAdmin ? (
               <button 
                 onClick={() => setShowAdminModal(true)}
                 className="bg-frog-main text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
               >
                 Add Your First Game
               </button>
            ) : (
               <button 
                 onClick={toggleAdmin}
                 className="text-frog-main border border-frog-main/30 px-6 py-2 rounded-lg font-bold hover:bg-frog-main/10"
               >
                 Claim Admin Mode
               </button>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-frog-light">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐸</span>
            <span>© 2026 Admin Frog Dashboard.</span>
          </div>
          <div className="flex gap-6">
            <FooterLink label="Privacy Policy" />
            <FooterLink label="Terms of Service" />
            <FooterLink label="Contact Pond" />
          </div>
        </div>
      </footer>

      {/* Admin Add Game Modal */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-surface border border-border w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-6 bg-frog-main/10 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-frog-main rounded-xl">
                    <Plus className="w-5 h-5 text-black" />
                  </div>
                  <h4 className="text-xl font-display font-bold">Add New Game</h4>
                </div>
                <button onClick={() => setShowAdminModal(false)} className="text-frog-light hover:text-white">
                  <X />
                </button>
              </div>
              <form onSubmit={handleAddGame} className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-frog-light">Game Title</label>
                  <input
                    required
                    type="text"
                    value={newGame.name}
                    onChange={e => setNewGame({...newGame, name: e.target.value})}
                    placeholder="e.g. Street Frogger"
                    className="w-full bg-black/40 border border-border rounded-xl p-3 text-sm focus:ring-1 focus:ring-frog-main outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-frog-light">Iframe / Game URL</label>
                  <input
                    required
                    type="url"
                    value={newGame.url}
                    onChange={e => setNewGame({...newGame, url: e.target.value})}
                    placeholder="https://..."
                    className="w-full bg-black/40 border border-border rounded-xl p-3 text-sm focus:ring-1 focus:ring-frog-main outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-frog-light">Thumbnail URL (Optional)</label>
                  <input
                    type="url"
                    value={newGame.thumbnail}
                    onChange={e => setNewGame({...newGame, thumbnail: e.target.value})}
                    placeholder="https://picsum.photos/..."
                    className="w-full bg-black/40 border border-border rounded-xl p-3 text-sm focus:ring-1 focus:ring-frog-main outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-frog-light">Description</label>
                  <textarea
                    rows={3}
                    value={newGame.description}
                    onChange={e => setNewGame({...newGame, description: e.target.value})}
                    className="w-full bg-black/40 border border-border rounded-xl p-3 text-sm focus:ring-1 focus:ring-frog-main outline-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-frog-main text-black font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-frog-main/20 mt-4"
                >
                  ADD TO POND
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  <p className="text-xs text-frog-light">Admin Managed Game</p>
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
  isAdmin: boolean;
  onDelete: (e: React.MouseEvent) => void;
  onClick: () => void;
  key?: string;
}

function GameCard({ game, index, isAdmin, onDelete, onClick }: GameCardProps) {
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
      <div className={`overflow-hidden relative ${isLarge ? 'flex-1' : 'aspect-[16/10]'}`}>
        <img
          src={game.thumbnail}
          alt={game.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {isAdmin && (
           <button 
             onClick={onDelete}
             className="absolute top-4 left-4 p-2 bg-red-500/20 backdrop-blur border border-red-500/30 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10"
           >
             <Trash2 className="w-4 h-4" />
           </button>
        )}

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
