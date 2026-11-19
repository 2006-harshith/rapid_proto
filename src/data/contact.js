// Contact page copy. Contact values themselves come from company.js.
// Rendered by src/pages/Contact.jsx.
import { company } from "./company.js";

export const contact = {
  hero: {
    eyebrow: "Contact us",
    title: "Let's build your next prototype",
    lead: "Call, email or visit our Coimbatore office. Tell us about your part and our team will get back to you.",
  },
  detailsTitle: "Get in touch",
  // ContactRow props, in display order
  rows: [
    {
      icon: "phone",
      label: "Call us",
      value: company.phone.label,
      href: company.phone.href,
      copy: company.phone.label,
    },
    {
      icon: "email",
      label: "Email us",
      value: company.email.label,
      href: company.email.href,
      copy: company.email.label,
    },
    {
      icon: "address",
      label: `Visit us · ${company.address.title}`,
      value: company.address.lines,
      href: company.map.open,
      external: true,
    },
    {
      icon: "website",
      label: "Website",
      value: company.website.label,
      href: company.website.href,
      external: true,
    },
  ],
  people: {
    title: "Key contacts",
    fields: ["people", "facilities"], // ContactList rows
  },
  map: {
    label: "Find us",
    title: `${company.name} on Google Maps`,
    place: company.address.lines.join(" "),
  },
};
