import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Access candidates who are self-aware, purpose-aligned, and actively developing",
  "Profile your existing team — identify dynamics gaps before you hire",
  "Post roles with an ideal Quintessence profile, not just a job description",
  "Compatibility scores for every candidate — never scroll blind CVs again",
  "Pay per placement or subscribe for ongoing access",
];

export default function Employers() {
  return (
    <section id="employers" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 100% 50%, rgba(124,58,237,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="section-label mb-4">For Employers</p>
            <div className="w-12 h-px mb-6" style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }} />
            <h2
              className="text-5xl md:text-6xl font-light leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Stop hiring CVs.
              <br />
              <span className="gradient-text italic">Start hiring souls.</span>
            </h2>
            <p className="text-slate-soft text-base leading-relaxed font-light mb-8">
              The most expensive hire you ever make is the one that leaves in six months because the
              role didn&apos;t fit who they actually are. Dawn of Aquarius gives you a deeper signal —
              candidates matched not just on experience, but on nature, purpose, and team
              compatibility.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-slate-soft text-sm font-light">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium"
            >
              Explore Employer Plans
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — visual */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)",
                }}
              />
              <p className="section-label mb-6">Team Dynamics Report</p>

              <div className="space-y-4 mb-8">
                {[
                  { path: "The Oracle", role: "Head of Strategy", match: 96, color: "#38bdf8" },
                  { path: "The Forge", role: "Lead Engineer", match: 91, color: "#84cc16" },
                  { path: "The Luminary", role: "CEO", match: 89, color: "#ef4444" },
                  { path: "The Weaver", role: "People Lead", match: 87, color: "#38bdf8" },
                ].map((member) => (
                  <div key={member.path} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0"
                      style={{ background: `${member.color}20`, border: `1px solid ${member.color}40` }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-bright" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "0.9rem" }}>
                        {member.path}
                      </p>
                      <p className="text-xs text-slate-soft font-light">{member.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold" style={{ color: member.color }}>
                        {member.match}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-violet rounded-xl p-4">
                <p className="text-xs text-slate-soft font-light mb-1">Gap identified</p>
                <p className="text-sm text-violet-mid" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  No Water Path present — team lacks The Hearthkeeper&apos;s empathic leadership.
                  Next hire recommendation surfaced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
