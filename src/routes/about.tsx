import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: `About — ${profile.name}` },
      {
        name: "description",
        content:
          "Programming and robotics since nine, machine learning and applied AI, AquaSmart, SAAI research, and a rifle shooting record built on repeatable habits.",
      },
      { property: "og:title", content: `About — ${profile.name}` },
      {
        property: "og:description",
        content:
          "How machine learning, applied AI projects and competitive shooting run side by side.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={profile.tagline} title="About" />
      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)]">
        <div className="max-w-3xl">
          <p className="border-l-2 border-gold pl-6 text-lg leading-relaxed text-foreground/85">
            I started programming and robotics at nine and have been building ever since.
            I&rsquo;m drawn to machine learning and applied AI, especially where they solve real
            problems. AquaSmart, my irrigation system for the Earth Prize, uses soil moisture and
            rainfall sensors to cut water waste, and at SAAI I built a sentiment-classification
            pipeline for IPL text. I work in Python and Java, and I&rsquo;m strengthening my machine
            learning fundamentals through experiments, evaluation and deployment.
          </p>
          <p className="mt-10 border-t border-primary/20 pt-10 text-lg leading-relaxed text-foreground/85">
            Shooting runs alongside this. At the 2025 National Shooting Championship I raised my 10m
            air rifle score by 13.6 points over the year before. Training taught me that progress
            comes from small, repeatable habits, measured honestly. I want to bring that approach to
            [course], and my next project will turn my own training data into charts and models.
          </p>
        </div>
        <aside className="border-t-4 border-gold lg:sticky lg:top-6">
          <p className="text-xs uppercase tracking-[0.18em] text-primary">In her words</p>
          <p className="mt-4 font-serif text-xl italic leading-relaxed text-foreground/80">
            &ldquo;Progress comes from small, repeatable habits, measured honestly.&rdquo;
          </p>
        </aside>
      </div>
    </>
  );
}
