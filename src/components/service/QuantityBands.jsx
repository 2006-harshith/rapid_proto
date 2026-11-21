import Section from "../ui/Section.jsx";

/**
 * "Where X fits by quantity": cards with a segmented meter filled up to that band.
 * One column per band from md; 4+ bands wrap to 2 per row until lg. Stacked on phones.
 */
export default function QuantityBands({ title, bands, note, tone }) {
  const columns =
    bands.length > 3
      ? "md:grid-cols-2 lg:grid-cols-[repeat(var(--qty-cols),minmax(0,1fr))]"
      : "md:grid-cols-[repeat(var(--qty-cols),minmax(0,1fr))]";

  return (
    <Section tone={tone} title={title} note={note}>
      <ol
        className={`grid gap-4 sm:gap-6 ${columns}`}
        style={{ "--qty-cols": bands.length }}
      >
        {bands.map((band, i) => (
          <li
            key={band.stage}
            className="rounded-xl border border-line bg-white p-5 transition hover:border-blue hover:shadow-card sm:px-7 sm:pt-8 sm:pb-9"
          >
            <span className="mb-5 flex gap-1.5 sm:mb-7" aria-hidden="true">
              {bands.map((other, j) => (
                <span
                  key={other.stage}
                  className={`h-1 flex-1 rounded-full ${j <= i ? "bg-blue" : "bg-line"}`}
                />
              ))}
            </span>
            <p className="font-title text-xs font-semibold tracking-[0.1em] text-blue uppercase">
              {band.stage}
            </p>
            <p className="mt-2 font-title text-[clamp(1.5rem,2.5vw,1.875rem)] leading-[1.2] font-medium tracking-[-0.01em] text-ink">
              {band.range}
            </p>
            <p className="mt-3.5 border-t border-line pt-3.5 text-ui leading-[1.65] text-muted">
              {band.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
