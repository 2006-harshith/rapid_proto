import Section from "../ui/Section.jsx";

const LABEL =
  "font-title text-xs font-semibold tracking-[0.1em] text-blue uppercase";

/**
 * "Applications by industry": card grid, each with a use case and typical parts.
 * Phones: a sideways swipe row (swipe-row) instead of a long stack.
 */
export default function Applications({
  title = "Applications by industry",
  subtitle,
  items,
  tone,
}) {
  return (
    <Section tone={tone} title={title} subtitle={subtitle}>
      <div className="grid gap-6 max-sm:swipe-row sm:grid-cols-2 lg:grid-cols-3">
        {items.map((app) => (
          <article
            key={app.name}
            className="flex flex-col rounded-xl border border-line bg-white p-5 transition hover:border-blue hover:shadow-card sm:p-8"
          >
            <h3 className="mb-5 border-b border-line pb-4 font-title text-xl font-medium text-ink sm:mb-6 sm:pb-5 sm:text-[1.3125rem]">
              {app.name}
            </h3>
            <p className={LABEL}>Use case</p>
            <p className="mt-2 mb-5 text-ui leading-[1.65] text-muted sm:mb-6">
              {app.useCase}
            </p>
            <p className={LABEL}>Typical parts</p>
            <ul className="mt-2">
              {app.parts.map((part) => (
                <li
                  key={part}
                  className="relative py-2 pl-4.5 text-ui text-ink not-first:border-t not-first:border-dashed not-first:border-line before:absolute before:top-1/2 before:left-0 before:-mt-0.75 before:size-1.5 before:rounded-full before:bg-mint"
                >
                  {part}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
