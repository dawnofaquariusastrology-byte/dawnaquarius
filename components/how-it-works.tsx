const steps = [
  {
    number: "01",
    title: "Take the Soul Map",
    body: "Enter your birth date, time, location, and full name. Complete our Quintessence Assessment — 20 minutes that reframe everything you thought you knew about your working self.",
  },
  {
    number: "02",
    title: "Receive your profile",
    body: "Your Soul Map is generated: primary Celestial Path archetype, Quintessence dimensions, career tendencies, ideal environments, and team dynamics role. Free to start — unlock the full map to go deeper.",
  },
  {
    number: "03",
    title: "Develop your path",
    body: "Subscribe to access your personalised development platform. Structured courses, daily practices, Gap Map, progress tracking, mentorship matching — all built around your specific archetype and chart.",
  },
  {
    number: "04",
    title: "Deploy when ready",
    body: "Your Readiness Score builds as you develop. When you choose to go visible, employers see your archetype and Quintessence profile. You receive matched roles. You decide when the world sees you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="section-label mb-4">How It Works</p>
          <div className="divider-gold mb-6" />
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Four steps to <span className="gradient-text-gold italic">purposeful work.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-8 relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[1.85rem] top-16 bottom-0 w-px"
                  style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.3), rgba(124,58,237,0.2))" }}
                />
              )}

              {/* Number */}
              <div className="flex-shrink-0 w-14 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full glass-violet flex items-center justify-center text-violet-mid font-semibold text-sm z-10">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="pb-16">
                <h3
                  className="text-3xl font-medium mb-3 text-slate-bright"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-soft leading-relaxed font-light text-sm max-w-lg">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
