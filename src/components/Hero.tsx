import { ArrowDown, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-200/45 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-neon-cyan shadow-sm">
          <Sparkles className="h-4 w-4" aria-hidden />
          <span>全栈开发 · 开源贡献者</span>
        </div>

        <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
          <span className="text-text-primary">构建</span>{" "}
          <span className="text-glow-cyan text-neon-cyan">下一代</span>
          <br />
          <span className="text-text-primary">数字</span>{" "}
          <span className="text-glow-pink text-neon-pink">体验</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
          专注 Web、移动端与开发者工具。用清晰的架构、稳健的工程实践与注重细节的设计，将想法落地为可维护的产品。
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-neon-cyan px-6 py-3 font-medium text-white shadow-md transition-colors duration-200 hover:bg-neon-cyan/90 cursor-pointer"
          >
            浏览作品
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="https://github.com/yichong108"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 font-medium text-text-primary shadow-sm transition-colors duration-200 hover:border-neon-cyan/40 hover:text-neon-cyan cursor-pointer"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {[
            { label: "项目交付", value: "20+" },
            { label: "技术栈", value: "15+" },
            { label: "开源 Star", value: "1.2k" },
            { label: "从业年限", value: "5+" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-text-muted">{stat.label}</dt>
              <dd className="font-display mt-1 text-2xl font-bold text-neon-cyan sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
