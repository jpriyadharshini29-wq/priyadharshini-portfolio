import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";
import { profile } from "@/data/profile";

export function AboutSnapshot() {
  return (
    <section className="section-shell border-t border-border">
      <SectionLabel index="02">A Quick Snapshot</SectionLabel>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="leading-relaxed text-muted-foreground">{profile.summary}</p>
          <Link
            href="/about"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Read the full story <ArrowUpRight size={14} />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {skillGroups.flatMap((g) => g.items).slice(0, 14).map((s) => (
              <Badge key={s.name} variant="primary">{s.name}</Badge>
            ))}
          </div>
          <Link
            href="/skills"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            See the full skill set <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
