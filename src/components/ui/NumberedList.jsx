import { pad } from "../../utils/format.js";

/** Ruled list with small blue "01, 02…" numbers (enquiry checklist, design guidelines). */
export default function NumberedList({ items }) {
  return (
    <ol className="border-t border-line">
      {items.map((item, i) => (
        <li
          key={item}
          className="grid grid-cols-[2.5rem_1fr] items-baseline border-b border-line py-4 md:grid-cols-[3rem_1fr] md:py-5"
        >
          <span className="font-title text-label font-semibold tracking-[0.06em] text-blue">
            {pad(i + 1)}
          </span>
          <p className="text-md leading-[1.55] text-ink">{item}</p>
        </li>
      ))}
    </ol>
  );
}
