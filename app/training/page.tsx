import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { training } from "@/data/experience";

export const metadata: Metadata = {
  title: "Technical Training",
  description: "The AI Programming Assistant (AIPA) program at NSTI Chennai, supported by Microsoft and Edunet Foundation.",
};

export default function TrainingPage() {
  return (
    <div className="section-shell">
      <SectionLabel index="training">Technical Training</SectionLabel>
      <Reveal>
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-foreground">{training.program}</h3>
            <span className="font-mono text-xs text-muted-foreground">{training.period}</span>
          </div>
          <p className="text-sm text-muted-foreground">{training.institute} — {training.supportedBy}</p>
          <p className="mb-5 text-xs text-muted-foreground/70">{training.certification}</p>
          <p className="leading-relaxed text-muted-foreground">{training.description}</p>
          <ul className="mt-5 space-y-2">
            {training.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
          Curriculum modules
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {training.modules.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="font-display text-sm font-semibold text-foreground">{m.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
