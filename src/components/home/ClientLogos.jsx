import "./ClientLogos.css";
import Section from "../ui/Section.jsx";

/** Slim band of greyscale client logos that turn colour on hover. */
export default function ClientLogos({ label, items, tone }) {
  return (
    <Section tone={tone} className="client-logos">
      <p className="client-logos__label">{label}</p>
      <ul className="client-logos__list">
        {items.map((client) => (
          <li key={client.name} className="client-logos__item">
            <img src={client.logo} alt={client.name} loading="lazy" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
