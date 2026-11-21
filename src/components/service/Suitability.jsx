import Section from "../ui/Section.jsx";
import RichText from "../ui/RichText.jsx";

const VARIANTS = {
  yes: {
    panel: "border-t-blue bg-surface",
    icon: "bg-blue stroke-white",
    path: "M3 8.5l3.2 3L13 4.5", // tick
  },
  no: {
    panel: "border-t-muted bg-white",
    icon: "bg-line stroke-muted",
    path: "M4.5 4.5l7 7M11.5 4.5l-7 7", // cross
  },
};

function FitColumn({ variant, title, items }) {
  const v = VARIANTS[variant];
  return (
    <div
      className={`rounded-xl border border-t-3 border-line p-5 sm:p-7 lg:px-9 lg:pt-9 lg:pb-8 ${v.panel}`}
    >
      <h3 className="mb-3 font-title text-xl font-medium text-ink sm:mb-5">
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3.5 py-3.5 text-base leading-[1.55] text-ink not-first:border-t not-first:border-line"
          >
            <svg
              className={`mt-px size-5.5 shrink-0 rounded-full fill-none p-1 stroke-[1.75] ${v.icon}`}
              viewBox="0 0 16 16"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={v.path} />
            </svg>
            {/* span keeps text + links as one flex item */}
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * "Is X the right process?": ticked "choose" list beside a crossed "consider another" list.
 * Items are strings; "[SLS](/services/sls)" becomes a link (see RichText).
 */
export default function Suitability({ title, choose, consider, note, tone }) {
  return (
    <Section tone={tone} title={title} note={note}>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <FitColumn variant="yes" {...choose} />
        <FitColumn variant="no" {...consider} />
      </div>
    </Section>
  );
}
