import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

/** Navy band: title + reasons (blue rule on the left) beside a captioned photo. */
export default function WhyChoose({ title, items, image, imageAlt, caption }) {
  return (
    <Section tone="dark">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading className="mb-8 md:mb-12">{title}</SectionHeading>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.title}
                className="border-l-2 border-blue py-3 pl-5 md:py-6"
              >
                <h3 className="font-title text-lg text-white">{item.title}</h3>
                <p className="mt-1.5 text-base leading-[1.65] text-soft">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-white sm:mx-auto sm:max-w-120 lg:max-w-none">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="block aspect-square w-full object-cover"
          />
          {caption && (
            <figcaption className="border-t border-line px-6 py-4 text-center text-sm text-muted">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </Section>
  );
}
