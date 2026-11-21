/** Wrapping row of rounded labels for short items with no description (e.g. SRM finishing options). */
export default function TagList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2.5 md:gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-white px-4.5 py-2.5 font-title text-sm font-medium text-ink transition-colors hover:border-blue hover:text-blue md:px-5.5 md:py-3 md:text-ui"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
