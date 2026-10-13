import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
        © {siteConfig.name}. Built with Next.js, Tailwind CSS, shadcn/ui.
      </div>
    </footer>
  );
}
