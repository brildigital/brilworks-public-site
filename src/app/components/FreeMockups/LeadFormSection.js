"use client";
import { Clock, Video, Gift } from "lucide-react";
import Cal from "@calcom/embed-react";

export default function LeadFormSection() {
  return (
    <section
      id="signup-form"
      className="max-w-[1280px] py-8 md:py-12 lg:py-16 mx-auto relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-themering-[#00b7ff]/8 via-accent/5 to-transparent" aria-hidden="true"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse opacity-40" aria-hidden="true"></div>
      <div
        className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-40"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      ></div>
      <div className="w-full mx-auto px-6 relative">
        <div className="text-center mb-12 scroll-reveal">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            data-testid="text-form-headline"
            id="form-section"
          >
            Turn My Idea Into <span className="gradient-text">Mockups</span>
          </h2>
          <p
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto"
            data-testid="text-form-description"
          >
            Tell me about your idea, and I'll turn it into something you can
            see, touch, and share. Zero cost. Zero catch.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 items-stretch">
          {/* Calendly Embed */}
          <div
            className="scroll-reveal h-full lg:w-10/12 mx-auto w-full"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-effect rounded-2xl md:pt-6 md:px-4 p-4 h-full flex flex-col">
              <div className="text-center mb-2">
                <h3 className="text-2xl font-bold mb-1">
                  Or Book a <span className="text-accent">15-Min</span> Idea
                  Chat (Free)
                </h3>
                <p className="text-[#94a3b8]">
                  Prefer to talk? Let's discuss your idea live and I'll give you
                  instant feedback.
                </p>
              </div>
              <div className="w-full">
                <Cal
                  calLink="vikas-singh-bril/free-consultation"
                  config={{ theme: "light" }}
                />
              </div>

              <div className="text-center">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#94a3b8]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    15 minutes
                  </span>
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    Video call
                  </span>
                  <span className="flex items-center gap-1">
                    <Gift className="w-4 h-4" />
                    100% free
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
