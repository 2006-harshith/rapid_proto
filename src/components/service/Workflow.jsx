import "./Workflow.css";
import Section from "../ui/Section.jsx";

/** "How we work with you": numbered dots on a horizontal track. */
export default function Workflow({ title = "How we work with you", steps, tone }) {
  return (
    <Section tone={tone} title={title}>
      <ol className="flow">
        {steps.map((step, i) => (
          <li key={step.title} className="flow__item">
            <span className="flow__dot">{i + 1}</span>
            <h3 className="flow__title">{step.title}</h3>
            <p className="flow__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
