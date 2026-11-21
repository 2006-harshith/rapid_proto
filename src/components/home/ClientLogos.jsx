import Section from "../ui/Section.jsx";

/** Slim band of greyscale client logos that turn colour on hover. */
export default function ClientLogos({ label, items, tone }) {
  return (
    <Section tone={tone} slim>
      <p className="mb-6 text-center font-title text-label font-bold tracking-[0.14em] text-muted uppercase md:mb-8">
        {label}
      </p>
      {/* Item padding = the hover area around each logo; the list's negative
          margin cancels it top/bottom so the band keeps its spacing */}
      <ul className="-my-3.5 flex flex-wrap items-center justify-center gap-x-1 md:-my-4 md:gap-x-2">
        {items.map((client) => (
          <li key={client.name} className="group px-3.5 py-3.5 md:px-6 md:py-4">
            <img
              src={client.logo}
              alt={client.name}
              loading="lazy"
              className="block h-9 w-auto max-w-32 object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 sm:h-10 md:h-13 md:max-w-37.5"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
