import Section from "../ui/Section.jsx";

/** "Key advantages": sticky title left, two-column list right; blue rule grows on hover. */
export default function Advantages({ title = "Key advantages", items, tone }) {
  return (
    <Section tone={tone} layout="split" title={title}>
      <ul className="grid sm:grid-cols-2 sm:gap-x-12">
        {items.map((item) => (
          <li
            key={item.title}
            className="relative border-t border-line pt-5 pb-6 before:absolute before:inset-x-0 before:-top-px before:h-px before:origin-left before:scale-x-0 before:bg-blue before:transition-transform before:duration-400 hover:before:scale-x-100 sm:pt-7 sm:pb-8"
          >
            <h3 className="font-title text-lg font-medium text-ink sm:text-lead">
              {item.title}
            </h3>
            <p className="mt-1.5 text-base leading-[1.65] text-muted sm:mt-2">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
