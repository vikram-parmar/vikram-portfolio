export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-6 text-center font-mono text-foreground">
      <div className="text-[12px] uppercase tracking-[0.08em] text-primary">
        <span className="text-accent">$ </span>cd /that-page
      </div>
      <h1 className="cursor mt-4 text-[clamp(1.8rem,5vw,2.8rem)] font-bold tracking-[-0.02em]">
        404: no such file or directory
      </h1>
      <p className="prose-serif mt-3 max-w-md text-[15px] text-muted-foreground">
        That route doesn&rsquo;t exist. Head back to the homepage.
      </p>
      <a
        href="/"
        className="mt-8 bg-primary px-6 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        cd ~
      </a>
    </div>
  );
}
