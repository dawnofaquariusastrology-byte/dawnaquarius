"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-mid to-gold flex items-center justify-center text-xs font-bold text-white">
            ✦
          </div>
          <span
            className="text-xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Dawn of Aquarius
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#discover" className="text-sm text-slate-soft hover:text-slate-bright transition-colors">
            How It Works
          </a>
          <a href="#paths" className="text-sm text-slate-soft hover:text-slate-bright transition-colors">
            Celestial Paths
          </a>
          <a href="#employers" className="text-sm text-slate-soft hover:text-slate-bright transition-colors">
            For Employers
          </a>
          <a href="#pricing" className="text-sm text-slate-soft hover:text-slate-bright transition-colors">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate-soft hover:text-slate-bright transition-colors px-4 py-2">
            Sign in
          </a>
          <a href="#" className="btn-primary text-sm font-medium px-5 py-2 rounded-full">
            Begin Your Journey
          </a>
        </div>

        <button
          className="md:hidden text-slate-soft hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          <a href="#discover" className="text-sm text-slate-soft" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#paths" className="text-sm text-slate-soft" onClick={() => setOpen(false)}>Celestial Paths</a>
          <a href="#employers" className="text-sm text-slate-soft" onClick={() => setOpen(false)}>For Employers</a>
          <a href="#pricing" className="text-sm text-slate-soft" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#" className="btn-primary text-sm font-medium px-5 py-2.5 rounded-full text-center mt-2">
            Begin Your Journey
          </a>
        </div>
      )}
    </nav>
  );
}
