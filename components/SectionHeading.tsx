import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && <p className="kicker mb-3">{kicker}</p>}
      <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
      )}
    </div>
  );
}
