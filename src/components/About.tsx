import { Code2, Layers, Zap } from "lucide-react";

const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "React Native",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS / Vercel",
  "CI/CD",
  "UI/UX",
];

const pillars = [
  {
    icon: Code2,
    title: "工程优先",
    description:
      "类型安全、测试覆盖与可观测性 — 让代码在团队规模扩大时依然清晰可维护。",
  },
  {
    icon: Layers,
    title: "架构清晰",
    description:
      "模块化边界、合理抽象与文档化决策，避免过度设计与技术债堆积。",
  },
  {
    icon: Zap,
    title: "体验驱动",
    description:
      "性能预算、无障碍与响应式细节 — 让用户感受到产品背后的用心。",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm uppercase tracking-widest text-neon-pink">
          02 / About
        </p>
        <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
          关于我
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="gradient-border rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-text-muted">
              我是一名全栈软件工程师，热衷于将复杂业务拆解为优雅的技术方案。从 0 到 1 的产品孵化、遗留系统重构到开源生态建设，我都乐于参与并推动落地。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              相信好的软件是<strong className="text-text-primary">工程纪律</strong>与<strong className="text-text-primary">设计品味</strong>的结合 — 既跑得稳，也长得好看。
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-neon-blue/20 bg-blue-50 px-3 py-1.5 text-sm text-neon-blue"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-col gap-6">
            {pillars.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-colors duration-200 hover:border-neon-cyan/30 hover:shadow-[var(--glow-cyan)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/20 bg-cyan-50">
                  <Icon className="h-6 w-6 text-neon-cyan" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
