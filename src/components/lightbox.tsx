import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export type LightboxSource = { src: string; caption?: string };

export function Lightbox({ source, onClose }: { source: LightboxSource; onClose: () => void }) {
  return <Dialog.Root open onOpenChange={(open) => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-ink" />
      <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 px-4 pb-6 pt-20 outline-none sm:px-10">
        <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close preview" className="absolute right-4 top-4 border border-ink-foreground/40 text-ink-foreground hover:bg-secondary hover:text-secondary-foreground"><X /></Button></Dialog.Close>
        <img src={source.src} alt={source.caption ?? "Document preview"} className="max-h-[75dvh] max-w-full border border-gold/60 bg-card object-contain shadow-elegant" />
        <Dialog.Title className="max-w-2xl text-center text-xs leading-relaxed text-ink-foreground">{source.caption ?? "Document preview"}</Dialog.Title>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}

export function EnlargeableImage({ src, caption, className, imgClassName, label = "Enlarge" }: { src: string; caption?: string; className?: string; imgClassName?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <Button type="button" variant="ghost" onClick={() => setOpen(true)} className={`h-auto rounded-none p-0 ${className ?? "group block w-full cursor-zoom-in text-left"}`} aria-label={`${label}: ${caption ?? "document"}`}>
      <img src={src} alt={caption ?? "Document preview"} loading="lazy" className={imgClassName} />
    </Button>
    {open ? <Lightbox source={{ src, ...(caption ? { caption } : {}) }} onClose={() => setOpen(false)} /> : null}
  </>;
}
