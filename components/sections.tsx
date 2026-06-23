// Next.js
import type { ReactNode } from "react";

// HTML Components
import { RepoIcon, StarIcon } from "./icons";

// Libs
import { profile, type Repo } from "@/data/profile";

export function SectionHeading({
  emoji,
  children,
}: {
  emoji: string;
  children: ReactNode;
}) {
  return (
    <h2 className="mb-3 flex items-center gap-2 border-b border-line pb-2 text-base font-medium text-fg">
      <span aria-hidden>{emoji}</span>
      {children}
    </h2>
  );
}

export function ReadmeCard() {
  return (
    <section className="overflow-hidden rounded-md border border-line bg-canvas">
      <div className="flex items-center gap-2 border-b border-line bg-subtle px-4 py-2 text-sm text-muted">
        <RepoIcon className="h-4 w-4" />
        <span className="font-mono">README.md</span>
      </div>
      <div className="px-5 py-5 sm:px-7 sm:py-6">
        <h2 className="mb-3 border-b border-line pb-3 text-2xl font-semibold text-fg">
          {profile.readme.heading}
        </h2>
        <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-fg">
          {profile.readme.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  const titleClass = "text-sm font-semibold text-accent group-hover:underline";

  return (
    <div className="group flex h-full flex-col rounded-md border border-line bg-canvas p-4 transition-colors hover:border-muted/40">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <RepoIcon className="h-4 w-4 shrink-0 text-muted" />
          {repo.url ? (
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`truncate ${titleClass}`}
            >
              {repo.name}
            </a>
          ) : (
            <span className={`truncate ${titleClass}`}>{repo.name}</span>
          )}
        </div>
        {repo.visibility && (
          <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[11px] font-medium text-muted">
            {repo.visibility}
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-xs leading-relaxed text-muted">
        {repo.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: repo.languageColor }}
          />
          {repo.language}
        </span>
        {typeof repo.stars === "number" && (
          <span className="flex items-center gap-1">
            <StarIcon className="h-3.5 w-3.5" />
            {repo.stars}
          </span>
        )}
      </div>
    </div>
  );
}

export function PinnedRepos() {
  return (
    <section>
      <SectionHeading emoji="📌">Pinned</SectionHeading>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {profile.pinned.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export function CurrentlyWorking() {
  return (
    <section>
      <SectionHeading emoji="🛠️">Currently working on</SectionHeading>
      <div className="flex flex-col gap-3">
        {profile.currentlyWorkingOn.map((item) => (
          <div
            key={item.name}
            className="group flex items-start justify-between gap-3 rounded-md border border-line bg-canvas p-4 transition-colors hover:border-muted/40"
          >
            <div className="min-w-0">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent group-hover:underline"
                >
                  {item.name}
                </a>
              ) : (
                <span className="text-sm font-semibold text-accent">
                  {item.name}
                </span>
              )}
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
            {item.status && (
              <span className="shrink-0 rounded-full border border-success/40 px-2 py-0.5 text-[11px] font-medium text-success">
                {item.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ShippedSoftware() {
  return (
    <section>
      <SectionHeading emoji="🚀">Shipped Software</SectionHeading>
      <div className="flex flex-col gap-3">
        {profile.shipped.map((project) => (
          <div
            key={project.name}
            className="rounded-md border border-line bg-canvas p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-sm font-semibold">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span className="text-accent">{project.name}</span>
                )}
              </h3>
              {project.status && (
                <span className="shrink-0 rounded-full border border-success/40 px-2 py-0.5 text-[11px] font-medium text-success">
                  {project.status}
                </span>
              )}
            </div>

            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {project.summary}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted marker:text-muted">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {project.stack && project.stack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-2 py-0.5 text-[11px] font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <SectionHeading emoji="💼">Experience</SectionHeading>
      <div className="rounded-md border border-line bg-canvas">
        {profile.experience.map((job, i) => (
          <div
            key={`${job.company}-${i}`}
            className={`px-5 py-4 ${i > 0 ? "border-t border-line" : ""}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-sm font-semibold text-fg">
                {job.title}
                <span className="font-normal text-muted"> · </span>
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="font-medium text-accent">{job.company}</span>
                )}
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            {Array.isArray(job.description) ? (
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted marker:text-muted">
                {job.description.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {job.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section>
      <SectionHeading emoji="🧰">Tech I work with</SectionHeading>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {profile.skills.map((group) => (
          <div
            key={group.title}
            className="rounded-md border border-line bg-canvas p-4"
          >
            <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-muted">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-subtle px-2.5 py-0.5 text-xs text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Interests() {
  return (
    <section>
      <SectionHeading emoji="✨">Currently interested in</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {profile.interests.map((item) => (
          <span
            key={item}
            className="rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-sm text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
