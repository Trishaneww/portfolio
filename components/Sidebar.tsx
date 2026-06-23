import { profile } from "@/data/profile";
import Avatar from "./Avatar";
import { DownloadIcon, ICONS } from "./icons";

export default function Sidebar() {
  return (
    <aside className="md:w-[296px] md:shrink-0">
      <div className="md:sticky md:top-20">
        <div className="flex flex-col items-center gap-4 md:items-stretch">
          {/* Avatar */}
          <div className="flex justify-center md:block">
            <Avatar
              name={profile.name}
              src={profile.avatar}
              size={296}
              className="!h-40 !w-40 md:!h-[296px] md:!w-[296px]"
            />
          </div>

          {/* Name + handle */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold leading-tight text-fg">{profile.name}</h1>
            <p className="font-mono text-xl font-light text-muted">{profile.username}</p>
          </div>

          {/* Bio */}
          <p className="text-center text-base text-fg md:text-left">{profile.bio}</p>

          {/* Resume button */}
          <a
            href={profile.resumeUrl}
            className="flex h-8 items-center justify-center gap-2 rounded-md border border-line bg-subtle px-4 text-sm font-medium text-fg transition-colors hover:border-muted/40 hover:bg-line/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            download
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </a>

          {/* Contact links */}
          <ul className="flex flex-col items-center gap-2 text-sm md:items-start">
            {profile.links.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <li key={link.label} className="flex items-center gap-2 text-muted">
                  <Icon className="h-4 w-4 shrink-0" />
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="break-all text-fg hover:text-accent hover:underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="break-all text-fg">{link.label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
