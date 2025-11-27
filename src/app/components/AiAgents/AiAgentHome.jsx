"use client";
import React, { useState } from "react";
import {
  Sparkles,
  Hammer,
  Dumbbell,
  Heart,
  Calendar,
  Utensils,
  Plane,
  GraduationCap,
  PenTool,
  DollarSign,
  Shirt,
  Sprout,
  PawPrint,
  Clapperboard,
  Briefcase,
  Cpu,
  Users,
  Search,
  Zap,
  Baby,
  Moon,
  Languages,
  Sofa,
  Apple,
  Rocket,
  CheckCircle,
  Music,
  Laugh,
  TrendingUp,
  BarChart3,
  Brain,
  Activity,
  Eye,
} from "lucide-react";

import Link from "next/link";
import AIAgentLayout from "./AIAgentLayout";
import { ModuleType } from "../../lib/enums";
import Image from "next/image";

const categories = {
  "Core Systems": [
    ModuleType.ASTROLOGY,
    ModuleType.MATCHMAKING,
    ModuleType.FITNESS,
    ModuleType.NUTRITION,
    ModuleType.HABIT,
    ModuleType.WELLNESS,
    ModuleType.DREAMS,
    ModuleType.SCHEDULING,
  ],
  "Lifestyle Modules": [
    ModuleType.MEME,
    ModuleType.MUSIC,
    ModuleType.COOKING,
    ModuleType.TRAVEL,
    ModuleType.FASHION,
    ModuleType.MOVIES,
    ModuleType.PARENTING,
    ModuleType.LANGUAGE,
  ],
  "Habitat & Bio": [
    ModuleType.DIY,
    ModuleType.GARDENING,
    ModuleType.INTERIOR,
    ModuleType.PETS,
    ModuleType.FINANCE,
    ModuleType.WEALTH,
  ],
  "Mind & Science": [
    ModuleType.VISION,
    ModuleType.NEURO,
    ModuleType.PSYCH,
    ModuleType.LEARNING,
    ModuleType.WRITING,
    ModuleType.CAREER,
    ModuleType.STARTUP,
    ModuleType.TECH,
    ModuleType.TRENDS,
  ],
};

const allModules = [
  {
    id: ModuleType.ASTROLOGY,
    name: "Astro Core",
    icon: Sparkles,
    color: "text-purple-400",
    glow: "shadow-purple-500/20",
    border: "hover:border-purple-500/50",
    desc: "Cosmic Analysis & Kundli",
    path: "/astrology",
  },
  {
    id: ModuleType.MATCHMAKING,
    name: "Union Sync",
    icon: Users,
    color: "text-rose-400",
    glow: "shadow-rose-500/20",
    border: "hover:border-rose-500/50",
    desc: "Compatibility Engine",
    path: "/matchmaking",
  },
  {
    id: ModuleType.DIY,
    name: "Repair Bot",
    icon: Hammer,
    color: "text-orange-400",
    glow: "shadow-orange-500/20",
    border: "hover:border-orange-500/50",
    desc: "Structural Fixes",
    path: "/diy",
  },
  {
    id: ModuleType.FITNESS,
    name: "Bio-Coach",
    icon: Dumbbell,
    color: "text-red-400",
    glow: "shadow-red-500/20",
    border: "hover:border-red-500/50",
    desc: "Physical Optimization",
    path: "/fitness",
  },
  {
    id: ModuleType.NUTRITION,
    name: "Nutri-Sci",
    icon: Apple,
    color: "text-green-500",
    glow: "shadow-green-500/20",
    border: "hover:border-green-500/50",
    desc: "Dietary Intelligence",
    path: "/nutrition",
  },
  {
    id: ModuleType.HABIT,
    name: "Habit Loop",
    icon: CheckCircle,
    color: "text-cyan-500",
    glow: "shadow-cyan-500/20",
    border: "hover:border-cyan-500/50",
    desc: "Goal Tracker",
    path: "/habit",
  },
  {
    id: ModuleType.WELLNESS,
    name: "Mind Link",
    icon: Heart,
    color: "text-teal-400",
    glow: "shadow-teal-500/20",
    border: "hover:border-teal-500/50",
    desc: "Mental Stability",
    path: "/wellness",
  },
  {
    id: ModuleType.DREAMS,
    name: "Dream State",
    icon: Moon,
    color: "text-indigo-300",
    glow: "shadow-indigo-500/20",
    border: "hover:border-indigo-500/50",
    desc: "Subconscious Analysis",
    path: "/dreams",
  },
  {
    id: ModuleType.SCHEDULING,
    name: "Chronos",
    icon: Calendar,
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
    border: "hover:border-blue-500/50",
    desc: "Time Management",
    path: "/scheduling",
  },

  {
    id: ModuleType.MUSIC,
    name: "Sonic",
    icon: Music,
    color: "text-fuchsia-400",
    glow: "shadow-fuchsia-500/20",
    border: "hover:border-fuchsia-500/50",
    desc: "Music Discovery",
    path: "/music",
  },
  {
    id: ModuleType.MEME,
    name: "Meme Gen",
    icon: Laugh,
    color: "text-pink-500",
    glow: "shadow-pink-500/20",
    border: "hover:border-pink-500/50",
    desc: "Humor Generator",
    path: "/meme",
  },
  {
    id: ModuleType.COOKING,
    name: "Synthesis",
    icon: Utensils,
    color: "text-yellow-400",
    glow: "shadow-yellow-500/20",
    border: "hover:border-yellow-500/50",
    desc: "Culinary Recipes",
    path: "/cooking",
  },
  {
    id: ModuleType.TRAVEL,
    name: "Teleport",
    icon: Plane,
    color: "text-sky-400",
    glow: "shadow-sky-500/20",
    border: "hover:border-sky-500/50",
    desc: "Expedition Planning",
    path: "/travel",
  },
  {
    id: ModuleType.LEARNING,
    name: "Cortex",
    icon: GraduationCap,
    color: "text-green-400",
    glow: "shadow-green-500/20",
    border: "hover:border-green-500/50",
    desc: "Knowledge Download",
    path: "/learning",
  },
  {
    id: ModuleType.WRITING,
    name: "Scribe",
    icon: PenTool,
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
    border: "hover:border-indigo-500/50",
    desc: "Text Generation",
    path: "/writing",
  },
  {
    id: ModuleType.LANGUAGE,
    name: "Babel",
    icon: Languages,
    color: "text-blue-500",
    glow: "shadow-blue-500/20",
    border: "hover:border-blue-500/50",
    desc: "Polyglot Tutor",
    path: "/language",
  },

  {
    id: ModuleType.FINANCE,
    name: "Credits",
    icon: DollarSign,
    color: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    border: "hover:border-emerald-500/50",
    desc: "Personal Budgeting",
    path: "/finance",
  },
  {
    id: ModuleType.WEALTH,
    name: "Wealth",
    icon: BarChart3,
    color: "text-amber-500",
    glow: "shadow-amber-500/20",
    border: "hover:border-amber-500/50",
    desc: "Investment Strategy",
    path: "/wealth",
  },
  {
    id: ModuleType.FASHION,
    name: "Aesthetics",
    icon: Shirt,
    color: "text-pink-400",
    glow: "shadow-pink-500/20",
    border: "hover:border-pink-500/50",
    desc: "Visual Style",
    path: "/fashion",
  },
  {
    id: ModuleType.INTERIOR,
    name: "Habitat",
    icon: Sofa,
    color: "text-orange-300",
    glow: "shadow-orange-500/20",
    border: "hover:border-orange-500/50",
    desc: "Space Design",
    path: "/interior",
  },
  {
    id: ModuleType.GARDENING,
    name: "Flora",
    icon: Sprout,
    color: "text-lime-400",
    glow: "shadow-lime-500/20",
    border: "hover:border-lime-500/50",
    desc: "Botany Care",
    path: "/gardening",
  },
  {
    id: ModuleType.PETS,
    name: "Fauna",
    icon: PawPrint,
    color: "text-amber-400",
    glow: "shadow-amber-500/20",
    border: "hover:border-amber-500/50",
    desc: "Creature Support",
    path: "/pets",
  },
  {
    id: ModuleType.PARENTING,
    name: "Guardian",
    icon: Baby,
    color: "text-teal-300",
    glow: "shadow-teal-500/20",
    border: "hover:border-teal-500/50",
    desc: "Child Guidance",
    path: "/parenting",
  },

  {
    id: ModuleType.MOVIES,
    name: "Media",
    icon: Clapperboard,
    color: "text-rose-400",
    glow: "shadow-rose-500/20",
    border: "hover:border-rose-500/50",
    desc: "Entertainment Feed",
    path: "/movies",
  },
  {
    id: ModuleType.CAREER,
    name: "Guild",
    icon: Briefcase,
    color: "text-slate-400",
    glow: "shadow-slate-500/20",
    border: "hover:border-slate-500/50",
    desc: "Career Pathing",
    path: "/career",
  },
  {
    id: ModuleType.STARTUP,
    name: "Founder",
    icon: Rocket,
    color: "text-purple-500",
    glow: "shadow-purple-500/20",
    border: "hover:border-purple-500/50",
    desc: "Venture Scaling",
    path: "/startup",
  },
  {
    id: ModuleType.TECH,
    name: "Sys-Admin",
    icon: Cpu,
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    border: "hover:border-cyan-500/50",
    desc: "Technical Support",
    path: "/tech",
  },
  {
    id: ModuleType.TRENDS,
    name: "Trends",
    icon: TrendingUp,
    color: "text-orange-500",
    glow: "shadow-orange-500/20",
    border: "hover:border-orange-500/50",
    desc: "Viral Analysis",
    path: "/trends",
  },
  {
    id: ModuleType.NEURO,
    name: "Neuro",
    icon: Brain,
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
    border: "hover:border-indigo-500/50",
    desc: "Brain Science",
    path: "/neuro",
  },
  {
    id: ModuleType.PSYCH,
    name: "Psyche",
    icon: Activity,
    color: "text-teal-500",
    glow: "shadow-teal-500/20",
    border: "hover:border-teal-500/50",
    desc: "Behavioral Science",
    path: "/psych",
  },
  {
    id: ModuleType.VISION,
    name: "Vision",
    icon: Eye,
    color: "text-cyan-300",
    glow: "shadow-cyan-500/20",
    border: "hover:border-cyan-500/50",
    desc: "Image Analysis",
    path: "/vision",
  },
];

const AiAgentHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModules = allModules.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AIAgentLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-10 pb-12 px-6 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                System Online v3.1
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
              AUGMENT YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                REALITY
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 !mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              One interface for all life operations.
              <span className="text-slate-200">
                {" "}
                30+ Specialized AI Agents.
              </span>
              <br />
              Powered by Neural Gemini AI.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-50 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-950 rounded-full flex items-center">
                <div className="pl-6 text-slate-400">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Initialize command (e.g., 'Habit Tracker', 'Interior Design')..."
                  className="w-full pl-4 pr-6 py-4 bg-transparent text-white placeholder-slate-500 rounded-full outline-none text-base font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          {searchTerm ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredModules.map((mod) => (
                <ModuleCard key={mod.id} mod={mod} />
              ))}
            </div>
          ) : (
            <div className="space-y-16">
              {Object.entries(categories).map(([catName, modIds]) => (
                <div key={catName}>
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 uppercase tracking-widest font-display">
                      {catName}
                    </h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {modIds.map((id) => {
                      const mod = allModules.find((m) => m.id === id);
                      return mod ? <ModuleCard key={id} mod={mod} /> : null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SEO Footer - Minimized style */}
        <footer className="border-t border-slate-900 bg-black/40 py-12 px-6 mt-auto backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                className="w-[155px] h-[46px]"
                src="/images/logo-white.svg"
                alt="Brilworks Logo"
                width="155"
                height="46"
                priority
              />
              {/* <Zap className="text-yellow-500 fill-yellow-500" size={32} /> */}
            </div>
            <p className="text-slate-300 text-xs font-mono uppercase tracking-widest">
              © {new Date().getFullYear()} Brilworks. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </AIAgentLayout>
  );
};

const ModuleCard = ({ mod, navigate }) => (
  <Link
    href={`/ai-agents${mod.path}`}
    // onClick={() => navigate(mod.path)}
    className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 backdrop-blur-sm transition-all duration-300 h-full w-full overflow-hidden ${mod.border}`}
  >
    {/* Hover Glow Background */}
    <div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent`}
    ></div>

    <div
      className={`relative z-10 p-4 rounded-xl mb-4 bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg ${mod.glow}`}
    >
      <mod.icon size={28} className={mod.color} />
    </div>
    <span className="relative z-10 font-bold text-slate-200 text-lg mb-1 tracking-wide group-hover:text-white transition-colors font-display">
      {mod.name}
    </span>
    <span className="relative z-10 text-xs text-slate-500 font-mono text-center group-hover:text-cyan-400 transition-colors">
      {mod.desc}
    </span>

    {/* Corner Accents */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-cyan-500/50 transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-cyan-500/50 transition-colors"></div>
  </Link>
);

export default AiAgentHome;
