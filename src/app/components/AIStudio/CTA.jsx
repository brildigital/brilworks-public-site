import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 transform rotate-12">
          <div className="w-full h-full bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 rounded-full backdrop-blur-sm border border-cyber-blue/20"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-32 h-32 transform -rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-cyber-orange/10 to-cyber-blue/10 rounded-3xl backdrop-blur-sm border border-cyber-orange/20"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="glass-morphism rounded-3xl p-16 border-2 border-cyber-blue/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-purple/5"></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Turn Your <span className="hologram-text">Idea</span>
              <br />
              Into Reality?
            </h2>

            <p className="text-xl md:text-2xl text-cyber-gray !mb-12 max-w-4xl mx-auto">
              Start with a free consultation. Get expert validation, technical
              roadmap, and MVP strategy - all at no cost. Only pay when you're
              ready to build.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                size="lg"
                className="gradient-button text-xl font-bold hover:shadow-2xl hover:shadow-cyber-blue/30 transition-all transform hover:scale-105"
                href="/contact-us/"
              >
                <Sparkles className="mr-2 h-6 w-6" />
                Get FREE Consultation Now
              </Link>
              <button
                variant="outline"
                size="lg"
                className="glass-morphism flex items-center justify-center px-7.5 py-3 text-lg font-bold hover:border-cyber-orange/50 transition-all rounded-full"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Strategy Call
              </button>
            </div>

            {/* Process Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-morphism rounded-2xl p-6 border border-cyber-blue/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyber-blue/30 to-cyber-purple/30 rounded-2xl flex items-center justify-center">
                  <span className="text-xl font-bold text-cyber-blue">1</span>
                </div>
                <h4 className="font-bold mb-2">Free Consultation</h4>
                <p className="text-cyber-gray text-sm">
                  Share your idea, get expert feedback and validation
                </p>
              </div>

              <div className="glass-morphism rounded-2xl p-6 border border-cyber-orange/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyber-orange/30 to-cyber-blue/30 rounded-2xl flex items-center justify-center">
                  <span className="text-xl font-bold text-cyber-orange">2</span>
                </div>
                <h4 className="font-bold mb-2">Custom Roadmap</h4>
                <p className="text-cyber-gray text-sm">
                  Receive detailed plan and technical architecture
                </p>
              </div>

              <div className="glass-morphism rounded-2xl p-6 border border-cyber-purple/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyber-purple/30 to-cyber-orange/30 rounded-2xl flex items-center justify-center">
                  <span className="text-xl font-bold text-cyber-purple">3</span>
                </div>
                <h4 className="font-bold mb-2">Build Together</h4>
                <p className="text-cyber-gray text-sm">
                  Move forward only when you're confident
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-[#017eeb33]">
              <p className="text-cyber-gray !mb-4">Trusted by 500+ founders</p>
              <div className="flex justify-center items-center space-x-8 text-cyber-blue/60">
                <span className="text-2xl font-bold">95%</span>
                <span>Success Rate</span>
                <span className="text-cyber-orange">•</span>
                <span className="text-2xl font-bold">$50M+</span>
                <span>Funding Raised</span>
                <span className="text-cyber-purple">•</span>
                <span className="text-2xl font-bold">200+</span>
                <span>MVPs Built</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
