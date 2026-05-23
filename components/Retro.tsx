import { cn } from "@/lib/cn";

// A row of warm color bars — the retro "rainbow" motif, tied to the division hues.
export function Stripes({ className }: { className?: string }) {
  const colors = ["bg-accent", "bg-gold", "bg-sage", "bg-plum", "bg-accent-strong"];
  return (
    <div className={cn("flex h-1.5 w-full overflow-hidden rounded-full", className)} aria-hidden>
      {colors.map((c) => (
        <span key={c} className={cn("h-full flex-1", c)} />
      ))}
    </div>
  );
}

// A vintage stamp / seal — double ruled border with letterspaced text.
export function Badge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-center rounded-md border-2 border-double border-accent/50 bg-paper/60 px-4 py-2 text-center backdrop-blur",
        className,
      )}
    >
      <span className="font-display text-sm font-semibold italic tracking-wide text-accent-strong">
        Est. 2026
      </span>
      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
        South Orange + Maplewood
      </span>
    </div>
  );
}

// A subtle retro sunburst of rays, for use as a hero backdrop.
export function Sunburst({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute", className)}
      aria-hidden
      style={{
        background:
          "repeating-conic-gradient(from 0deg, rgba(238,74,42,0.10) 0deg 6deg, transparent 6deg 12deg)",
        maskImage: "radial-gradient(closest-side, #000 10%, transparent 72%)",
        WebkitMaskImage: "radial-gradient(closest-side, #000 10%, transparent 72%)",
      }}
    />
  );
}
