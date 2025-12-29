"use client";
import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";
import Link from "next/link";

const SpineRecoveryPageHeader = ({ openContactForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/x/product-listing/spine-recovery-pro/"
            className="flex items-center gap-2"
          >
            <div className="bg-blue-700 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              SpineRecovery <span className="text-blue-700">Pro</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#solutions"
              className="text-slate-600 hover:text-blue-700 font-medium"
            >
              Solutions
            </a>
            <a
              href="#features"
              className="text-slate-600 hover:text-blue-700 font-medium"
            >
              Platform
            </a>
            <a
              href="#security"
              className="text-slate-600 hover:text-blue-700 font-medium"
            >
              Compliance
            </a>
            <button
              onClick={openContactForm}
              className="bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/30 active:scale-95"
            >
              Request Hospital Demo
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
          <a href="#solutions" className="block text-slate-600 font-medium">
            Solutions
          </a>
          <a href="#features" className="block text-slate-600 font-medium">
            Platform
          </a>
          <a href="#security" className="block text-slate-600 font-medium">
            Compliance
          </a>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              openContactForm();
            }}
            className="w-full bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-700/20"
          >
            Request Hospital Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default SpineRecoveryPageHeader;
