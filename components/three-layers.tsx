import { Compass, Flame, Rocket } from "lucide-react";

const layers = [
  {
    icon: Compass,
    label: "01 — Discover",
    title: "Know who you are",
    body: "Your Soul Map is generated from your birth data and a bespoke Quintessence Assessment — our own profiling system blending astrology, numerology, and psychology. You'll receive your primary Celestial Path archetype and a complete profile of your purpose-built nature.",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    icon: Flame,
    label: "02 — Develop",
    title: "Build deliberately",
    body: "Your personalised development platform. Structured learning tracks, daily practices tied to your chart and lunar cycles, a Gap Map showing the distance between where you are and where you're going — and a Readiness Score you control.",
    color: "#d4af37",
    glow: "rgba(212,175,55,0.12)",
  },
  {
    icon: Rocket,
    label: "03 — Deploy",
    title: "Enter on your terms",
    body: "When you're ready, opt into the career marketplace. Employers see your archetype and Quintessence profile — not just your CV. You receive role matches ranked by cosmic and cultural compatibility. You decide when the world sees you.",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
  },
];

export default function ThreeLayers() {
  return (
    <section id="discover" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="section-label mb-4">The Platform</p>
          <div className="divider-gold mb-6" />
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Three layers. <span className="gradient-text italic">One journey.</span>
          </h2>
          <p className="text-slate-soft mt-5 max-w-xl mx-auto text-lg font-light">
            Most career platforms drop you straight into job listings. We start somewhere more
            fundamental — with who you actually are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.label}
                className="glass rounded-2xl p-8 group hover:border-white/15 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 30% 30%, ${layer.glow}, transparent 70%)` }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${layer.color}20`, border: `1px solid ${layer.color}40` }}
                  >
                    <Icon size={22} style={{ color: layer.color }} />
                  </div>

                  <p className="section-label mb-3">{layer.label}</p>
                  <h3
                    className="text-3xl font-medium mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {layer.title}
                  </h3>
                  <p className="text-slate-soft text-sm leading-relaxed font-light">{layer.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
