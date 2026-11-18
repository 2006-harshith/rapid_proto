import "./Commitment.css";
import Section from "../ui/Section.jsx";

/** "Our commitment": navy band with three columns, blue rule on the left of each. */
export default function Commitment({ title = "Our commitment", items }) {
  return (
    <Section tone="dark" title={title}>
      <ul className="commit">
        {items.map((item) => (
          <li key={item.title} className="commit__item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
