import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 font-display text-2xl font-bold text-foreground">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        The page you&apos;re looking for may have been moved or removed.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
