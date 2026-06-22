import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="section-shell border-t border-border">
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <SectionLabel index="01">Featured Projects</SectionLabel>
        <Link href="/projects" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
          View all projects <ArrowUpRight size={14} />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <div className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg">
              <Link href={`/projects/${p.slug}`} className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold leading-snug text-foreground group-hover:text-primary">{p.name}</h3>
                  <ArrowUpRight size={18} className="shrink-0 text-muted-foreground group-hover:text-primary" />
                </div>
                <p className="font-mono text-xs text-muted-foreground/70">{p.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.oneLiner}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
              </Link>
              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary">
                    <Github size={14} /> Repository
                  </a>
                )}
                {p.liveDemo ? (
                  <a href={p.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground/60">
                    <ExternalLink size={14} /> No live demo yet
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 sm:hidden">
        <Button asChild variant="outline">
          <Link href="/projects">View all projects <ArrowUpRight size={15} /></Link>
        </Button>
      </div>
    </section>
  );
}
