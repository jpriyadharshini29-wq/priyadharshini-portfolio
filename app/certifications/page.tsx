import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { certifications } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certifications from Microsoft, DeepLearning.AI, LinkedIn Learning, TCS, and AICTE.",
};

export default function CertificationsPage() {
  return (
    <div className="section-shell">
      <SectionLabel index="certifications">Certifications</SectionLabel>
      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40">
              <p className="font-display text-sm font-semibold text-foreground">{c.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              <p className="mt-2 font-mono text-[11px] text-primary">{c.year}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
