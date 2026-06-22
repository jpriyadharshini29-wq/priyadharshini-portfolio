import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Two years as a Customer Support Executive at Foundever, and the transferable skills it built.",
};

export default function ExperiencePage() {
  return (
    <div className="section-shell">
      <SectionLabel index="experience">Experience</SectionLabel>
      <Reveal>
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-foreground">{experience.role}</h3>
            <span className="font-mono text-xs text-muted-foreground">{experience.period}</span>
          </div>
          <p className="mb-5 text-sm text-muted-foreground">{experience.company}</p>
          <ul className="space-y-3">
            {experience.responsibilities.map((r, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
              Transferable skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {experience.transferableSkills.map((s) => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
