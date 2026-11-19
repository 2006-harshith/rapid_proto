import "./Section.css";

/**
 * Page section: full-width band + centred container + optional title.
 *
 * tone     "plain" (white) | "surface" (light slate) | "dark" (navy)
 * layout   "stack" (title above content) | "split" (sticky title left, content right)
 * title    section heading (h2) with the short accent rule
 * subtitle short line shown to the right of the title (stack layout only)
 * eyebrow  small uppercase label above the title
 * note     small italic footnote under the content
 * className extra class on the band (e.g. to change its padding)
 *
 * Without a title it is just the band + container, for sections that
 * place the `.section-heading` class themselves (see ServiceOverview).
 */
export default function Section({
  id,
  tone = "plain",
  layout = "stack",
  title,
  eyebrow,
  subtitle,
  note,
  className = "",
  children,
}) {
  const heading = title && (
    <div className="section-title">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-heading">{title}</h2>
    </div>
  );

  return (
    <section
      id={id}
      className={`section section--${tone}${className ? ` ${className}` : ""}`}
    >
      <div className="container">
        {layout === "split" ? (
          <div className="section-split">
            <div className="section-split__aside">{heading}</div>
            <div>{children}</div>
          </div>
        ) : (
          <>
            {subtitle ? (
              <div className="section-head">
                {heading}
                <p className="section-head__subtitle">{subtitle}</p>
              </div>
            ) : (
              heading
            )}
            {children}
          </>
        )}
        {note && <p className="section-note">{note}</p>}
      </div>
    </section>
  );
}
