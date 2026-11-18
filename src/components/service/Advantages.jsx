import "./Advantages.css";
import Section from "../ui/Section.jsx";

/** "Key advantages": sticky title left, two-column list right; blue rule grows on hover. */
export default function Advantages({ title = "Key advantages", items, tone }) {
  return (
    <Section tone={tone} layout="split" title={title}>
      <ul className="advantages">
        {items.map((item) => (
          <li key={item.title} className="advantages__item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
