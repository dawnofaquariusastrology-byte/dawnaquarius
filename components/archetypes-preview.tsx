const families = [
  {
    name: "Flame Paths",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.25)",
    archetypes: ["The Luminary", "The Vanguard", "The Sovereign", "The Catalyst", "The Sentinel"],
  },
  {
    name: "Earth Paths",
    color: "#84cc16",
    glow: "rgba(132,204,22,0.1)",
    border: "rgba(132,204,22,0.22)",
    archetypes: ["The Forge", "The Architect", "The Steward", "The Keeper", "The Cultivator"],
  },
  {
    name: "Air Paths",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.1)",
    border: "rgba(56,189,248,0.22)",
    archetypes: ["The Emissary", "The Weaver", "The Conduit", "The Oracle", "The Seeker"],
  },
  {
    name: "Water Paths",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.12)",
    border: "rgba(129,140,248,0.25)",
    archetypes: ["The Hearthkeeper", "The Mirror", "The Composer", "The Alchemist", "The Mystic"],
  },
];

const descriptions: Record<string, string> = {
  "The Luminary": "Visionary leaders & public figures",
  "The Vanguard": "Pioneers & first-movers",
  "The Sovereign": "Executives & governance leaders",
  "The Catalyst": "Change agents & transformation specialists",
  "The Sentinel": "Advocates, lawyers & justice workers",
  "The Forge": "Engineers, builders & technical masters",
  "The Architect": "Systems designers & strategic planners",
  "The Steward": "Operators, coordinators & administrators",
  "The Keeper": "Archivists, compliance & continuity holders",
  "The Cultivator": "Educators, mentors & growers",
  "The Emissary": "Teachers, writers & communicators",
  "The Weaver": "Community builders & relationship architects",
  "The Conduit": "Mediators, translators & bridge-builders",
  "The Oracle": "Analysts, strategists & forecasters",
  "The Seeker": "Researchers, explorers & philosophers",
  "The Hearthkeeper": "Caregivers, therapists & welfare workers",
  "The Mirror": "Coaches, facilitators & reflective practitioners",
  "The Composer": "Creatives, designers & performers",
  "The Alchemist": "Transformation consultants & change specialists",
  "The Mystic": "Spiritual leaders & wellness practitioners",
};

export default function ArchetypesPreview() {
  return (
    <section id="paths" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <p className="section-label mb-4">The Celestial Paths</p>
          <div className="divider-gold mb-6" />
          <h2 className="text-5xl md:text-6xl font-light leading-tight">
            Twenty paths. <span className="gradient-text italic">One is yours.</span>
          </h2>
          <p className="text-slate-soft mt-5 max-w-2xl mx-auto text-lg font-light">
            Our proprietary archetype system maps your astrological and numerological profile to one
            of twenty Celestial Paths — grouped into four elemental families. Each path comes with a
            career domain, a Quintessence signature, and a development curriculum built around it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {families.map((family) => (
            <div
              key={family.name}
              className="glass rounded-2xl p-7 hover:border-white/12 transition-all duration-500 group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 20% 20%, ${family.glow}, transparent 60%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: family.color, boxShadow: `0 0 10px ${family.color}` }}
                  />
                  <p
                    className="section-label"
                    style={{ color: family.color }}
                  >
                    {family.name}
                  </p>
                </div>

                <div className="space-y-3">
                  {family.archetypes.map((archetype) => (
                    <div
                      key={archetype}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/3 transition-colors group/card"
                      style={{ border: `1px solid transparent` }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 opacity-60"
                        style={{ background: family.color }}
                      />
                      <div>
                        <p className="text-slate-bright text-sm font-medium" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.05rem" }}>
                          {archetype}
                        </p>
                        <p className="text-slate-soft text-xs mt-0.5 font-light">
                          {descriptions[archetype]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-slate-soft text-sm mb-5 font-light">
            Not sure which path is yours? Your Soul Map assessment reveals your primary and secondary archetype.
          </p>
          <a href="#" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium">
            Take Your Soul Map — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
