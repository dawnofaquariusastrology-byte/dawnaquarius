import { Star } from "lucide-react";

const links = {
  Platform: ["Soul Map", "Celestial Paths", "Development Platform", "Career Marketplace"],
  Employers: ["Team Profiling", "Candidate Search", "Employer Plans", "Case Studies"],
  Company: ["About", "Blog", "Practitioners", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none stars-bg opacity-30"
        style={{ maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-mid to-gold flex items-center justify-center text-xs text-white">
                ✦
              </div>
              <span
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Dawn of Aquarius
              </span>
            </div>
            <p className="text-slate-soft text-xs font-light leading-relaxed max-w-[180px]">
              The career ecosystem for the Aquarian Age. Purpose-led. Soul-first.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="section-label mb-4" style={{ fontSize: "0.65rem" }}>{group}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-slate-soft hover:text-slate-bright transition-colors font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-soft text-xs font-light opacity-60">
            © {new Date().getFullYear()} Dawn of Aquarius. All rights reserved.
          </p>
          <div className="flex items-center gap-2 opacity-50">
            <Star size={10} className="text-gold fill-gold" />
            <span className="text-xs text-slate-soft font-light">
              Built for those who know there is more
            </span>
            <Star size={10} className="text-gold fill-gold" />
          </div>
        </div>
      </div>
    </footer>
  );
}
