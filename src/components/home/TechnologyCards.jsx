import { Link } from "react-router-dom";
import "./TechnologyCards.css";
import Section from "../ui/Section.jsx";

/**
 * Grid of service cards; each whole card links to its service page.
 * items  [{code, name, to, image, text}]
 */
export default function TechnologyCards({ id, title, items, tone }) {
  return (
    <Section id={id} tone={tone} title={title}>
      <div className="tech-cards">
        {items.map((tech) => (
          <Link key={tech.code} to={tech.to} className="tech-card">
            <div className="tech-card__media">
              <img
                src={tech.image}
                alt={`Part produced with ${tech.name}`}
                loading="lazy"
              />
            </div>
            <div className="tech-card__body">
              <h3 className="tech-card__title">
                <span className="tech-card__code">{tech.code}</span>
                {tech.name}
              </h3>
              <p className="tech-card__text">{tech.text}</p>
              <span className="tech-card__more">
                Explore {tech.code}
                <span className="tech-card__arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
