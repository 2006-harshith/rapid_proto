import "./Suitability.css";
import Section from "../ui/Section.jsx";
import RichText from "../ui/RichText.jsx";

function CheckIcon() {
  return (
    <svg className="fit__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="fit__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />
    </svg>
  );
}

function FitColumn({ variant, title, items, Icon }) {
  return (
    <div className={`fit__col fit__col--${variant}`}>
      <h3 className="fit__title">{title}</h3>
      <ul className="fit__list">
        {items.map((item) => (
          <li key={item}>
            <Icon />
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
      <div className="fit">
        <FitColumn variant="yes" Icon={CheckIcon} {...choose} />
        <FitColumn variant="no" Icon={CrossIcon} {...consider} />
      </div>
    </Section>
  );
}
