import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "border-transparent bg-blue text-white hover:bg-blue-light",
  ghost: "border-white/40 text-white hover:border-white hover:bg-white/8",
};

/**
 * Pill button. `to` = internal route (router Link), `href` = anchor / hash / external.
 * variant "primary" (blue fill) | "ghost" (white outline, for dark backgrounds)
 * To make it full width on phones, lay it out in a flex column (see ContactCard).
 */
export default function Button({ to, href, variant = "primary", children }) {
  const className = `inline-flex items-center justify-center rounded-full border px-5.5 py-3.25 text-center font-title text-ui leading-5 font-semibold transition active:scale-[0.98] sm:px-6.5 ${VARIANTS[variant]}`;

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
