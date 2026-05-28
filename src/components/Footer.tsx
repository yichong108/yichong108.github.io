export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white/60 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-display text-sm text-text-muted">
          © {year}{" "}
          <span className="text-neon-cyan">Yichong</span>. 保留所有权利。
        </p>
        <p className="font-mono text-xs text-text-muted/80">
          Built with Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
