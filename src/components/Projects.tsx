"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "@/data/projects";

const categories: Array<ProjectCategory | "all"> = [
  "all",
  "web",
  "mobile",
  "tool",
  "open-source",
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-neon-cyan">
              01 / Portfolio
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              精选作品
            </h2>
            <p className="mt-3 max-w-xl text-text-muted">
              专注工具与效率产品 — 用清晰的交互与本地优先的设计，帮助用户更好地进入心流。
            </p>
          </div>

          {projects.length > 1 && (
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="项目分类筛选"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active === cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active === cat
                      ? "border border-neon-cyan/40 bg-neon-cyan text-white shadow-sm"
                      : "border border-border bg-white text-text-muted shadow-sm hover:border-neon-cyan/30 hover:text-text-primary"
                  }`}
                >
                  {cat === "all" ? "全部" : categoryLabels[cat]}
                </button>
              ))}
            </div>
          )}
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-text-muted">
            该分类暂无项目，敬请期待。
          </p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <li>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm card-glow cursor-pointer ${
          project.featured ? "lg:col-span-1" : ""
        }`}
      >
        {project.featured && (
          <span className="absolute right-4 top-4 rounded-full border border-neon-pink/30 bg-pink-50 px-2.5 py-0.5 text-xs font-medium text-neon-pink">
            Featured
          </span>
        )}

        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs text-neon-cyan/80">
            {categoryLabels[project.category]}
          </span>
          <span className="text-xs text-text-muted">{project.year}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-text-primary transition-colors duration-200 group-hover:text-neon-cyan">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-bg-elevated px-2 py-0.5 text-xs text-text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neon-cyan transition-colors duration-200 hover:text-neon-cyan/80 cursor-pointer"
              aria-label={`查看 ${project.title} 演示`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              演示
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors duration-200 hover:text-text-primary cursor-pointer"
              aria-label={`查看 ${project.title} 源码`}
            >
              <GitHubIcon className="h-4 w-4" />
              源码
            </a>
          )}
        </div>
      </article>
    </li>
  );
}
