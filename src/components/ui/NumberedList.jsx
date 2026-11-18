import "./NumberedList.css";
import { pad } from "../../utils/format.js";

/** Ruled list with small blue "01, 02…" numbers (enquiry checklist, design guidelines). */
export default function NumberedList({ items }) {
  return (
    <ol className="numbered-list">
      {items.map((item, i) => (
        <li key={item}>
          <span className="numbered-list__num">{pad(i + 1)}</span>
          <p>{item}</p>
        </li>
      ))}
    </ol>
  );
}
