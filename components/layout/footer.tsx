import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, NAV_LINKS } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-base font-bold text-foreground">
              priya<span className="text-primary">.</span>dev
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Python developer and data analyst based in {profile.location}.
            </p>
            <div className="mt-4 flex gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
