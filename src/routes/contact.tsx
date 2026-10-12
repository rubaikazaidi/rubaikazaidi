import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, DocumentSlot } from "@/components/portfolio";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, Copy, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: `Contact — ${profile.name}` },
      {
        name: "description",
        content: "Get in touch, view profiles and download the full curriculum vitae.",
      },
      { property: "og:title", content: `Contact — ${profile.name}` },
      {
        property: "og:description",
        content: "Get in touch and download the full curriculum vitae.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [copyError, setCopyError] = useState(false);
  async function copy(value: string) {
    try { await navigator.clipboard.writeText(value); setCopied(value); setCopyError(false); }
    catch { setCopyError(true); }
  }
  return <>
    <PageHeader eyebrow="Contact" title="Get in touch" intro="For opportunities, collaborations and conversations." />
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <div>
        {[
          { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
          { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
        ].map(({ label, value, href, Icon }) => <div key={label} className="group flex items-center gap-4 border-b border-primary/20 py-6">
          <span className="flex size-12 shrink-0 items-center justify-center bg-secondary text-primary"><Icon className="size-5" /></span>
          <div className="min-w-0 flex-1"><p className="mb-2 text-xs uppercase text-muted-foreground">{label}</p><a href={href} className="break-words font-sans text-sm text-primary transition-colors hover:text-foreground sm:font-serif sm:text-2xl">{value}</a></div>
          <Button variant="outline" size="icon" title={`Copy ${label.toLowerCase()}`} aria-label={`Copy ${label.toLowerCase()}`} onClick={() => copy(value)}>{copied === value ? <Check /> : <Copy />}</Button>
        </div>)}
        <div aria-live="polite" className="mt-3 text-xs text-primary">{copyError ? "Could not copy. Please select the contact detail instead." : copied ? "Copied to clipboard" : ""}</div>
        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground"><MapPin className="size-5 text-primary" />{profile.location}</div>
        <Button asChild className="mt-6"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn<ArrowUpRight /></a></Button>
        {profile.socials.filter((social) => !["LinkedIn", "Email"].includes(social.label)).map((social) => <Button key={social.label} variant="link" asChild className="mt-6"><a href={social.href} target="_blank" rel="noopener noreferrer">{social.label}<ArrowUpRight /></a></Button>)}
      </div>
      <aside className="border-t-4 border-gold pt-6"><p className="text-xs uppercase text-primary">Rubaika Zaidi</p><h2 className="mt-3 font-serif text-3xl">Curriculum Vitae</h2><div className="mt-5"><DocumentSlot doc={{ label: profile.cv.label, file: profile.cv.file, type: "other" }} /></div></aside>
    </div>
  </>;
}
