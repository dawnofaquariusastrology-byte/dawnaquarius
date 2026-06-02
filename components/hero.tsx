import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden stars-bg">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-violet top-[-100px] left-[-200px] pulse-glow" />
      <div className="orb w-[400px] h-[400px] bg-gold top-[20%] right-[-100px]" style={{ animationDelay: "2s", opacity: 0.15 }} />
      <div className="orb w-[300px] h-[300px] bg-violet-mid bottom-[-50px] left-[30%]" style={{ opacity: 0.2 }} />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(212,175,55,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080818)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <Star size={12} className="text-gold fill-gold" />
          <span className="section-label" style={{ fontSize: "0.65rem" }}>
            The Career Ecosystem for the Aquarian Age
          </span>
          <Star size={12} className="text-gold fill-gold" />
        </div>

        {/* Headline */}
        <h1
          className="text-6xl md:text-8xl font-light leading-none mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Find the path
          <br />
          <span className="gradient-text font-semibold italic">you were born</span>
          <br />
          to walk.
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-slate-soft max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Dawn of Aquarius blends ancient wisdom — astrology, numerology — with modern career
          science to reveal your true professional purpose. Discover your Celestial Path. Develop
          your potential. Deploy into work that fits your soul.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="btn-primary flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
          >
            Discover Your Celestial Path
            <ArrowRight size={16} />
          </a>
          <a href="#discover" className="btn-ghost px-8 py-4 rounded-full text-base font-medium">
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-sm text-slate-soft opacity-60">
          Free to begin — no credit card required
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-slate-soft tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-soft to-transparent" />
      </div>
    </section>
  );
}
