/**
 * Section title (h2) with the short accent rule above it. Inside anything with
 * data-tone="dark" (a dark Section, a navy card) it turns white with a mint rule.
 * No outer margin: the caller adds it with `className` (e.g. "mb-8 md:mb-12").
 */
export default function SectionHeading({ as: Tag = "h2", className = "", children }) {
  return (
    <Tag
      className={`relative pt-5 font-title text-[clamp(1.625rem,2.4vw+0.75rem,2.375rem)] leading-[1.2] text-balance text-ink before:absolute before:top-0 before:left-0 before:h-0.5 before:w-10 before:bg-blue in-data-[tone=dark]:text-white in-data-[tone=dark]:before:bg-mint ${className}`}
    >
      {children}
    </Tag>
  );
}
