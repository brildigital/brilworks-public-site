"use client";
import { Activity } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "../lib/commonFunction";

const SpineRecoveryFooter = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-blue-700" />
              <span className="font-bold text-xl text-white">
                SpineRecovery Pro
              </span>
            </div>
            <p className="max-w-xs text-sm">
              The standardized post-spine-surgery recovery management system for
              modern hospitals.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                  className="hover:text-white"
                >
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                  className="hover:text-white"
                >
                  Clinical Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  onClick={(e) => scrollToSection(e, "security")}
                  className="hover:text-white"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us/" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-white">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 SpineRecovery Pro. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Hospital Administration.</p>
        </div>
      </div>
    </footer>
  );
};

export default SpineRecoveryFooter;
