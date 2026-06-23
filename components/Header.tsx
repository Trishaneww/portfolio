// HTML Components
import Avatar from "./Avatar";
import { GithubIcon, LinkedinIcon } from "./icons";

// Components
import ThemeToggle from "./ThemeToggle";

// Libs
import { profile } from "@/data/profile";

export default function Header() {
  const github = profile.links.find((l) => l.icon === "github")?.href;
  const linkedin = profile.links.find((l) => l.icon === "linkedin")?.href;

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-header/80 backdrop-blur supports-[backdrop-filter]:bg-header/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <Avatar name={profile.name} src={profile.avatar} size={28} />
          <div className="flex min-w-0 items-baseline gap-2">
            <span className="truncate text-sm font-semibold text-fg">
              {profile.name}
            </span>
            <span className="hidden truncate font-mono text-sm text-muted sm:inline">
              {profile.username}
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-1.5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-subtle hover:text-fg"
            >
              <GithubIcon />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-subtle hover:text-fg"
            >
              <LinkedinIcon />
            </a>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
