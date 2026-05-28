"use client";

import { Mail, MessageSquare, Send } from "lucide-react";

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
          有项目想法、技术合作或开源交流？欢迎随时联系，通常 24 小时内回复。
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-colors duration-200 hover:border-neon-cyan/40 hover:shadow-[var(--glow-cyan)] cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-cyan/20 bg-cyan-50 transition-colors duration-200 group-hover:bg-cyan-100">
                <Mail className="h-6 w-6 text-neon-cyan" aria-hidden />
              </div>
              <div>
                <p className="text-sm text-text-muted">邮箱</p>
                <p className="font-medium text-text-primary">
                  hello@example.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/yichong108"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-colors duration-200 hover:border-neon-pink/40 hover:shadow-[var(--glow-pink)] cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-pink/20 bg-pink-50 transition-colors duration-200 group-hover:bg-pink-100">
                <MessageSquare className="h-6 w-6 text-neon-pink" aria-hidden />
              </div>
              <div>
                <p className="text-sm text-text-muted">GitHub</p>
                <p className="font-medium text-text-primary">
                  github.com/yichong108
                </p>
              </div>
            </a>
          </div>

          <form
            className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  姓名
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-border bg-bg-elevated/50 px-4 py-2.5 text-text-primary placeholder:text-text-muted/60 transition-colors duration-200 focus:border-neon-cyan/50 focus:bg-white focus:outline-none"
                  placeholder="你的名字"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  邮箱
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-bg-elevated/50 px-4 py-2.5 text-text-primary placeholder:text-text-muted/60 transition-colors duration-200 focus:border-neon-cyan/50 focus:bg-white focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  留言
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-text-primary placeholder:text-text-muted/60 transition-colors duration-200 focus:border-neon-cyan/50 focus:outline-none"
                  placeholder="描述你的项目或合作想法..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neon-cyan px-6 py-3 font-medium text-white shadow-md transition-colors duration-200 hover:bg-neon-cyan/90 cursor-pointer sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden />
              发送消息
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
