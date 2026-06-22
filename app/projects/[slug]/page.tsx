import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.oneLiner,
    openGraph: { title: project.name, description: project.oneLiner },
  };
}

function Block({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-xs text-primary">{index}</span>
        <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="section-shell max-w-3xl">
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft size={14} /> All projects
      </Link>

      <Reveal>
        <p className="mt-6 font-mono text-sm text-primary">{project.period}</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {project.name}
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{project.oneLiner}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => <Badge key={s} variant="primary">{s}</Badge>)}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.github && (
            <Button asChild variant="outline" size="sm">
              <a href={project.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
            </Button>
          )}
          {project.liveDemo && (
            <Button asChild size="sm">
              <a href={project.liveDemo} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live demo</a>
            </Button>
          )}
          {!project.liveDemo && (
            <span className="text-sm text-muted-foreground">No live demo published yet.</span>
          )}
          {project.liveDemoNote && (
            <span className="text-xs text-muted-foreground/70">({project.liveDemoNote})</span>
          )}
        </div>

        {project.recognition && (
          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
            {project.recognition}
          </div>
        )}
      </Reveal>

      <div className="mt-12">
        <Block index="01" title="Problem Statement">
          <p className="leading-relaxed text-muted-foreground">{project.problemStatement}</p>
        </Block>

        <Block index="02" title="Business Objective">
          <p className="leading-relaxed text-muted-foreground">{project.businessObjective}</p>
        </Block>

        <Block index="03" title="Solution">
          <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
        </Block>

        <Block index="04" title="Architecture">
          <p className="leading-relaxed text-muted-foreground">{project.architecture.overview}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.architecture.components.map((c) => (
              <div key={c.name} className="rounded-lg border border-border bg-card p-4">
                <p className="font-display text-sm font-semibold text-foreground">{c.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block index="05" title="Workflow">
          <ol className="space-y-3">
            {project.workflow.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block index="06" title="Tech Stack">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => <Badge key={s} variant="primary">{s}</Badge>)}
          </div>
        </Block>

        <Block index="07" title="Features">
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block index="08" title="Screenshots">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((s, i) => (
              <div key={i} className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted text-muted-foreground">
                <ImageIcon size={22} />
                <span className="px-4 text-center text-xs">{s.caption}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block index="09" title="Challenges">
          <div className="space-y-5">
            {project.challenges.map((c) => (
              <div key={c.title}>
                <p className="font-display text-sm font-semibold text-foreground">{c.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block index="10" title="Lessons Learned">
          <ul className="space-y-2">
            {project.lessonsLearned.map((l, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block index="11" title="Future Improvements">
          <ul className="space-y-2">
            {project.futureImprovements.map((f, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  );
}
