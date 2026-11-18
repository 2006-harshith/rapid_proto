import "./ServiceHero.css";
import Button from "../ui/Button.jsx";

/** Navy hero: title, lead, "Contact us" + an in-page link, product photo on the right. */
export default function ServiceHero({ title, lead, image, imageAlt, link }) {
  return (
    <section className="service-hero">
      <div className="container service-hero__grid">
        <div>
          <h1 className="service-hero__title">{title}</h1>
          <p className="service-hero__lead">{lead}</p>
          <div className="service-hero__actions">
            <Button to="/contact">Contact us</Button>
            {link && (
              <Button href={link.href} variant="ghost">
                {link.label}
              </Button>
            )}
          </div>
        </div>
        <figure className="service-hero__figure">
          <img src={image} alt={imageAlt} />
        </figure>
      </div>
    </section>
  );
}
