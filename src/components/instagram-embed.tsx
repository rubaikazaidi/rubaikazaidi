import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadInstagramScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm?.Embeds) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(
      "script[data-instgrm-script]"
    ) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Instagram embed script failed to load"))
      );
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.dataset["instgrmScript"] = "true";
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () =>
      reject(new Error("Instagram embed script failed to load"))
    );
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export function InstagramEmbed({
  url,
  carouselIndex,
}: {
  url: string;
  /** 1-based carousel slide to open the embed on */
  carouselIndex?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadInstagramScript()
      .then(() => {
        if (cancelled) return;
        if (window.instgrm?.Embeds) {
          window.instgrm.Embeds.process();
        }
      })
      .catch(() => {
        // Instagram may be unavailable or blocked by the viewer; ignore silently.
      });
    return () => {
      cancelled = true;
    };
  }, [url, carouselIndex]);

  const basePostUrl = url.split("?")[0];
  const postUrl =
    carouselIndex && carouselIndex > 1
      ? `${basePostUrl}?img_index=${carouselIndex}`
      : basePostUrl;

  return (
    <div className="max-w-full overflow-hidden rounded-sm border border-border bg-card p-4">
      <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Instagram
      </p>
      <div
        ref={containerRef}
        className="mt-3 [&_blockquote.instagram-media]:!max-w-full [&_blockquote.instagram-media]:!min-w-0"
      >
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 3,
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: 0,
            maxWidth: "100%",
            minWidth: 0,
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        >
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent underline"
          >
            View this post on Instagram
          </a>
        </blockquote>
      </div>
    </div>
  );
}
