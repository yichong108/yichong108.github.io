"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#projects", label: "作品" },
  { href: "#about", label: "关于" },
  { href: "#contact", label: "联系" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-4 right-4 z-40 mx-auto max-w-6xl">
      <nav
        className={`flex items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-xl transition-colors duration-200 ${
          scrolled
            ? "border-neon-cyan/25 bg-bg-surface/95 shadow-[var(--glow-soft)]"
            : "border-border bg-bg-surface/80"
        }`}
        aria-label="主导航"
      >
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-text-primary transition-colors duration-200 hover:text-neon-cyan cursor-pointer"
        >
          YC<span className="text-neon-cyan">.</span>dev
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors duration-200 hover:text-neon-cyan cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg border border-neon-cyan/30 bg-neon-cyan px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-neon-cyan/90 cursor-pointer md:inline-flex"
        >
          开始合作
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-text-muted transition-colors duration-200 hover:text-neon-cyan cursor-pointer md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-border bg-bg-surface/95 p-4 shadow-[var(--glow-soft)] backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-text-muted transition-colors duration-200 hover:bg-bg-elevated hover:text-neon-cyan cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block rounded-lg border border-neon-cyan/30 bg-neon-cyan px-3 py-2 text-center text-sm font-medium text-white cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                开始合作
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
