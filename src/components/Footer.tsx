import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-content flex flex-col items-center justify-between gap-3 font-mono text-xs text-[var(--fg-faint)] md:flex-row">
        <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with Next.js &middot; Designed from scratch</span>
      </div>
    </footer>
  );
}
