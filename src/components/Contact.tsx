import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm uppercase tracking-widest text-neon-blue">
          03 / Contact
        </p>
        <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
          一起创造
        </h2>
        <p className="mt-3 max-w-xl text-text-muted">
          有项目想法、技术合作或开源交流？欢迎发邮件联系，通常 24 小时内回复。
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="group mt-12 flex max-w-lg items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-colors duration-200 hover:border-neon-cyan/40 hover:shadow-[var(--glow-cyan)] cursor-pointer"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-cyan/20 bg-cyan-50 transition-colors duration-200 group-hover:bg-cyan-100">
            <Mail className="h-6 w-6 text-neon-cyan" aria-hidden />
          </div>
          <div>
            <p className="text-sm text-text-muted">邮箱</p>
            <p className="font-medium text-text-primary">{siteConfig.email}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
