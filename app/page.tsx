// Components
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContributionGraph from "@/components/ContributionGraph";
import {
  ReadmeCard,
  PinnedRepos,
  ShippedSoftware,
  Experience,
  Skills,
  Interests,
  SectionHeading,
} from "@/components/sections";

// Libs
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-full">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          <Sidebar />

          <div className="flex min-w-0 flex-1 flex-col gap-8">
            <ReadmeCard />
            <PinnedRepos />
            <ShippedSoftware />
            <Experience />
            <Skills />
            <Interests />

            <section>
              <SectionHeading emoji="📊">Contributions</SectionHeading>
              <ContributionGraph />
            </section>
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-4 text-center text-xs text-muted sm:px-6">
        <p>Built with Next.js & Tailwind · © 2026 {profile.name}</p>
      </footer>
    </div>
  );
}
