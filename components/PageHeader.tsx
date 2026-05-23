import { Container } from "@/components/Container";

export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="kicker mb-3">{kicker}</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
        </div>
      </Container>
    </section>
  );
}
