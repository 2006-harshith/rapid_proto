import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Pill button. `to` = internal route (router Link), `href` = anchor / hash / external.
 * variant "primary" (blue fill) | "ghost" (white outline, for dark backgrounds)
 */
export default function Button({ to, href, variant = "primary", children }) {
  const className = `btn btn--${variant}`;

  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
