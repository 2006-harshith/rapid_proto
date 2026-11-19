import "./WhyChoose.css";
import Section from "../ui/Section.jsx";

/** Navy band: title + reasons (blue rule on the left) beside a captioned photo. */
export default function WhyChoose({ title, items, image, imageAlt, caption }) {
  return (
    <Section tone="dark">
      <div className="why-choose">
        <div>
          <h2 className="section-heading">{title}</h2>
          <ul className="why-choose__list">
            {items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="why-choose__figure">
          <img src={image} alt={imageAlt} loading="lazy" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      </div>
    </Section>
  );
}
