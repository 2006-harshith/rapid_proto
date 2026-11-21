import Section from "../ui/Section.jsx";

/**
 * "About us": eyebrow + title on the left, paragraph and key facts on the right.
 * Facts: a row of three from sm; label ↔ value rows on phones.
 */
export default function AboutIntro({ eyebrow, title, text, facts, tone }) {
  return (
    <Section tone={tone} layout="split" eyebrow={eyebrow} title={title}>
      <p className="text-md leading-[1.75] font-normal text-muted md:text-lg">
        {text}
      </p>
      <dl className="mt-8 grid border-t border-line sm:mt-10 sm:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-baseline justify-between gap-4 border-b border-line py-3.5 sm:block sm:border-b-0 sm:pt-6 sm:pr-6 sm:pb-0 sm:not-first:border-l sm:not-first:pl-6"
          >
            <dt className="font-title text-xs font-semibold tracking-[0.08em] text-muted uppercase">
              {fact.label}
            </dt>
            <dd className="text-right font-title text-lg text-ink sm:mt-1.5 sm:text-left">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
