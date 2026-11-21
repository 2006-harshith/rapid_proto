// Single source of truth for site navigation (used by Navbar, Footer and the home page).
// Pages without a route yet fall through to the Coming Soon page.

import { services } from "./services/index.js";

// The service pages, from the service catalogue. `label` is the short code, `name` the full name.
export const serviceLinks = services.map((s) => ({
  label: s.code,
  name: s.name,
  to: s.route,
}));

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", children: serviceLinks },
  { label: "Contact us", to: "/contact", cta: true },
];
