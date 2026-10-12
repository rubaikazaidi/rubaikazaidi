import { useEffect, useState } from "react";

export type LightboxSource = {
  src: string;
  caption?: string;
};

export function Lightbox({
  source,
  onClose,
}: {
  source: LightboxSource;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={source.caption ?? "Document preview"}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-ink/97 p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-6 top-6 border border-ink-foreground/40 px-4 py-2 font-sans text-xs uppercase tracking-[0.2em] text-ink-foreground transition-colors hover:border-gold hover:text-gold"
      >
        Close
      </button>
      <img
        src={source.src}
        alt={source.caption ?? "Document preview"}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-full border border-gold/60 bg-card object-contain shadow-elegant"
      />
      {source.caption ? (
        <p className="max-w-2xl text-center font-sans text-xs uppercase tracking-[0.22em] text-ink-foreground/80">
          {source.caption}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Wraps a clickable thumbnail that enlarges into the full-screen Lightbox.
 * The dialog only mounts after the first click, so server render and client
 * hydration always agree.
 */
export function EnlargeableImage({
  src,
  caption,
  className,
  imgClassName,
  label = "Enlarge",
}: {
  src: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "group block w-full cursor-zoom-in text-left"}
        aria-label={`${label}: ${caption ?? "document"}`}
      >
        <img
          src={src}
          alt={caption ?? "Document preview"}
          loading="lazy"
          className={imgClassName}
        />
      </button>
      {open ? (
        <Lightbox source={{ src, ...(caption ? { caption } : {}) }} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
