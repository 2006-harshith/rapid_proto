import Icon from "../ui/Icon.jsx";

const external = { target: "_blank", rel: "noopener noreferrer" };

const MAP_BUTTON =
  "inline-flex items-center justify-center rounded-full border px-4.5 py-2.5 font-title text-sm font-semibold transition-colors";

/**
 * Google Maps embed in a rounded card, with "Open in Google Maps" / "Get directions" below
 * (full-width buttons on phones). Lifts slightly on hover (md+).
 * map       { embed, open, directions } (data/company.js)
 * expanded  + onToggle: optional "Expand map" button (md+); the parent decides what expanding does.
 */
export default function MapCard({
  title,
  label = "Find us",
  place,
  map,
  expanded = false,
  onToggle,
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-300 motion-reduce:transition-none ${
        expanded ? "" : "md:hover:-translate-y-1 md:hover:scale-[1.01] md:hover:shadow-float"
      }`}
    >
      <div
        className={`relative bg-surface ${
          expanded ? "h-[min(70vh,42.5rem)]" : "h-72 sm:h-85 md:h-105 lg:h-130"
        }`}
      >
        <iframe
          className="block size-full border-0"
          title={title}
          src={map.embed}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {onToggle && (
          // the map is already full width on phones
          <button
            type="button"
            className="absolute top-3 right-3 hidden items-center gap-2 rounded-full border border-line bg-white/88 px-3.5 py-2 font-title text-label font-semibold text-ink shadow-bar backdrop-blur-md transition-colors hover:border-blue hover:text-blue focus-visible:border-blue focus-visible:text-blue md:inline-flex"
            onClick={onToggle}
            aria-pressed={expanded}
          >
            <Icon name={expanded ? "shrink" : "expand"} className="size-3.5" />
            {expanded ? "Shrink map" : "Expand map"}
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4 border-t border-line p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-5 sm:py-4.5">
        <div className="flex min-w-0 flex-col gap-1 text-ui text-ink">
          <span className="font-title text-xs font-semibold tracking-[0.06em] text-muted uppercase">
            {label}
          </span>
          <span>{place}</span>
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <a
            href={map.open}
            className={`${MAP_BUTTON} border-line text-ink hover:border-blue hover:text-blue`}
            {...external}
          >
            Open in Google Maps
          </a>
          <a
            href={map.directions}
            className={`${MAP_BUTTON} border-navy bg-navy text-white hover:border-blue hover:bg-blue`}
            {...external}
          >
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}
