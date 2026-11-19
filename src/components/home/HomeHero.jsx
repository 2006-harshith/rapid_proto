import "./HomeHero.css";
import Button from "../ui/Button.jsx";

/**
 * Full-bleed home hero: navy gradient over a photo, title, lead and buttons.
 * actions  [{label, to | href, variant}] -> Button
 */
export default function HomeHero({ title, lead, image, actions }) {
  return (
    <section
      className="home-hero"
      style={{ "--home-hero-image": `url(${image})` }}
    >
      <div className="container">
        <h1 className="home-hero__title">{title}</h1>
        <p className="home-hero__lead">{lead}</p>
        <div className="home-hero__actions">
          {actions.map(({ label, ...action }) => (
            <Button key={label} {...action}>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
