"use client";
import React from "react";
import { ArrowLeft, User, Hexagon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const AIAgentLayout = ({ children, title = "OmniLife", showBack = false }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Allow scrolling on Home and Profile pages, keep others (Chat) fixed/hidden for their own scroll handling
  const isScrollable =
    pathname === "/ai-agents/" || pathname === "/ai-agents/profile";

  return (
    <div className="h-[100dvh] bg-slate-950 text-slate-100 flex flex-col relative overflow-auto font-sans">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Header - Floating Glass Pill */}
      <header className="fixed top-4 inset-x-0 z-30 flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-5xl h-16 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between px-4 pointer-events-auto">
          <div className="flex items-center gap-3">
            {showBack ? (
              <button
                onClick={() => router.push("/ai-agents/")}
                className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-all text-slate-300 hover:text-white active:scale-95"
                aria-label="Go Back"
              >
                <ArrowLeft size={20} />
              </button>
            ) : (
              <div className="p-2 -ml-2 text-cyan-400">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <Hexagon
                    size={18}
                    fill="currentColor"
                    className="text-white"
                  />
                </div>
              </div>
            )}
            <h1
              className={`text-lg md:text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 font-display ${
                showBack ? "opacity-100" : "hidden md:block"
              }`}
            >
              {title.toUpperCase()}
            </h1>
            {!showBack && (
              <span className="md:hidden text-lg font-bold tracking-wider text-white">
                OMNILIFE
              </span>
            )}
          </div>

          <button
            onClick={() => router.push("/ai-agents/profile/")}
            className={`p-2 -mr-2 rounded-full transition-all active:scale-95 flex items-center gap-2 group ${
              pathname === "/ai-agents/profile"
                ? "bg-cyan-500/10 text-cyan-400"
                : "hover:bg-white/5 text-slate-400 hover:text-white"
            }`}
            aria-label="User Profile"
          >
            <span className="hidden md:inline text-xs font-semibold tracking-widest uppercase group-hover:text-cyan-400 transition-colors">
              Profile
            </span>
            <div
              className={`p-1 rounded-full border border-transparent group-hover:border-cyan-500/50 transition-all`}
            >
              <User size={18} />
            </div>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main
        className={`flex-1 pt-24 relative flex flex-col z-10 ${
          isScrollable
            ? "overflow-y-auto"
            : "overflow-hidden max-w-5xl mx-auto w-full"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default AIAgentLayout;
