import SectionHeading from "./SectionHeading.jsx";

const TONES = {
  plain: "bg-white",
  surface: "border-y border-line bg-surface",
  dark: "bg-navy-deep text-soft",
};

/**
 * Page section: full-width band + centred container + optional title.
 *
 * tone     "plain" (white) | "surface" (light slate) | "dark" (navy)
 * layout   "stack" (title above content) | "split" (sticky title left, content right)
 * title    section heading (h2) with the short accent rule
 * subtitle short line shown to the right of the title (stack layout only)
 * eyebrow  small uppercase label above the title
 * note     small italic footnote under the content
 * slim     less vertical padding (e.g. the client logo band)
 *
 * Without a title it is just the band + container, for sections that
 * place a <SectionHeading> themselves (see ServiceOverview).
 * The band carries data-tone, so headings/eyebrows inside a dark band recolour themselves.
 */
export default function Section({
  id,
  tone = "plain",
  layout = "stack",
  title,
  eyebrow,
  subtitle,
  note,
  slim = false,
  children,
}) {
  const split = layout === "split";
  const heading = title && (
    <div
      className={
        split ? "lg:sticky lg:top-[calc(var(--spacing-navbar)+2rem)]" : ""
      }
    >
      {eyebrow && (
        <p className="mb-3.5 font-title text-label font-bold tracking-[0.12em] text-blue uppercase in-data-[tone=dark]:text-mint">
          {eyebrow}
        </p>
      )}
      <SectionHeading>{title}</SectionHeading>
    </div>
  );

  return (
    <section
      id={id}
      data-tone={tone}
      className={`${TONES[tone]} ${slim ? "py-10 md:py-14" : "py-14 md:py-20 lg:py-24"}`}
    >
      <div className="site-container">
        {split ? (
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[4fr_8fr] lg:gap-16">
            <div>{heading}</div>
            <div>{children}</div>
          </div>
        ) : (
          <>
            {heading && (
              <div className="mb-8 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-8">
                {heading}
                {subtitle && (
                  <p className="text-md text-muted md:pb-1.5">{subtitle}</p>
                )}
              </div>
            )}
            {children}
          </>
        )}
        {note && <p className="mt-7 text-sm text-muted italic">{note}</p>}
      </div>
    </section>
  );
}
