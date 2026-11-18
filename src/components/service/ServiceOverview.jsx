import "./ServiceOverview.css";
import Section from "../ui/Section.jsx";

/** "Overview" title beside the intro paragraph, then the "At a glance" stat row. */
export default function ServiceOverview({ text, stats, tone }) {
  return (
    <Section tone={tone}>
      <div className="overview">
        <h2 className="section-heading">Overview</h2>
        <p className="overview__text">{text}</p>
      </div>

      <dl className="stats" aria-label="At a glance">
        {stats.map((stat) => (
          <div key={stat.label} className="stats__item">
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
