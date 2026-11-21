import { Link } from "react-router-dom";
import Section from "../ui/Section.jsx";

/**
 * Grid of service cards; each whole card links to its service page.
 * 4 across (lg), 2 (sm), a sideways swipe row on phones.
 * items  [{code, name, to, image, text}]
 */
export default function TechnologyCards({ id, title, items, tone }) {
  return (
    <Section id={id} tone={tone} title={title}>
      <div className="grid gap-6 max-sm:swipe-row sm:grid-cols-2 lg:grid-cols-4">
        {items.map((tech) => (
          <Link
            key={tech.code}
            to={tech.to}
            className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-0.5 hover:border-blue hover:shadow-card focus-visible:border-blue active:scale-[0.99]"
          >
            <div className="overflow-hidden border-b border-line">
              {/* phones: a shorter frame showing the whole photo (white background) */}
              <img
                src={tech.image}
                alt={`Part produced with ${tech.name}`}
                loading="lazy"
                className="block aspect-4/3 w-full object-contain transition-transform duration-400 group-hover:scale-104 sm:aspect-square sm:object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="font-title text-lg leading-[1.35] text-ink">
                <span className="mb-1 block text-label font-bold tracking-[0.12em] text-blue">
                  {tech.code}
                </span>
                {tech.name}
              </h3>
              <p className="mt-3 text-ui leading-[1.65] text-muted">{tech.text}</p>
              {/* pinned to the card bottom so all four line up */}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-title text-sm font-semibold text-blue">
                Explore {tech.code}
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
