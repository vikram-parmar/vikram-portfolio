import { identity, education } from "@shared/profile";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-border">
      <div className="shell flex flex-col gap-4 py-9 font-mono text-[12px] text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
        <div className="grid gap-1.5">
          <div className="text-foreground/80">
            <span className="text-accent"># </span>
            B.E. — {education.institution}, {education.year}
          </div>
          <div>{identity.location} · open to remote, global</div>
        </div>
        <div>
          <span className="text-accent">$ </span>echo &ldquo;© {new Date().getFullYear()}{" "}
          {identity.name}&rdquo;
        </div>
      </div>
    </footer>
  );
}
