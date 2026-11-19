import "./AboutIntro.css";
import Section from "../ui/Section.jsx";

/** "About us": eyebrow + title on the left, paragraph and a row of key facts on the right. */
export default function AboutIntro({ eyebrow, title, text, facts, tone }) {
  return (
    <Section tone={tone} layout="split" eyebrow={eyebrow} title={title}>
      <p className="about-intro__text">{text}</p>
      <dl className="about-intro__facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
