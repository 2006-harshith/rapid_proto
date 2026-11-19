// Single source of truth for site navigation (used by Navbar, Footer and the home page).
// Pages without a route yet fall through to the Coming Soon page.

// The four service pages. `label` is the short code, `name` the full technology name.
export const serviceLinks = [
  { label: "SLA", name: "Stereolithography", to: "/services/sla" },
  { label: "SLS", name: "Selective Laser Sintering", to: "/services/sls" },
  { label: "MJF", name: "Multi Jet Fusion", to: "/services/mjf" },
  { label: "SRM", name: "Silicone Rubber Molding", to: "/services/srm" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", children: serviceLinks },
  { label: "Contact us", to: "/contact", cta: true },
];
