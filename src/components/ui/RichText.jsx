import { Link } from "react-router-dom";

// Markdown-style links: "[SLA](/services/sla)"
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders a plain string from the data files, turning [label](/route)
 * into router links styled with the site's `link-line` underline (bold blue,
 * navy on hover). Lets content stay as plain strings while still linking other pages.
 */
export default function RichText({ text }) {
  const parts = [];
  let last = 0;

  for (const match of text.matchAll(LINK)) {
    const [whole, label, to] = match;
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link
        key={match.index}
        to={to}
        className="link-line font-bold [--line-offset:-1px] [--link-hover:var(--color-navy)] [--link-rest:var(--color-blue)]"
      >
        {label}
      </Link>,
    );
    last = match.index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <>{parts}</>;
}
