import "./MapCard.css";
import Icon from "../ui/Icon.jsx";

const external = { target: "_blank", rel: "noopener noreferrer" };

/**
 * Google Maps embed in a rounded card, with "Open in Google Maps" / "Get directions" below.
 * map       { embed, open, directions } (data/company.js)
 * expanded  + onToggle: optional "Expand map" button; the parent decides what expanding does.
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
    <div className={`map-card${expanded ? " map-card--expanded" : ""}`}>
      <div className="map-card__frame">
        <iframe
          title={title}
          src={map.embed}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {onToggle && (
          <button
            type="button"
            className="map-card__toggle"
            onClick={onToggle}
            aria-pressed={expanded}
          >
            <Icon name={expanded ? "shrink" : "expand"} />
            {expanded ? "Shrink map" : "Expand map"}
          </button>
        )}
      </div>
      <div className="map-card__bar">
        <div className="map-card__place">
          <span className="map-card__label">{label}</span>
          <span>{place}</span>
        </div>
        <div className="map-card__actions">
          <a href={map.open} className="map-card__btn" {...external}>
            Open in Google Maps
          </a>
          <a
            href={map.directions}
            className="map-card__btn map-card__btn--primary"
            {...external}
          >
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}
