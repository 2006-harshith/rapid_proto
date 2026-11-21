import Section from "../ui/Section.jsx";

/** "Our commitment": navy band with three columns, blue rule on the left of each. */
export default function Commitment({ title = "Our commitment", items }) {
  return (
    <Section tone="dark" title={title}>
      <ul className="grid gap-8 lg:grid-cols-3 lg:gap-12">
        {items.map((item) => (
          <li key={item.title} className="border-l-2 border-blue pl-5 sm:pl-6">
            <h3 className="font-title text-xl font-medium text-white sm:text-[1.375rem]">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-[1.7] text-soft sm:mt-3">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
