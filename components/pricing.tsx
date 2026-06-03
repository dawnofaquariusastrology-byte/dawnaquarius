import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "The Spark",
    price: "Free",
    period: "forever",
    description: "Begin your journey. Discover your primary Celestial Path and get a taste of your Soul Map.",
    cta: "Begin for Free",
    ctaStyle: "btn-ghost",
    highlight: false,
    features: [
      "Full Soul Map assessment",
      "Primary Celestial Path archetype",
      "Summary Quintessence profile",
      "Basic career tendency overview",
      "Community access",
    ],
  },
  {
    name: "The Path",
    price: "£19",
    period: "per month",
    description: "Your complete development platform. Everything you need to grow deliberately toward your purpose.",
    cta: "Start The Path",
    ctaStyle: "btn-primary",
    highlight: true,
    features: [
      "Everything in The Spark",
      "Full Soul Map & secondary archetype",
      "Complete Quintessence profile",
      "Gap Map & Readiness Score",
      "Daily practices & lunar cycles",
      "Full course library access",
      "Progress tracking & milestones",
      "Shadow Work modules",
      "Employer visibility (opt-in)",
    ],
  },
  {
    name: "The Forge",
    price: "£39",
    period: "per month",
    description: "The complete ecosystem. Deep development, mentorship, cohort learning, and full marketplace access.",
    cta: "Join The Forge",
    ctaStyle: "btn-ghost",
    highlight: false,
    features: [
      "Everything in The Path",
      "Cohort learning with your archetype group",
      "Mentorship matching",
      "1:1 practitioner sessions (2/month)",
      "Quarterly physical workbook",
      "Priority employer matching",
      "Annual Soul Map review",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <p className="section-label mb-4">Pricing</p>
          <div className="divider-gold mb-6" />
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Start free. <span className="gradient-text italic">Go as deep as you need.</span>
          </h2>
          <p className="text-slate-soft mt-5 max-w-xl mx-auto text-base font-light">
            The development layer is where the real transformation happens. Take your time — the marketplace will be there when you&apos;re ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 relative overflow-hidden transition-all duration-300 ${
                tier.highlight
                  ? "glass-violet border-violet/40 scale-[1.02]"
                  : "glass hover:border-white/12"
              }`}
            >
              {tier.highlight && (
                <>
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, #7c3aed, transparent)" }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 text-xs font-medium text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-1">
                      <Star size={10} className="fill-gold" /> Most Popular
                    </span>
                  </div>
                </>
              )}

              <div className="mb-8">
                <p
                  className="text-2xl font-medium mb-1"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {tier.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-light text-slate-bright" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {tier.price}
                  </span>
                  <span className="text-slate-soft text-sm pb-1 font-light">/{tier.period}</span>
                </div>
                <p className="text-slate-soft text-sm font-light leading-relaxed">{tier.description}</p>
              </div>

              <a
                href="#"
                className={`${tier.ctaStyle} block text-center text-sm font-medium px-6 py-3 rounded-full mb-8`}
              >
                {tier.cta}
              </a>

              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: tier.highlight ? "#a78bfa" : "#d4af37" }}
                    />
                    <span className="text-slate-soft text-sm font-light">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-soft text-xs mt-10 font-light opacity-60">
          Employer plans available separately. Soul Map PDF report available as a one-time purchase at £35.
        </p>
      </div>
    </section>
  );
}
