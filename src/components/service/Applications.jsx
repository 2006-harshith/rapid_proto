import "./Applications.css";
import Section from "../ui/Section.jsx";

/** "Applications by industry": card grid, each with a use case and typical parts. */
export default function Applications({
  title = "Applications by industry",
  subtitle,
  items,
  tone,
}) {
  return (
    <Section tone={tone} title={title} subtitle={subtitle}>
      <div className="apps">
        {items.map((app) => (
          <article key={app.name} className="app-card">
            <h3 className="app-card__name">{app.name}</h3>
            <p className="app-card__label">Use case</p>
            <p className="app-card__text">{app.useCase}</p>
            <p className="app-card__label">Typical parts</p>
            <ul className="app-card__parts">
              {app.parts.map((part) => (
                <li key={part}>{part}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
