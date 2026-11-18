import "./QuantityBands.css";
import Section from "../ui/Section.jsx";

/** "Where X fits by quantity": cards with a segmented meter filled up to that band. */
export default function QuantityBands({ title, bands, note, tone }) {
  return (
    <Section tone={tone} title={title} note={note}>
      <ol className="qty">
        {bands.map((band, i) => (
          <li key={band.stage} className="qty__band">
            <span className="qty__bar" aria-hidden="true">
              {bands.map((other, j) => (
                <span
                  key={other.stage}
                  className={j <= i ? "qty__seg is-on" : "qty__seg"}
                />
              ))}
            </span>
            <p className="qty__stage">{band.stage}</p>
            <p className="qty__range">{band.range}</p>
            <p className="qty__text">{band.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
