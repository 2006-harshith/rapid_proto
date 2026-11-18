import "./ProcessSteps.css";
import Section from "../ui/Section.jsx";
import { pad } from "../../utils/format.js";

/** "How X works": numbered cards joined by a thin connector. */
export default function ProcessSteps({ id, title, steps, tone }) {
  return (
    <Section id={id} tone={tone} title={title}>
      <ol className="steps">
        {steps.map((step, i) => (
          <li key={step.title} className="steps__item">
            <span className="steps__num">{pad(i + 1)}</span>
            <h3 className="steps__title">{step.title}</h3>
            <p className="steps__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
