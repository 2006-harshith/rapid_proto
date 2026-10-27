// Single source of truth for site navigation (used by Navbar and Footer).
// Pages without a route yet fall through to the Coming Soon page.
export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "SLS 3D Printing", to: "/services/sls-printing" },
      { label: "Rapid Prototyping", to: "/services/rapid-prototyping" },
    ],
  },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
