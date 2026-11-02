// Single source of truth for site navigation (used by Navbar and Footer).
// Pages without a route yet fall through to the Coming Soon page.
export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    children: [
      { label: "SLA", name: "Stereolithography", to: "/services/sla" },
      { label: "SLS", name: "Selective Laser Sintering", to: "/services/sls" },
      { label: "MJF", name: "Multi Jet Fusion", to: "/services/mjf" },
      { label: "SRM", name: "Silicone Rubber Molding", to: "/services/srm" },
    ],
  },
  { label: "Contact us", to: "/contact", cta: true },
];
