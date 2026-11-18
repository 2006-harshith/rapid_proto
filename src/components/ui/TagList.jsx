import "./TagList.css";

/** Wrapping row of rounded labels for short items with no description (e.g. SRM finishing options). */
export default function TagList({ items }) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item} className="tag-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
